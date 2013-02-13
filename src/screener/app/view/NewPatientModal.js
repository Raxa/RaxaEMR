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
        items: [
        {
            xtype: 'toolbar',
            id: 'newPatientToolbar',
            title: 'New Patient',
            items: [{
                html: '<img src="resources/images/white-icons/add_patient_white.png" align="left" onError="this.style.display=\'none\'">',
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
