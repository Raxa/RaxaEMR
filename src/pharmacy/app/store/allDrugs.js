Ext.define('RaxaEmr.Pharmacy.store.allDrugs', {
    extend: 'Ext.data.Store',
    id: 'allDrugs',
    model: 'RaxaEmr.Pharmacy.model.Drug',
        autoSync: false,
    proxy: {
        type: 'rest',
        url: HOST + '/ws/rest/v1/raxacore/drug',
        headers: Util.getBasicAuthHeaders(),
        reader: {
            type:'json',
            root: 'results'
        }
    }
});