Ext.define("RaxaEmr.Admin.view.Main",{
    extend: 'Ext.Container',
    xtype: 'mainView',
    id: "mainView",
    config:{
        id: 'mainView',
        layout: 'card',
        activeItem: 0,
        items: [{
            xclass: 'RaxaEmr.Admin.view.MainMenu'
        }]
    }
});
