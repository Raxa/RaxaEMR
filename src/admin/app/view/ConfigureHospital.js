Ext.define('RaxaEmr.Admin.view.ConfigureHospital',{
    extend: 'Ext.Panel',
    id: 'configureHospital',
    config: {
        layout: {
            type: 'vbox',
            align: 'center'
        },
        fullscreen: true,
        items: [{
            xtype: 'container',
            layout: 'vbox',
            width: 500,
            items: [{
                xtype: 'textfield',
                label: 'Specialty',
                id: 'configureSpecialty'
            }, {
                xtype: 'textfield',
                label: 'Degree',
                id: 'configureDegree'
            }, {
                xtype: 'textfield',
                label: 'Registration No.',
                id: 'configureRegistrationNumber'
            }, {
                xtype: 'textfield',
                label: 'Timings Line 1',
                id: 'configureTimingsLine1'
            }, {
                xtype: 'textfield',
                label: 'Timings Line 2',
                id: 'configureTimingsLine2'
            }, {
                xtype: 'textfield',
                label: 'Contact No.',
                id: 'configureContactNumber'
            }, {
                xtype: 'textfield',
                label: 'Secondary No.',
                id: 'configureSecondaryContactNumber'
            }, {
                xtype: 'textfield',
                label: 'Email',
                id: 'configureEmail'
            }, {
                id: 'submitDetailsButton',
                xtype: 'button',
                text : 'Submit Details',
                width: 200,
                margin: 5,
                ui: 'action',
                action: 'submitDetails'
            }
            ]
        }]
    }
});