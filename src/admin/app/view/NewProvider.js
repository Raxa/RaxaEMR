/**
 * This panel will overlay when the new patient button is
 * pressed. This is a form that gets user name and shows
  */
Ext.define("RaxaEmr.Admin.view.NewProvider", {
    requires: ['Ext.field.Text', 'Ext.field.Number'],
    extend: 'Ext.form.Panel',
    xtype: 'newProvider',
    store: 'NewPersons',
    id: 'newProviderId',
    config: {
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        hidden: true,
        // Set the width and height of the panel
        width: 550,
        height: 450,

        items: [{
            xtype: 'titlebar',
            title: 'Add New Provider'
        },{
            xtype: 'textfield',
            id: 'givenName',
            name: 'givenname',
            label: Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.giv_name')
        }, {
            xtype: 'textfield',
            id: 'familyName',
            name: 'familyname',
            label: Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.fam_name')
        },
        {
            xtype: 'textfield',
            id: 'userName',
            name: 'userName',
            label: Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.user_name'),
            listeners: {
                change: function(textField, newValue) {
                    Ext.getCmp('newProviderId').setMasked({
                        xtype: 'loadmask'
                    });
                    Ext.Ajax.request({
                        scope: this,
                        url: HOST + '/ws/rest/v1/raxacore/user?checkUsername='+newValue,
                        method: 'GET',
                        headers: Util.getBasicAuthHeaders(),
                        success: function (response) {
                            var usernameResponse = Ext.decode(response.responseText);
                            if(usernameResponse.userExists === "true"){
                                Ext.Msg.alert('Error', 'User name exists');
                                textField.setValue("");
                            }
                            Ext.getCmp('newProviderId').setMasked(false);
                        },
                        failure: function () {
                            Ext.getCmp('newProviderId').setMasked(false);
                        }
                    });
                }
            }
        },
        {
            xtype: 'textfield',
            id: 'password',
            name: 'password',
            inputType: 'password',
            label: Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.psswrd')
        },
        {
            xtype: 'textfield',
            id: 'confirmPassword',
            name: 'confirmPassword',
            inputType: 'password',
            label: Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.Confirmpsswrd')
        },
        {
            xtype : 'selectfield',
            name : 'location',
            label: Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.loc'),
            displayField : 'name',
            valueField : 'uuid',
            store: 'Locations',
            id: 'selectLocation',
            hidden: true
        },
        {
            xtype  : 'container',
            id: 'isOutPatient',
            label: Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.isOutPatientDoc'),
            layout : {
                type  : 'hbox',
                align : 'strech'
            },
            items  : [
            {
                xtype: 'textfield',
                id: 'IsOutPatientDoctor',
                name: 'IsOutPatientDoctor',
                label: 'IsOutPatientDoctor',
                flex : 1,
                labelWidth: 150,
                width: 150
            },
            {
                xtype : 'radiofield',
                label : 'true',
                value: 'true',
                name  : 'boolChoice',
                labelWidth: 70,
                width: 130,
                labelAlign: 'right'
            },
            {
                xtype : 'radiofield',
                label : 'False',
                value: 'false',
                name  : 'boolChoice',
                labelWidth: 70,
                width: 130,
                labelAlign: 'right'
            }
            ]
        },
        {
            xtype  : 'container',
            id: 'sexRadioGroup',
            layout : {
                type  : 'hbox',
                align : 'strech'
            },
            dataIndex : 'gender',
            items  : [
            {
                xtype : 'radiofield',
                label : Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.male'),
                value: 'M',
                name  : 'choice',
                labelWidth: 70,
                width: 130,
                labelAlign: 'right'
            },
            {
                xtype : 'radiofield',
                label : Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.female'),
                value: 'F',
                name  : 'choice',
                labelWidth: 70,
                width: 130,
                labelAlign: 'right'
            },
            {
                xtype : 'radiofield',
                label : Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.other'),
                value: 'O',
                name  : 'choice',
                labelWidth: 70,
                width: 130,
                labelAlign: 'right'
            }
            ]
        },{
            xtype: 'button',
            id: 'saveProviderButton',
            text: Ext.i18n.appBundle.getMsg('RaxaEmrAdmin.view.NewProvider.save_p'),
            ui: 'action'
        }],
        onChange: function () {
            Ext.Msg.alert("Please enter the date format");
        }
    },
    saveForm: function () {
        return this.getValues();
    }
});