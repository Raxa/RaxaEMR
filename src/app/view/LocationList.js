Ext.define("RaxaEmr.view.LocationList", {
    xtype: 'locationList',
    extend: 'Ext.List',
    id: 'locationList',
    config: {
        store: 'locationStore',
        itemTpl: '{name}',
        //hideOnMaskTap: true,
        items: [{
            xtype: 'button',
            text: "New Practice",
            id: 'newLocationButton',
            docked: 'bottom',
            ui: 'action'
        }]
    }
});

