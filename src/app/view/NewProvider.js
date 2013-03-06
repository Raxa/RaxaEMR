var NEW_PROVIDER_CONSTANTS = {
    FIELD_BORDER: 'border-color: #333333; border-width: 1px; border-style : solid;',
    FIELD_WIDTH: 300,
    LABEL_WIDTH: 200,
    AGE_FIELD_WIDTH: 80,
    LABEL_STYLE: 'background-color: #eeeeee;',
    CONTAINER_BACKGROUND: 'background-color: #eeeeee;',
    CONTAINER_LAYOUT: {
        type: 'hbox',
        align: 'strech'
    },
    CONTAINER_MARGIN: '5 0 5 0',
    RADIO_FIELD_WIDTH: 90
}
Ext.define("RaxaEmr.view.NewProvider", {
    requires: ['Ext.field.Text', 'Ext.field.Number'],
    extend: 'Ext.form.Panel',
    xtype: 'newProvider',
    id: 'newProviderId',
    config: {
        styleHtmlContent: true,
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        hidden: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        style: 'zoom:100%',
        // Set the width and height of the panel
        width: 720,
        layout: 'vbox',
        items: [
        {
            xtype: 'toolbar',
            docked : 'top',
            title: 'Step 1: Create Username and Password....',
            items: [{
                xtype: 'spacer'
            }, {
                xtype: 'button',
                iconCls: 'delete',
                iconMask: true,
                handler: function() {
                    Ext.getCmp('newProviderId').hide();
                },
                ui: 'decline'
            }]
        },
        {
            xtype: 'container',
            layout: NEW_PROVIDER_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PROVIDER_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH,
                items: [
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    value: 'Email',
                    width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH,
                    readOnly: true
                }]
            }, {
                xtype: 'textfield',
                itemId: 'email',
                name: 'email',
                tabIndex : 1,
                width: 400,
                style: NEW_PROVIDER_CONSTANTS.FIELD_BORDER
            }]
        },
        {
            xtype: 'container',
            layout: NEW_PROVIDER_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PROVIDER_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    value: 'First Name',
                    readOnly: true,
                    width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH
                }]
            }, {
                xtype: 'textfield',
                id: 'firstName',
                name: 'firstname',
                tabIndex : 1,
                width: NEW_PROVIDER_CONSTANTS.FIELD_WIDTH,
                style: NEW_PROVIDER_CONSTANTS.FIELD_BORDER
            }]  
        },{
            xtype: 'container',
            layout: NEW_PROVIDER_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PROVIDER_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    value: 'Last Name',
                    readOnly: true,
                    width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH
                }]
            }, {
                xtype: 'textfield',
                id: 'lastName',
                name: 'lastname',
                tabIndex : 1,
                width: NEW_PROVIDER_CONSTANTS.FIELD_WIDTH,
                style: NEW_PROVIDER_CONSTANTS.FIELD_BORDER
            }]  
        },{
            xtype: 'container',
            layout: NEW_PROVIDER_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PROVIDER_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: 175,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    value: 'Gender',
                    readOnly: true
                }]
            }, {
                xtype: 'container',
                id: 'sexRadioGroup',
                layout: {
                    type: 'hbox',
                    align: 'strech'
                },
                items: [{
                    xtype: 'radiofield',
                    label: 'Male', // Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.male'),
                    value: 'M',
                    name: 'choice',
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    labelAlign: 'right',
                    labelCls: 'font-size: 15px',
                    labelWidth: NEW_PROVIDER_CONSTANTS.RADIO_FIELD_WIDTH,
                    flex: 1
                }, {
                    xtype: 'radiofield',
                    label: 'Female', // Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.female'),
                    value: 'F',
                    name: 'choice',
                    labelAlign: 'right',
                    labelWidth: NEW_PROVIDER_CONSTANTS.RADIO_FIELD_WIDTH,
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    flex: 1
                }, {
                    xtype: 'radiofield',
                    label: 'Other', // Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.other'),
                    value: 'O',
                    name: 'choice',
                    labelAlign: 'right',
                    labelWidth: NEW_PROVIDER_CONSTANTS.RADIO_FIELD_WIDTH,
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    flex: 1
                }]
            }]  
        },
        {
            xtype: 'container',
            layout: NEW_PROVIDER_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PROVIDER_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    value: 'Username',
                    readOnly: true,
                    width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH
                }]
            }, {
                layout: 'vbox',
                items: [  
                {
                    xtype: 'textfield',
                    itemId: 'userName',
                    name: 'userName',
                    tabIndex : 1,
                    width: NEW_PROVIDER_CONSTANTS.FIELD_WIDTH,
                    style: NEW_PROVIDER_CONSTANTS.FIELD_BORDER
                },{
                    xtype: 'label',
                    html: '<h1 style="text-align:left;font-size:12px;"> You can use letters, numbers and periods.<br>Example: Someone named Robert Max might choose "robert.max" </h1>'
                }]
            }
            ]
        },
        {
            xtype: 'container',
            layout: NEW_PROVIDER_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PROVIDER_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    value: 'Password',
                    readOnly: true,
                    width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH
                }]
            }, 
            {
                layout: 'vbox',
                items: [  
                {
                    xtype: 'textfield',
                    itemId: 'password',
                    name: 'password',
                    inputType: 'password',
                    tabIndex : 1,
                    width: NEW_PROVIDER_CONSTANTS.FIELD_WIDTH,
                    style: NEW_PROVIDER_CONSTANTS.FIELD_BORDER
                },{
                    xtype: 'label',
                    html: '<h1 style="text-align:left;font-size:12px;"> Password must be at least 8 characters in length, and must contain at least <br>one lowercase, one uppercase and one number in it. Example: Golden123</h1>'
                }]
            }]
        },
        {
            xtype: 'container',
            layout: NEW_PROVIDER_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PROVIDER_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    value: 'Confirm Password',
                    readOnly: true,
                    width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH
                }]
            }, {
                xtype: 'textfield',
                itemId: 'confirmPassword',
                name: 'confirmPassword',
                inputType: 'password',
                tabIndex : 1,
                width: NEW_PROVIDER_CONSTANTS.FIELD_WIDTH,
                style: NEW_PROVIDER_CONSTANTS.FIELD_BORDER
            }]
        },
        {
            xtype: 'container',
            layout: NEW_PROVIDER_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PROVIDER_CONSTANTS.CONTAINER_MARGIN,
            flex:1,
            items: [{
                xtype: 'container',
                width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PROVIDER_CONSTANTS.LABEL_STYLE,
                    value: 'Contact Number',
                    readOnly: true,
                    width: NEW_PROVIDER_CONSTANTS.LABEL_WIDTH
                }]
            }, {
                xtype: 'numberfield',
                itemId: 'phone',
                name: 'phone',
                height: 50,
                tabIndex : 1,
                width: NEW_PROVIDER_CONSTANTS.FIELD_WIDTH,
                style: NEW_PROVIDER_CONSTANTS.FIELD_BORDER
            }]
        },
        {            
            xtype: 'button',
            id: 'saveProviderButton',
            ui: 'confirm',
            html: '<font  color="white">Next</font>',
            width : 150,
            height: 50,
            right: 20,
            margin: '-40 0 0 0'
        }
        ]
    },
    initialize : function() {
        var isiPad = navigator.userAgent.match(/iPad/i);
        if(isiPad !== null) {
            Ext.getCmp('newProviderId').setHeight(622);
            Ext.getCmp('newProviderId').setWidth(700);
        } else {
            Ext.getCmp('newProviderId').setHeight(710);
            Ext.getCmp('newProviderId').setWidth(712);
        }
    },
    saveForm: function () {
        return this.getValues();
    }
});
