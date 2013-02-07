Ext.define('RaxaEmr.billing.view.Viewport', {
    extend: 'Ext.container.Viewport',
    width: 960,
    autoHeight: 800,
    id: 'mainarea',
    layout: 'auto',
    autoScroll: true,
    items:[
    {
        layout: 'card',
        activeItem: 0,
        items: [    
        {
            xtype: 'currentBill_main',
            id: 'currentBill_main'
        },
        {
            xtype: 'discount'
        },
        {
            xtype: 'currentbill'
        },
        {
            xtype: 'previousBills'
        },{
            xtype: 'print_Final'
        },
        {
            xtype: 'previousShow'
        } ]  
    }
    ]
});
