/* model for the attributs field in the person model need to made for fields like "caste", "education", 
etc in the registration form*/
Ext.define('RaxaEmr.Pharmacy.model.attributes', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'value'
    }, {
        name: 'attributeType',
        model: 'RaxaEmr.Pharmacy.model.AttributeType'
    }, {
        name: 'display'
    }, {
        name: 'uuid'
    }]
});