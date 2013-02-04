Ext.define("RaxaEmr.view.GoogleMapForm", {
    requires: ['Ext.field.Text', 'Ext.field.Number'],
    extend: 'Ext.form.Panel',
    xtype: 'googleMapForm',
    id: 'googleMapFormId',
    config: {
        layout: 'card',
        items: [
        {
            xtype: 'locationGoogleMap'        
        }    
        ]
    }
});