Ext.define('RaxaEmr.Pharmacy.view.PatientDetails', {
    extend: 'Ext.Container',
//    requires: ['RaxaEmr.Pharmacy.view.inventoryNavBar', 'RaxaEmr.Pharmacy.view.requisition'],
    alias: 'widget.patientDetails',
    layout: {
        type: 'hbox'
    },
        items:[
        {
            xtype: 'panel',
            id: 'image',
            height: 110,
            width: 110,
            items:[{
                html: "<img border=\"0\" src=\"../resources/img/pharmacy.png\" alt=\"Patient Image\" width=\"110\" height=\"110\" />"
            }]
        //TODO: patient image
        },
        {
            xtype: 'panel',
            height: 110,
            width: 290,
            layout: {
                type: 'vbox'
            },
            flex: 2,
            items: [{
                xtype: 'displayfield',
                fieldLabel: 'Patient Name',
                id: 'prescriptionPatientName',
                readOnly: true,
                value: ''
            },{
                xtype: 'displayfield',
                fieldLabel: 'Patient ID',
                id: 'prescriptionPatientId',
                readOnly: true,
                value: ''
            },{
                xtype: 'displayfield',
                fieldLabel: 'Age',
                id: 'prescriptionPatientAge',
                readOnly: true,
                value: ''
            },{
                xtype: 'displayfield',
                fieldLabel: 'Gender',
                id: 'prescriptionPatientGender',
                readOnly: true,
                value: ''
            }]
        },
        {
            xtype: 'panel',
            height: 110,
            width: 340,
            layout: {
                type: 'vbox'
            },
            items: [{
                xtype: 'displayfield',
                fieldLabel: 'Doctor\'s Name',
                id: 'prescriptionDoctor',
                readOnly: true,
                value: ''
            },{
                xtype: 'displayfield',
                fieldLabel: 'Department',
                readOnly: true,
                value: ''
            },{
                xtype: 'displayfield',
                fieldLabel: 'Prescription ID',
                readOnly: true,
                value: ''
            },{
                xtype: 'displayfield',
                fieldLabel: 'Prescription Date',
                id: 'prescriptionDate',
                readOnly: true,
                value: ''
            }]
        }
    ]
});
