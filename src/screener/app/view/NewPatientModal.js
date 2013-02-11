Ext.define("Screener.view.NewPatientModal", {
    extend: 'Ext.Container',
    id: 'newPatientModal',
    requires: ['Screener.view.NewPatient'],
    xtype: 'newpatientmodal',
    config: {
        modal: true,
        hideOnMaskTap: true,
        hidden: true,
        // Set the width and height of the panel
        width: 500,
        height: 500,
        floating: true,
        //centered: true,
        layout: 'vbox',
        style: 'color: #ffffff;',
        items: [
        {
            xtype: 'toolbar',
            title: 'New Patient',
            items: [{
                xtype: 'spacer'
            }, {
                xtype: 'button',
                iconCls: 'delete',
                iconMask: true,
                handler: function() {
                    Ext.getCmp('newPatientModal').hide();
                },
                ui: 'decline',
            }]
        },
        {
            xtype: 'newPatient',
            flex: 1
        }]
    }
});
