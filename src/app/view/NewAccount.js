var NEW_PERSON_FORM_CONSTANTS = {
    ADD_PERSON_BUTTON: 'background:#2d7cb8;color:white',
    MESSAGE_MARGIN: '15 5 5 10',
    MESSAGE_MARGIN_FOR_DOUBLE_LINE: '0 5 5 10',
    BACK_BUTTON_STYLE: 'border:1px solid #2d7cb8; color:#2d7cb8; background:#fff;left:-20px;font-weight:1;font-size:16px;',
    CONTAINER_WIDTH: 350,
};

Ext.define('RaxaEmr.view.NewAccount', {
    extend: 'Ext.Container',
    config: {
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        style: 'background:white',
        id: 'newAccountView',
        items: [{
            xtype: 'container',
            layout: 'hbox',
            width: NEW_PERSON_FORM_CONSTANTS.CONTAINER_WIDTH,
            items: [{
                html: '<img src="resources/img/doctor.png" width="75" height="75"/>'
            },
            {
                xtype: 'container',
                layout: 'vbox',
                height: 128,
                items: [{
                    margin: NEW_PERSON_FORM_CONSTANTS.MESSAGE_MARGIN,
                    html: 'Are you a doctor?'
                },{
                    xtype: 'button',
                    text: 'New Provider Account',
                    id: 'newProviderAccountButton',
                    style: NEW_PERSON_FORM_CONSTANTS.ADD_PERSON_BUTTON,
                }]
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            hidden: true,
            width: NEW_PERSON_FORM_CONSTANTS.CONTAINER_WIDTH,
            items: [{
                html: '<img src="resources/img/pharmacist.png" width="75" height="75"/>'
            },
            {
                xtype: 'container',
                layout: 'vbox',
                height: 128,
                items: [{
                    margin: NEW_PERSON_FORM_CONSTANTS.MESSAGE_MARGIN,
                    html: 'Are you a Pharmacist?'
                },{
                    xtype: 'button',
                    text: 'New Provider Account',
                    id: 'newProviderAccountButton',
                    style: NEW_PERSON_FORM_CONSTANTS.ADD_PERSON_BUTTON,
                }]
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            width: NEW_PERSON_FORM_CONSTANTS.CONTAINER_WIDTH,
            items: [{
                html: '<img src="resources/img/patient.png" width="75" height="75"/>'
            },
            {
                xtype: 'container',
                layout: 'vbox',
                height: 128,
                width: 162,
                items: [{
                    margin: NEW_PERSON_FORM_CONSTANTS.MESSAGE_MARGIN_FOR_DOUBLE_LINE,
                    html: 'Do you want access to your medical record?'
                },{
                    xtype: 'button',
                    text: 'New Patient Account',
                    id: 'newPatientAccountButton',
                    style: NEW_PERSON_FORM_CONSTANTS.ADD_PERSON_BUTTON,
                }]
            }]
        },{
            xtype: 'button',
            text: 'I have an account',
            style: NEW_PERSON_FORM_CONSTANTS.BACK_BUTTON_STYLE,
            height: 44,
            width: 290,
            align: 'left',
            handler: function(){
                Ext.getCmp('mainView').setActiveItem(0);
            }
        }]
    }
});
