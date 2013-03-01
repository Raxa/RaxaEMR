Ext.define("RaxaEmr.view.NewProviderModal", {
    extend: 'Ext.form.Panel',
    id: 'newProviderModal',
    requires: ['RaxaEmr.view.NewProviderDetails'],
    xtype: 'newProvidermodal',
    config: {
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        hidden: true,
        scrollable: false,
        // Set the width and height of the panel
        width: 700,
        height: 622,// todo change the height to 700
        layout: 'vbox',
        items: [
        {
            xtype: 'toolbar',
            id: 'newProviderToolbar',
            docked : 'top',
            title: 'Step2 : Practice Address and Location on Map',
            items: [{
                xtype: 'spacer'
            }, {
                xtype: 'button',
                iconCls: 'delete',
                iconMask: true,
                handler: function() {
                    Ext.getCmp('newProviderModal').hide();
                },
                ui: 'decline'
            }]
        },{
            xtype: 'spacer',
            width: 10
        },
        {
            xtype: 'newProviderDetails',
            flex: 1
        }]
    }
});
