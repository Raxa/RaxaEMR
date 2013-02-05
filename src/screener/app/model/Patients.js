Ext.define('Screener.model.Patients', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'uuid',
            type: 'string'
        }, {
            name: 'display',
            mapping: 'person.display'
        }, {
            name: 'gender',
            mapping: 'person.gender'
        }, {
            name: 'age',
            mapping: 'person.age'
        }, {
			name: 'bmi',
			persist: false
		}, {
			name: 'time',
			persist: false
		}, {
            name: 'image',
            persist: false
        }, {
            name: 'encounters',
            model: 'Screener.model.encounters'
        }, {
            name: 'person',
            model: 'Screener.model.person'
        }]
    }
});
