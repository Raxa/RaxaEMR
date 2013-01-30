Ext.define("RaxaEmr.view.NewProviderDetails", {
    requires: ['Ext.field.Text', 'Ext.field.Number'],
    extend: 'Ext.form.Panel',
    xtype: 'newProviderDetails',
    id: 'newProviderDetailsId',
    that : this,
    config: {
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        hidden: true,
        // Set the width and height of the panel
        width: 1000,
        height: 480,
        layout: 'hbox',
        items: [
        {
            flex: 1,
            items: [
            {
                xtype: 'textfield',
                id: 'firstName',
                name: 'firstname',
                label: 'First Name'
            }, 
            {
                xtype: 'textfield',
                id: 'lastName',
                name: 'lastname',
                label: 'Last Name'
            },
            {
                xtype  : 'container',
                id: 'sexRadioGroup',
                layout : {
                    type  : 'hbox',
                    align : 'strech'
                },
                items  : [
                {
                    xtype : 'radiofield',
                    label : 'Male',
                    value: 'M',
                    name  : 'choice',
                    labelWidth: 70,
                    flex  : 1
                },
                {
                    xtype : 'radiofield',
                    label : 'Female',
                    value: 'F',
                    name  : 'choice',
                    labelWidth: 90,
                    flex  : 1
                },
                {
                    xtype : 'radiofield',
                    label : 'Other', 
                    value: 'O',
                    name  : 'choice',
                    labelWidth: 70,
                    flex  : 1
                }
                ]
            },
            //            {
            //                xtype: 'textfield',
            //                id: 'qualification',
            //                name: 'qualification',
            //                label: "Qualification"
            //            },
            //            {
            //                xtype: 'textfield',
            //                id: 'regNumber',
            //                name: 'regNumber',
            //                inputType: 'regNumber',
            //                label: 'Reg Number'
            //            },
            //            {
            //                xtype: 'selectfield',
            //                label: 'Type of physician',
            //                name: 'typeOfPhysician',
            //                options: [{
            //                    text: 'Skin Doctor',
            //                    value: 'skinDoctor'
            //                }, {
            //                    text: 'General Physician',
            //                    value: 'generalPhysician'
            //                }]
            //            },
            {
                xtype: 'textfield',
                id: 'nameOfSetup',
                name: 'nameOfSetup',
                label: "Name Of The Setup"
            },{
                xtype: 'textfield',
                id: 'country',
                name: 'country',
                label: "Country",
                listeners: {
                    keyup : function(value) {
                        Ext.getCmp('newProviderDetailsId').locationChanged(value);
                    }
                }
            },
            {
                xtype: 'textfield',
                id: 'address',
                name: 'address',
                label: "Address",
                listeners: {
                    keyup : function(value) {
                        Ext.getCmp('newProviderDetailsId').locationChanged(value);
                    }
                }
            },
            {
                xtype: 'textfield',
                id: 'city',
                name: 'city',
                label: "City",
                listeners: {
                    keyup : function(value) {
                        Ext.getCmp('newProviderDetailsId').locationChanged(value);
                    }
                }
            },
            {
                xtype: 'textfield',
                id: 'state',
                name: 'state',
                label: "State",
                listeners: {
                    keyup : function(value) {
                        Ext.getCmp('newProviderDetailsId').locationChanged(value);
                    }
                }
            },
            {
                xtype: 'textfield',
                id: 'latitude',
                name: 'latitude',
                hidden: true,
                label: 'Latitude'
            },
            {
                xtype: 'textfield',
                id: 'longitude',
                name: 'longitude',
                hidden: true,
                label: 'Longitude'
            },
            {
                xtype  : 'container',
                id: 'nextBackButton',
                layout : {
                    type  : 'hbox',
                    pack : 'center'
                },  
                items: [
                {
                    xtype: 'button',
                    itemId: 'backProviderDetailsButton',
                    text: 'Back',
                    ui: 'action',
                    width : 150
                },
                {
                    xtype: 'spacer',
                    width: 50
                },
                {
                    xtype: 'button',
                    itemId: 'saveProviderDetailsButton',
                    text: 'Next',
                    ui: 'action',
                    width : 150
                },
                ]
            },
            ]
        },
        {
            xtype: 'googleMapForm',
            flex: 1
        }]
    },
    locationChanged : function(value) {
        if(Ext.getCmp('country').getValue() !== "" && Ext.getCmp('address').getValue() !== "" && Ext.getCmp('city').getValue() !== "" && Ext.getCmp('state').getValue() !== "") {
            Ext.getCmp('locationGoogleMapId').renderMap();    
        }
    },
    saveForm: function () {
        return this.getValues();
    }
});