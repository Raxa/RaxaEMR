Ext.define('RaxaEmr.Admin.view.EditDetails',{
    requires: ['Ext.field.Text', 'Ext.field.Radio'],
    extend: 'Ext.form.Panel',
    xtype: 'editDetails',
    id: 'editDetails',
    config: {
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        hidden: true,
        // Set the width and height of the panel
        width: 550,
        height: 570,
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
                xtype: 'titlebar',
                title: 'Edit Details'
            }, {
                xtype: 'textfield',
                label: 'These details below will appear on the print out of the patient record ',
                labelWidth: 500,
                width: 480
            }, {
                xtype: 'textfield',
                label: 'Specialty',
                margin: 5,
                id: 'configureSpecialty'
            }, {
                xtype: 'textfield',
                label: 'Degree',
                margin: 5,
                id: 'configureDegree'
            }, {
                xtype: 'textfield',
                label: 'Registration No.',
                margin: 5,
                id: 'configureRegistrationNumber'
            }, {
                xtype: 'textfield',
                label: 'Timings Line 1',
                margin: 5,
                id: 'configureTimingsLine1'
            }, {
                xtype: 'textfield',
                label: 'Timings Line 2',
                margin: 5,
                id: 'configureTimingsLine2'
            }, {
                xtype: 'textfield',
                label: 'Contact No.',
                margin: 5,
                id: 'configureContactNumber'
            }, {
                xtype: 'textfield',
                label: 'Secondary No.',
                margin: 5,
                id: 'configureSecondaryContactNumber'
            }, {
                xtype: 'textfield',
                label: 'Email',
                margin: 5,
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