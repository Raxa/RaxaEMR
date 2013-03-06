/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
Ext.define('RaxaEmr.controller.Session', {
    extend: 'Ext.app.Controller',
    requires: ['RaxaEmr.view.Main', 'RaxaEmr.view.NewAccount'],
    config: {


        routes: {
            'Login': 'showLogin',
            'Dashboard': 'showDashboard'
        },

        refs: {
            passwordID: '#passwordID',
            userName: '#userName',
            signInButton: '#signInButton',
            newAccountButton: '#newAccountButton',
            newProviderAccountButton: '#newProviderAccountButton',
            newPatientAccountButton: '#newPatientAccountButton',
            passwordProvider: '#newProviderId #password',
            confirmPasswordProvider: '#newProviderId #confirmPassword',
            saveProviderButton:'#newProviderId #saveProviderButton',
            saveNewProviderButton:'#providerAgreementId #saveNewProviderButton',
            backNewProviderButton:'#providerAgreementId #backNewProviderButton',
            saveProviderDetailsButton:'#newProviderDetailsId #saveProviderDetailsButton',
            backProviderDetailsButton:'#newProviderDetailsId #backProviderDetailsButton',
            passwordPatient: '#newPatientId #password',
            confirmPasswordPatient: '#newPatientId #confirmPassword',
            savePatientButton:'#newPatientId #savePatientButton',
            Registration: '#Registration',
            Screener: '#Screener',
            Inpatient: '#Inpatient',
            Outpatient: '#Outpatient',
            Pharmacy: '#Pharmacy',
            Billing: '#Billing',
            Radiology: '#Radiology',
            Laboratory: '#Laboratory',
            CHW: '#CHW'
        },

        control: {
            passwordID: {
                action: 'doLogin'
            },
            userName: {
                action: 'doLogin'
            },            
            signInButton: {
                tap: 'doLogin'
            },
            newAccountButton: {
                tap: 'showNewAccount'
            },
            newProviderAccountButton: {
                tap: 'newProviderAccount'
            },
            newPatientAccountButton: {
                tap: 'newPatientAccount'
            },
            saveProviderButton: {
                tap: 'saveProvider'
            },
            saveNewProviderButton: {
                tap: 'saveNewProvider'
            },
            backNewProviderButton: {
                tap: 'backNewProvider'  
            },
            saveProviderDetailsButton: {
                tap: 'saveProviderDetails'
            },
            backProviderDetailsButton: {
                tap: 'backProviderDetails'
            },
            savePatientButton: {
                tap: 'savePatient'
            },
            passwordPatient: {
                change: 'passwordPatientChange'
            },
            passwordProvider: {
                change: 'passwordProviderChange'
            },
            confirmPasswordPatient: {
                change: 'confirmPasswordPatientChange'
            },
            confirmPasswordProvider: {
                change: 'confirmPasswordProviderChange'
            }
        }
    },
    
    showLogin: function () {
        window.location.hash = 'Login';
        Ext.getCmp('mainView').setActiveItem(0);
    },

    /**
     *Stores information about the user who is logged in
     */
    // TODO: Store entire user state into the localStorage (or a cookie); verify it in database
    storeUserInfo: function () {
        Ext.getCmp('mainView').setMasked({
            xtype: 'loadmask',
            message: 'Loading'
        });
        Ext.Ajax.setTimeout(Util.getTimeoutLimit());
        Ext.Ajax.request({
            scope: this,
            url: HOST + '/ws/rest/v1/raxacore/login',
            method: 'GET',
            withCredentials: true,
            useDefaultXhrHeader: false,
            headers: Util.getBasicAuthHeaders(),
            success: function (response) {
                var userInfoJson = Ext.decode(response.responseText);
                console.log(userInfoJson)
                var raxaVersion = userInfoJson.raxaVersion;
                if(raxaVersion !== localStorage.configVersion){
                    Ext.Error.raise('Please update your Raxa Openmrs Module');
                }
                //only adding necessary fields for localStorage
                var privilegesArray = [];
                var i=0;
                if(userInfoJson.privileges){
                    for (i = 0; i < userInfoJson.privileges.length; i++) {
                        privilegesArray[i] = {
                            'name': userInfoJson.privileges[i].name,
                            'description': userInfoJson.privileges[i].description
                        };
                    }
                }
                for (j = 0; j < userInfoJson.roles.length; j++) {
                    if(userInfoJson.roles[j].role === 'System Developer' || userInfoJson.roles[j].role === 'Provider'){
                        privilegesArray[i] = {
                            'name': 'all privileges',
                            'description': 'allprivileges'
                        };
                    }
                }
                localStorage.setItem('providerAttributes', Ext.encode(userInfoJson.providerAttributes));
                var providerAttributes= JSON.parse(localStorage.providerAttributes)
                if(providerAttributes !==null){
                    for(var i=0; i<providerAttributes.length; i++) {
                        localStorage.setItem("provider"+providerAttributes[i].attributeType , providerAttributes[i].value );
                    }
                }
                localStorage.setItem('personAttributes', Ext.encode(userInfoJson.personAttributes));
                var personAttributes= JSON.parse(localStorage.personAttributes)
                if(personAttributes !==null){
                    for(var i=0; i<personAttributes.length; i++) {
                        localStorage.setItem("provider"+personAttributes[i].attributeType , personAttributes[i].value );
                    }
                }

                localStorage.setItem('session', JSON.stringify({
                    person: userInfoJson.personUuid,
                    display: userInfoJson.display
                }));
                localStorage.setItem("privileges", Ext.encode(privilegesArray));
                localStorage.setItem('loggedInUser',userInfoJson.personUuid);
                var now = new Date();
                var serverTime = Date.parse(userInfoJson.serverTime);
                localStorage.setItem('serverTimeDiff', now.getTime() - serverTime);
                localStorage.setItem('loggedInProvider', userInfoJson.providerUuid);
                var location = userInfoJson.location;
                if(location===undefined){
                    Ext.Msg.alert('Location Health Center for user is not set');
                }
                else{
                    localStorage.setItem('location', location);
                }
                var locationAddress = userInfoJson.locationAddress;
                if(locationAddress !== undefined){
                    localStorage.setItem("locationName", locationAddress.name);
                    localStorage.setItem("locationAddress", locationAddress.address1+ ", "+locationAddress.cityVillage);
                }
                this.loginSuccess();
            },
            failure: function () {
                Ext.getCmp('mainView').setMasked(false);
                Ext.Msg.alert('Connection Error');
            // Ext.Msg.alert(Ext.i18n.appBundle.getMsg('RaxaEmr.controller.session.alert'));
            }
        });
    },
    
    showNewPatientInfo: function(id) {
        
    },

    newProviderAccount: function () {
        if (!this.newProvider) {
            this.newProvider = Ext.create('RaxaEmr.view.NewProvider');
            Ext.Viewport.add(this.newProvider);
        }
        // this.newProvider.setMasked(false);
        this.newProvider.show();
    },
    
    saveProviderDetails: function () {
        var formCmpDetails = Ext.getCmp('newProviderDetailsId');
        var formDetails = formCmpDetails.saveForm();
        if(formDetails.nameOfSetup && formDetails.country && formDetails.address && formDetails.city && formDetails.state) {
            Ext.getCmp('newProviderModal').hide();
            if (!this.ProviderAgreement) {
                this.ProviderAgreement = Ext.create('RaxaEmr.view.ProviderAgreement');
                Ext.Viewport.add(this.ProviderAgreement);
            }
            this.ProviderAgreement.show();
        } else {
            Ext.Msg.alert("","Please Enter All Fields");
        }
    },
    
    backProviderDetails: function() {
        Ext.getCmp('newProviderId').show();
        Ext.getCmp('newProviderModal').hide();
    },

    newPatientAccount: function () {
        if (!this.newPatient) {
            this.newPatient = Ext.create('RaxaEmr.view.NewPatient');
            Ext.Viewport.add(this.newPatient);
        }
        this.newPatient.setMasked(false);
        this.newPatient.show();
    },
    
    saveProvider: function() {
        var formComponent = Ext.getCmp('newProviderId');
        var formp  = formComponent.saveForm();
        if(formp.email && formp.userName && formp.password && formp.phone && formp.confirmPassword && formp.firstname && formp.lastname && formp.choice ) {
            Ext.getCmp('newProviderId').hide();
            if (!this.newProviderDetails) {
                this.newProviderDetails = Ext.create('RaxaEmr.view.NewProviderModal');
                Ext.Viewport.add(this.newProviderDetails);
            }
            this.newProviderDetails.show();
            Ext.getCmp('locationGoogleMapId').renderMap();
        } else {
            Ext.Msg.alert("","Please Enter All Fields");
        }
    },
    
    saveNewProvider: function() {
        var formComponent = Ext.getCmp('newProviderId');
        var formCmpDetails = Ext.getCmp('newProviderDetailsId');
        var formAgDetails = Ext.getCmp('providerAgreementId');
        var formp  = formComponent.saveForm();
        var formDetails = formCmpDetails.saveForm();
        var formAggrementDetails = formAgDetails.saveForm();
        if(Ext.getCmp('agreementChecked')._checked){
            Ext.getCmp('agreementId').setMasked({
                xtype: 'loadmask',
                message: 'Creating Account',
                modal: true
            });
            var locAddress = {
                name : formDetails.nameOfSetup,
                address1 : formDetails.address,
                cityVillage : formDetails.city,
                stateProvince : formDetails.state,
                country : formDetails.country,
                latitude : formDetails.latitude,
                longitude : formDetails.longitude     
            }
            var locAddressParam = Ext.encode(locAddress);
            Ext.Ajax.request({
                scope:this,
                url: HOST + '/ws/rest/v1/location',
                method: 'POST',
                params: locAddressParam,
                disableCaching: false,
                headers: Util.getNewAccountAuthHeaders(),
                success: function (response) {
                    var newUser ={
                        isOutpatientDoctor: 'true',
                        email: formp.email,
                        userName: formp.userName,
                        password: formp.password,
                        phone: formp.phone,
                        firstName: formp.firstname,
                        lastName: formp.lastname,
                        type: 'provider',
                        gender : formp.choice,
                        location: JSON.parse(response.responseText).uuid
                
                    }
                    var newUserParam = Ext.encode(newUser);
                    Ext.Ajax.request({
                        scope:this,
                        url: HOST + '/ws/rest/v1/raxacore/user',
                        method: 'POST',
                        params: newUserParam,
                        disableCaching: false,
                        headers: Util.getNewAccountAuthHeaders(),
                        success: function (response) {
                            Ext.getCmp('agreementId').setMasked(false);
                            Ext.Msg.alert("Account created ","Please wait 24 hours for your account to be approved.");
                            Ext.getCmp('userName').setValue(formp.userName);
                            Ext.getCmp('providerAgreementId').hide();
                            Ext.getCmp('newProviderId').reset();
                            Ext.getCmp('newProviderDetailsId').reset();
                            Ext.getCmp('providerAgreementId').reset();
                            Ext.getCmp('mainView').setActiveItem(0);
                        },
                        failure: function (response) {
                            Ext.getCmp('agreementId').setMasked(false);
                            Ext.Msg.alert("","Error");
                        }
                    });
                },
                failure: function (response) {
                    Ext.getCmp('agreementId').setMasked(false);
                    console.log("inside failure");
                    Ext.Msg.alert("","Error");
                }
            });
        }
        else {
            console.log("inside else");
            Ext.Msg.alert("","Please check to agree the terms of service");
        }
    },
    
    backNewProvider: function() {
        Ext.getCmp('newProviderModal').show();
        Ext.getCmp('providerAgreementId').hide();
    },
    
    savePatient: function() {
        this.saveUser("patient");
    },

    saveUser: function(type) {
        if(type === "provider"){
            var formComponent = Ext.getCmp('newProviderId');
            var formp  = formComponent.saveForm();
        }
        else{
            var formComponent = Ext.getCmp('newPatientId');
            var formp = formComponent.saveForm();
        }
        if (formp.givenname && formp.familyname && formp.choice && formp.userName && formp.password && formp.location) {
            var newUser = {
                gender : formp.choice,
                firstName: formp.givenname,
                lastName: formp.familyname,
                location: formp.location,
                userName: formp.userName,
                password: formp.password,
                type: type
            };
            if(type === "provider"){
                newUser.isOutpatientDoctor = "true";
            }
            else if(type === "patient" && formp.donateOrgans){
                newUser.donateOrgans = "true"
            }
            if(formp.email){
                newUser.email = formp.email;
            }
            if(formp.phone){
                newUser.phone = formp.phone;
            }
            var newUserParam = Ext.encode(newUser);
            formComponent.setMasked(true);
            Ext.Ajax.request({
                scope:this,
                url: HOST + '/ws/rest/v1/raxacore/user',
                method: 'POST',
                params: newUserParam,
                disableCaching: false,
                headers: Util.getNewAccountAuthHeaders(),
                success: function (response) {
                    formComponent.setMasked(false);
                    if(type==="provider"){
                        Ext.Msg.alert("Successful", "Please login to continue.");
                        Ext.getCmp('userName').setValue(formp.userName);
                    }
                    else{
                        Ext.Msg.alert("Patient Creation Successful", "Thank you for registering.");
                    }
                },
                failure: function (response) {
                    formComponent.setMasked(false);
                    var errorJson = Ext.decode(response.responseText);
                    var message = errorJson.error.detail.toString().split(":")[1]
                    Ext.Msg.alert('Error '+message);
                }
            });
            formComponent.hide();
            formComponent.reset();
        }
        else {
            Ext.Msg.alert ("Error","Please Enter all the mandatory fields");
        }
    },
    
    passwordPatientChange: function() {
        this.validatePassword("#newPatientId");
    },

    passwordProviderChange: function() {
        this.validatePassword("#newProviderId");
    },

    validatePassword : function(parentComponent) {
        var newPassword = Ext.ComponentQuery.query(parentComponent+' #password')[0]._value;
        var minPasswordLength = 8;
        if(newPassword.length > 0) {
            if(newPassword.length < minPasswordLength) {
                Ext.ComponentQuery.query(parentComponent+' #password')[0].reset();
                Ext.Msg.alert('Error', 'Please Enter Valid Password');
            }
            var re = {
                lower:   /[a-z]/g,
                upper:   /[A-Z]/g,
                numeric: /[0-9]/g
            }
            for (var rule in re) {
                if(((newPassword.match(re[rule]) || []).length) <= 0) {
                    Ext.ComponentQuery.query(parentComponent+' #password')[0].reset();
                    Ext.Msg.alert('Error', 'Please Enter Valid Password');
                }        
            }
        }
    },

    confirmPasswordPatientChange: function() {
        this.validateConfirmPassword("#newPatientId");
    },

    confirmPasswordProviderChange: function() {
        this.validateConfirmPassword("#newProviderId");
    },
    
    validateConfirmPassword : function(parentComponent) {
        var newPassword = Ext.ComponentQuery.query(parentComponent+' #password')[0]._value;
        var confirmPassword = Ext.ComponentQuery.query(parentComponent+' #confirmPassword')[0]._value;
        if(confirmPassword.length > 0 && newPassword.length > 0) {
            if( newPassword !== confirmPassword) {
                Ext.ComponentQuery.query(parentComponent+' #confirmPassword')[0].reset();
                Ext.Msg.alert('Error', 'Confirm password is not same as new Password');
            }
        }
    },

    // doLogin functions populates the views in the background while transferring
    // the view to dashboard
    doLogin: function () {
        var username = Ext.getCmp('userName').getValue();
        localStorage.setItem("username", username);

        if (username === "") {
            Ext.Msg.alert('Please Enter Username');
            // Ext.Msg.alert(Ext.i18n.appBundle.getMsg('RaxaEmr.controller.session.blankusername'));
            return;
        }

        var password = Ext.getCmp('passwordID').getValue();
        if (password === "") {
            Ext.Msg.alert('Please Enter Password');
            // Ext.Msg.alert(Ext.i18n.appBundle.getMsg('RaxaEmr.controller.session.blankpassword'));
            return;
        }

        //passing username & password to saveBasicAuthHeader which saves Authentication
        //header as Base64 encoded string of user:pass in localStore
        Util.saveBasicAuthHeader(username, password);

        // check for user name validity and privileges
        this.storeUserInfo();
        //populating views with all the modules, sending a callback function
        //only run this as postuser
        if(localStorage.getItem("username")==="postuser"){
            //splash loading screen, mask on 'mainview'
            Ext.getCmp('mainView').setMasked({
                xtype: 'loadmask',
                message: 'Loading'
            });
            Startup.populateViews(Util.getModules(), this.launchAfterAJAX);            
        }
    },

    /**
 * Called when login is successful for the given user, populates AppGrid with the user's modules
 */
    loginSuccess: function () {
        var numAppsAvailable = this.addModulesToDashboard();
        Ext.getCmp('mainView').setMasked(false);
        //if only 1 app available, send to that page
        if (numAppsAvailable === 1) {
            window.location = userModules[0];
        }
        //if no apps available, alert the user
        else if (numAppsAvailable === 0) {
            Ext.Msg.alert("No Privileges Found", "Contact your system administrator");
        }
        //otherwise show the AppGrid
        else {
            window.location.hash = 'Dashboard';
            Ext.getCmp('mainView').setActiveItem(1);
        }
    },

    /**
 * Helper function to add all required modules into Dashboard
 */
    addModulesToDashboard: function(){
        var privileges = localStorage.getItem("privileges");
        var allModules = Util.getModules();
        var allApps = Util.getApps();
        var userModules = [];
        //starting at index=1 here, don't need app button for 'login'
        for (i = 1; i < allModules.length; i++) {
            //checking if user is allows to view the module
            if(privileges.indexOf('RaxaEmrView '+allModules[i])!==-1 || privileges.indexOf('all privileges')!==-1){
                userModules[userModules.length] = allModules[i];
            }
        }
        Ext.getCmp('appGrid').addModules(userModules); 
        Ext.getCmp('smartApp').addApps(allApps);
        return userModules.length;
    },

    showDashboard: function () {
        this.addModulesToDashboard();
        window.location.hash = 'Dashboard';
        Ext.getCmp('topbarSelectfield').setHidden(false);
        Ext.getCmp('mainView').setActiveItem(1);
    },

    //This function determines the login state
    //If already logged in, it redirects to the dashboard
    getLoginState: function () {
        if(localStorage.getItem("configVersion") !== Util.conceptVersion){
            Startup.getResourceUuid();
        }
        var loginState = Ext.getCmp('mainView').getActiveItem()._activeItem;
        if (localStorage.getItem('basicAuthHeader')) {
            this.loginSuccess();
            Ext.getCmp('mainView').setActiveItem(1);
        }
    },

    //on entry point for application, give control to Util.getViews()
    launch: function () {
        var mainScreen = Ext.create('RaxaEmr.view.Main', {
            fullscreen: true
        });
        var topBar = Ext.create('Topbar.view.TopToolbar');
        mainScreen.add(topBar);
        this.getLoginState();
    },

    //once Util.populateViews() is done with AJAX GET calls, it calls this function
    //to start graphics, etc
    //views is the 2-d array of view urls (see Util.populateViews() for more info)
    launchAfterAJAX: function (views) {
        //remove loading mask
        Ext.getCmp('mainView').setMasked(false);
    },
    
    //Shows new account page for new providers or new patients
    showNewAccount: function() {
        Ext.getCmp('mainView').setActiveItem(2);
    }

});
