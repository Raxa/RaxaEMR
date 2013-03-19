/**
 * Does the Get call for getting patient location
 */
Ext.define('RaxaEmr.store.Locations', {
    extend: 'Ext.data.Store',
    xtype: 'locationStore',
    config: {
        storeId : 'locationStore',
        model: 'RaxaEmr.model.Location',
        proxy: {
            type: 'rest',
            url: HOST + '/ws/rest/v1/raxacore/location?v=full&limit=100',
            reader: {
              type: 'json',
              rootProperty: 'results'
            },
            writer: {
              type: 'json',
              rootProperty: 'results'
            }
        },
        autoLoad: true
    }
});