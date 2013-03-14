Ext.define('RaxaEmr.Pharmacy.view.prescription', {
    extend: 'Ext.container.Container',
    requires: ['RaxaEmr.Pharmacy.view.PatientSearchandQueue', 'RaxaEmr.Pharmacy.view.PatientDetails'],
    alias: 'widget.prescription',
    layout: {
        type: 'hbox'
    },
    items:[{
        xtype: 'container',
        border: 0,
        margin: 10,
        layout: {
            type: 'vbox'
        },
        items: [
        {
            xtype: 'button',
            width: 180,
            text: 'Prescription for New Patient',
            action: 'addPatient'
        },
        {
            xtype: 'patientSearchandQueue',
            height: 480,
            width: 180,
            border: 0
        }
        ]
    },{
        xtype: 'container',
        border: 0,
        margin: 10,
        layout: {
            type: 'vbox'
        },
        items: [
        {
            xtype: 'patientDetails'
        },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            flex : 1,
            items: [
            {
                xtype: 'button',
                text: 'Latest',
                id: 'currentButton',
                height: 35,
                width: 60,
                handler: function(){
                    Ext.getCmp('historyButton').toggle(false);
                    Ext.getCmp('currentButton').toggle(true);
                    Ext.getCmp('saveButton').setVisible(true);
                }
            },
            {
                xtype: 'button',
                text: 'History',
                id: 'historyButton',
                height: 35,
                width: 60,
                handler: function(){
                    Ext.getCmp('currentButton').toggle(false);
                    Ext.getCmp('historyButton').toggle(true);
                    Ext.getCmp('saveButton').setVisible(false);
                }
            }
            ]
        },
        {
            xtype: 'prescribedDrugs'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'button',
                width: 60,
                text: 'Save',
                id: 'saveButton',
                action: 'doneWithQueuedPatientPrescription'
            },{
                xtype: 'button',
                width: 60,
                text: 'Print',
                action: 'printPrescribedDrugs'
            }
            ]
        }]
    }]
});
