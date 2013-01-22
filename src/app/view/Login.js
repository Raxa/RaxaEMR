Ext.define('RaxaEmr.view.Login', {
    extend: 'Ext.Container',
    config: {
        fullscreen: true,
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        id: 'halo',
        items: [{
            xtype: 'topbar',
            docked: 'top'
        },
        {
            xtype: 'container',
            height: 220,
            id: 'logoPanel',
            items: [{
                html: '<img src="resources/img/logoBeta.png" width="143" height="143"/>'
            }, {
                html: 'Raxa EMR',
                style: 'font-family: "Helvetica Neue",HelveticaNeue,"Helvetica-Neue",Helvetica,"BBAlpha Sans",sans-serif;'
            }]
        },{
            html: "Existing Users",
            style: 'font-family: "Helvetica Neue",HelveticaNeue,"Helvetica-Neue",Helvetica,"BBAlpha Sans",sans-serif; font-weight: bold; text-align: left',
            width: 350
        },{
            xtype: 'fieldset',
            items: [{
                xtype: 'textfield',
                id: 'userName',
    //                label: Ext.i18n.appBundle.getMsg('RaxaEmr.view.textfield.label'),
                label: 'User Name',
                clearIcon: true,
                width: 350
            }, {
                xtype: 'passwordfield',
                id: 'passwordID',
    //                label: Ext.i18n.appBundle.getMsg('RaxaEmr.view.passwordfield.label'),
                label: 'Password',
                clearIcon: true,
                width: 350
            }]
        }, {
            xtype: 'button',
//            text: Ext.i18n.appBundle.getMsg('RaxaEmr.view.button.title'),
            text: 'Sign In',
            margin: '-20 0 40 0',
            id: 'signInButton',
            ui: 'decline-round',
            width: 350,
        }, {
            xtype: 'button',
//            text: Ext.i18n.appBundle.getMsg('RaxaEmr.view.button.title'),
            text: 'NewAccount',
            margin: '-20 0 40 0',
            id: 'newAccountButton',
            ui: 'decline-round',
            width: 350,
        }]
    }
});
