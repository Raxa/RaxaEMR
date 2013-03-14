Ext.define('RaxaEmr.Pharmacy.view.requisitionGrid', {
    extend: 'Ext.ux.ModalGrid',
    alias: 'widget.requisitionGrid',
    id: 'requisitionGrid',
    height: 250,
    width: 780 - 2, // Total pixels - Border
    styleHtmlContent: false,
    layout: {
        type: 'absolute'
    },
    store: 'RequisitionItems',
    selType: 'cellmodel',
    cellEditor: Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    }),
    viewConfig: {
        stripeRows: false
    },
    initComponent: function () {
        var requisitionEditor = this;
        this.columns = [
            {
                xtype: 'rownumberer'
            },
            {
                xtype: 'gridcolumn',
                width: 400,
                dataIndex: 'drugname',
                text: 'Name Of drug',
                editor: {
                    xtype: 'drugComboBox'
                }
            },
            {
                xtype: 'gridcolumn',
                width: 55,
                dataIndex: 'quantity',
                text: 'Quantity',
                editor: {
                    xtype: 'numberfield',
                    allowBlank: true,
                    decimalPrecision: 0,
                    allowDecimals: false,
                    minValue: 0,
                    hideTrigger: true
                }
            }
            ];
        this.plugins = [this.cellEditor];
        this.callParent(arguments);
    }
});
