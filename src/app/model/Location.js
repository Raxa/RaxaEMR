Ext.define('RaxaEmr.model.Location',{
    extend: 'Ext.data.Model',
    config: {
        fields: [ {
            name: 'id',
            persist: false
        },{
            name: 'uuid',
            type: 'string'
        }, {
            name: 'display',
            type: 'string'
        },{
            name: 'name'
        },{
            name: 'address1'
        },{
            name: 'cityVillage'
        },{
            name: 'stateProvince'
        },{
            name: 'country'
        }]
    }
});