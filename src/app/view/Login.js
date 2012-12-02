Ext.define('RaxaEmr.view.Login', {
    extend: 'Ext.Container',
    config: {
        fullscreen: true,
        layout: 'vbox',
        id: 'halo',
        items: [{
            xtype: 'topbar',
            docked: 'top'
        }, {
            id: 'logoPanel',
            centered: true,
            style: 'margin-top: -350px',
            items: [{
                html: '<div style="text-align:center;"><img src="resources/img/logo.png" width="143" height="143"/></div>'
            }, {
                html: '<div class="logoText">Raxa EMR</div>'
            }]
        }, {
            xtype: 'fieldset',
            title: 'Please Login', // Ext.i18n.appBundle.getMsg('RaxaEmr.view.Login.title'),
            align: 'center',
            centered: true,
            width: 350,
            items: [{
                xtype: 'textfield',
                id: 'userName',
                label: 'Username', // Ext.i18n.appBundle.getMsg('RaxaEmr.view.textfield.label'),
                clearIcon: true
            }, {
                xtype: 'passwordfield',
                id: 'passwordID',
                label: 'Password', // Ext.i18n.appBundle.getMsg('RaxaEmr.view.passwordfield.label'),
                clearIcon: true
            }]
        }, {
            xtype: 'button',
            text: 'Sign In', // Ext.i18n.appBundle.getMsg('RaxaEmr.view.button.title'),
            id: 'signInButton',
            ui: 'decline-round',
            centered: true,
            width: 350,
            style: 'margin-top: 180px;'
        }]
    }
});
