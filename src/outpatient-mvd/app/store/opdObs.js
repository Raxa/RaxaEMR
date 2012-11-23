Ext.define('RaxaEmr.Outpatient.store.opdObs', {
    requires: ['RaxaEmr.Outpatient.model.Observation'],
    extend: 'Ext.data.Store',
    config: {
        model: 'RaxaEmr.Outpatient.model.Observation',
        // autoLoad: true,
    }
});
