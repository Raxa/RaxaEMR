Ext.define('RaxaEmr.view.NewAccount', {
    extend: 'Ext.Container',
    config: {
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        id: 'newAccountView',
        items: [
        {
            html: "New Users",
                style: 'font-family: "Helvetica Neue",HelveticaNeue,"Helvetica-Neue",Helvetica,"BBAlpha Sans",sans-serif; font-weight: bold; text-align: left',
            width: 350
        }, {
            xtype: 'container',
            layout: 'hbox',
            width: 350,
            items: [{
                html: '<img src="resources/img/doctor.png" width="128" height="128"/>'
            },
            {
                xtype: 'container',
                layout: 'vbox',
                height: 128,
                items: [{
                    margin: '20 0 0 0',
                    html: 'Are you a doctor?'
                },{
                    xtype: 'button',
                    text: 'New Provider Account',
                    id: 'newProviderAccountButton',
                    ui: 'decline-round',
                }]
            }]
        },{
            xtype: 'container',
            layout: 'hbox',
            width: 350,
            items: [{
                html: '<img src="resources/img/patient.png" width="128" height="128"/>'
            },
            {
                xtype: 'container',
                layout: 'vbox',
                height: 128,
                width: 162,
                items: [{
                    margin: '20 0 0 0',
                    html: 'Do you want access to your medical record?'
                },{
                    xtype: 'button',
                    text: 'New Patient Account',
                    id: 'newPatientAccountButton',
                    ui: 'decline-round',
                }]
            }]
        }]
    }
});
