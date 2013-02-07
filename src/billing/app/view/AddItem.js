Ext.define('RaxaEmr.billing.view.AddItem', {
    extend: 'Ext.form.Panel',
    alias : 'widget.AddItem',

    id: 'addItem',
    hidden: true,
    centered: true,
    floating: true,
    title: 'Add Item',
    bodyPadding: 10,
    listeners:{
        'show': function() {
            this.mon(Ext.getBody(), 'mousedown', this.checkCloseClick, this);
        }
    },
    checkCloseClick: function (event) {
        var cx = event.getX(), cy = event.getY(),
        box = this.getBox();
        if (cx < box.x || cx > box.x + box.width || cy < box.y || cy > box.y + box.height) {
            this.hide();
            this.mun(Ext.getBody(), 'click', this.checkCloseClick, this);
        }
    },
    items: [
    {
        xtype: 'textfield',
        fieldLabel: 'Item Name ',
        //  value:'',
        id:'item_name1'
    },
    {
        xtype: 'combobox',
        fieldLabel: 'Category ',
        id:'category1',
        //  value:'Medicine',
        store: new Ext.data.SimpleStore({
            fields: ['category'],
            data: [
            ['Medicine'],
            ['Lab'],
            ['Radiology'],
            ['Other']
            ]
        }),
        displayField : 'category'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Quantity ',
        value:1,
        id:'quantity1'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Price ',
        value:0,
        id:'price1'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'discount(in %)',
        value:0,
        id: 'discount1'
    },
    {
        xtype: 'combobox',
        fieldLabel: 'discountReason',
        id: 'discountReason1',
        store: new Ext.data.SimpleStore({
            fields: ['discountReason'],
            data: [
            ['RSBY'],
            ['Snake bite'],
            ['General'],
            ['Other']
            ]
        }),
        displayField : 'discountReason'
    },
    {
        xtype: 'textfield',
        fieldLabel: ' If Other Discount Reason',
        value:'',
        id: 'otherDiscount1'
    },
    {
        xtype: 'container',
        items: [
        {
            xtype: 'button',
            margin: 20,
            text: 'ADD',
            id : 'item',
            action: 'addItem'
        },
        {
            xtype: 'button',
            margin: 20,
            text: 'Cancel',
            action: 'cancel'
        }
        ]
        },
    ]
});
