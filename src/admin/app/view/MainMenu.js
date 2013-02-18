Ext.define("RaxaEmr.Admin.view.MainMenu",{
    extend: 'Ext.Container',
    xtype: 'mainMenu',
    id: "mainMenu",
    config:{
        fullscreen: true,
        layout: {
            type: 'hbox',
            align: 'center',
            pack: 'center'
        },
        items: [
        {
            id: 'manageProvidersButton',
            xtype: 'button',
            text : 'Manage Providers',
            width: 200,
            height: 200,
            margin: 5,
            ui: 'action',
            action: 'manageProviders'
        }, {
            id: 'manageLocationsButton',
            xtype: 'button',
            text : 'Manage Locations',
            width: 200,
            height: 200,
            ui: 'action',
            action: 'manageLocations'
        }, {
            id: 'editDetailsButton',
            xtype: 'button',
            text : 'Edit Details',
            width: 200,
            height: 200,
            margin: 5,
            ui: 'action',
            action: 'editDetails'
        }]
    }
});
