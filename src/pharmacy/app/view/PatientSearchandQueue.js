Ext.define('RaxaEmr.Pharmacy.view.PatientSearchandQueue', {
    extend: 'Ext.panel.Panel',
//    requires: ['RaxaEmr.Pharmacy.view.inventoryNavBar', 'RaxaEmr.Pharmacy.view.requisition'],
    alias: 'widget.patientSearchandQueue',
    layout: {
        type: 'accordion'
    },
//    height: 480,
//    width: 180,
//    border: 0,
//    x: 0,
//    y: 60,
    items: [{
        xtype: 'panel',
        layout: {
            type: 'vbox'
        },
        collapsed: false,
        title: 'Search a Patient',
        items:[
        {
            xtype: 'textfield',
            emptyText: 'Patient Name or ID',
            name:'patientName',
            id: 'patientNameASearch'
        },
        {
            xtype: 'panel',
            border: 0,
            layout: 'card',
            height: 300,
            width: 180,
            activeItem: 0,
            id: 'searchGrid',
            items: [{
                xtype: 'gridpanel',
                id: 'patientASearchGrid',
                border: true,
                height: 300,
                title: 'Search Results',
                store: Ext.create('RaxaEmr.Pharmacy.store.ListPatients'),
                columns: [
                {
                    xtype: 'gridcolumn',
                    width: 100,
                    text: 'Patient Name',
                    dataIndex : 'name'
                },
                {
                    xtype: 'gridcolumn',
                    width: 75,
                    dataIndex: 'identifier',
                    text: 'ID'
                }
                ]
            }, 

            ]
        }]
    },
    {
        xtype: 'panel',
        layout: {
            type: 'vbox'
        },
        collapsed: true,
        title: 'Patient Queue (Today)',
        items:[
        {
            xtype: 'textfield',
            emptyText: 'Patient Name',
            name:'todayPatientName',
            enableKeyEvents: true,
            id: 'todayPatientNameSearch'
        },
        {
            xtype: 'patientsgridpanel',
            id: 'todayPatientGrid',
            height: 300,
            width: 190,
            title: 'Today', 
            store: Ext.create('RaxaEmr.Pharmacy.store.ListPatients')
        }],
        listeners: {
            // as this panel expands it makes the GET call for todays patient list to update the list
            expand: {
                fn: function(){
                    Ext.getCmp('todayPatientGrid').getStore().load()
                }
            }
        }
    },
    {
        xtype: 'panel',
        layout: {
            type: 'vbox'
        },
        collapsed: true,
        title: 'Patient Queue (Week)',
        items:[
        {
            xtype: 'textfield',
            emptyText: 'Patient Name',
            name:'sevenDaysPatientName',
            enableKeyEvents: true,
            id: 'sevenDaysPatientNameSearch'
        },
        {
            xtype: 'patientsgridpanel',
            id : 'sevenDaysPatientGrid',
            title: 'Last 7 Days',
            height: 300,
            width: 190,
            store: Ext.create('RaxaEmr.Pharmacy.store.ListPatients')
        }],
        listeners: {
            // as this panel expands it makes the GET call for 1 week patient list to update the list
            expand: {
                fn: function(){
                    Ext.getCmp('sevenDaysPatientGrid').getStore().load()
                }
            }
        }
    }
    ]
});
