Ext.define('RaxaEmr.view.Login', {
    extend: 'Ext.Container',
    config: {
        fullscreen: true,
        layout: {
            type: 'hbox',
            align: 'center',
            pack: 'center'
        },
        id: 'halo',
        style: 'background:#FFFFFF',
        scrollable: true,
        items: [{
                xtype:'container',
                left: '10%',
                top: '10%',
                style: 'width:40%; height:100%',
                items:[{
                        html: '<img src="resources/img/logoBeta.png" width="100"/>',
                        dock: 'left',
                    },{
                        html:'<iframe width="390" height="290" src="https://www.youtube.com/embed/KwStciTu8Cc" frameborder="0" allowfullscreen></iframe>',
                        dock: 'left',
                        margin: '20 0 20 0'
            }]},{
            xtype:'container',
            right: '10%',
            top: '10%',
            items: [{
                html: 'Raxa EMR is currently in closed Beta',
                style: 'color:#2d7cb8; text-align: left; font-size:12px',
                margin: '3 0 3 0',
                width:215
        },{
            html: "If you are a new user",
            style: 'font-family: "Helvetica Neue",HelveticaNeue,"Helvetica-Neue",Helvetica,"BBAlpha Sans",sans-serif; text-align: left',
            width: 215
        }, {
            xtype: 'button',
//            text: Ext.i18n.appBundle.getMsg('RaxaEmr.view.button.title'),
            text: 'Create Account',
            margin: '10 0 40 0',
            id: 'newAccountButton',
            style: 'background:#2d7cb8;color:white',
            //ui: 'decline-round',
            width: 215,
            height: 44,
        },{
            html: "Existing Users",
            style: 'font-family: "Helvetica Neue",HelveticaNeue,"Helvetica-Neue",Helvetica,"BBAlpha Sans",sans-serif; text-align: left',
            width: 215,
        },{
                html: 'Username',
                style: 'color:#2d7cb8; text-align: left',
                margin: '3 0 3 0',
                width:215
         },{
                xtype: 'textfield',
                id: 'userName',
    //                label: Ext.i18n.appBundle.getMsg('RaxaEmr.view.textfield.label'),
                style: 'border:1px solid #2d7cb8;',
                clearIcon: true,
                width: 215
         },{
                html: 'Password',
                style: 'color:#2d7cb8; text-align: left',
                margin: '7 0 3 0',
                width: 215
            }, {
                xtype: 'passwordfield',
                id: 'passwordID',
    //                label: Ext.i18n.appBundle.getMsg('RaxaEmr.view.passwordfield.label'),
                style: 'border:1px solid #2d7cb8',
                clearIcon: true,
                width: 215
            },{
            xtype: 'button',
//            text: Ext.i18n.appBundle.getMsg('RaxaEmr.view.button.title'),
            text: 'Sign In',
            margin: '20 0 40 0',
            id: 'signInButton',
            style: 'background:#2d7cb8;color:white',
            width: 215,
            height: 44
        }]
        }]
    }
});
