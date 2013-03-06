var ADMIN_MENU_CONSTANTS = {
    ADD_PERSON_BUTTON: 'background:#2d7cb8;color:white',
    MESSAGE_MARGIN: '15 5 5 10',
    MESSAGE_MARGIN_FOR_DOUBLE_LINE: '0 5 5 10',
    BACK_BUTTON_STYLE: 'border:1px solid #2d7cb8; color:#2d7cb8; background:#fff;left:-20px;font-weight:1;font-size:16px;',
    CONTAINER_WIDTH: 350
};


Ext.define("RaxaEmr.Admin.view.MainMenu",{
    extend: 'Ext.Container',
    xtype: 'mainMenu',
    id: "mainMenu",
    config:{
        fullscreen: true,
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [
        {
            xtype: 'container',
            layout: 'hbox',
            width: ADMIN_MENU_CONSTANTS.CONTAINER_WIDTH,
            items: [{
                html: '<img src="../resources/img/addProvider.png" width="75" height="75"/>'
            },
            {
                xtype: 'container',
                layout: 'vbox',
                height: 128,
                items: [{
                    margin: ADMIN_MENU_CONSTANTS.MESSAGE_MARGIN,
                    html: 'Create new Providers<br>at your location'
                },{
                    xtype: 'button',
                    ui: 'action',
                    text: "New Provider",
                    id: 'newProvider',
                    action: 'newProvider',
                    align: 'left',
                    style: ADMIN_MENU_CONSTANTS.ADD_PERSON_BUTTON
                }]
            }]
        }, {
            id: 'manageLocationsButton',
            xtype: 'button',
            text : 'Manage Locations',
            width: 200,
            height: 200,
            ui: 'action',
            hidden: true,
            action: 'manageLocations'
        }, {
            xtype: 'container',
            layout: 'hbox',
            width: ADMIN_MENU_CONSTANTS.CONTAINER_WIDTH,
            items: [{
                html: '<img src="../resources/img/editProfile.png" width="75" height="75"/>'
            },
            {
                xtype: 'container',
                layout: 'vbox',
                height: 128,
                items: [{
                    margin: ADMIN_MENU_CONSTANTS.MESSAGE_MARGIN,
                    html: 'Edit Your Details'
                },{
                    id: 'editDetailsButton',
                    xtype: 'button',
                    text : 'Edit Details',
                    ui: 'action',
                    action: 'editDetails',
                    align: 'left',
                    style: ADMIN_MENU_CONSTANTS.ADD_PERSON_BUTTON
                }]
            }]
        }]
    }
});
