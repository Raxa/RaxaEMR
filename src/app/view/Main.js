Ext.define('RaxaEmr.view.Main', {
    extend: 'Ext.Container',
    config: {
        id: 'mainView',
        layout: 'card',
        activeItem: 0,
        items: [{
            xclass: 'RaxaEmr.view.Login'
        }, {
            xclass: 'RaxaEmr.view.AppCarousel'
        }, {
            xclass: 'RaxaEmr.view.NewAccount'
        }]
    }
});