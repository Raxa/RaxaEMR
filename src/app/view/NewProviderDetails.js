var NEW_PROV_CONSTANTS = {
    FIELD_BORDER: 'border-color: #333333; border-width: 1px; border-style : solid;',
    FIELD_WIDTH: 300,
    LABEL_WIDTH: 170,
    AGE_FIELD_WIDTH: 80,
    LABEL_STYLE: 'background-color: #eeeeee;',
    CONTAINER_BACKGROUND: 'background-color: #eeeeee;',
    CONTAINER_LAYOUT: {
        type: 'hbox'
    },
    CONTAINER_MARGIN: '5 0 5 0',
    RADIO_FIELD_WIDTH: 230
}
Ext.define("RaxaEmr.view.NewProviderDetails", {
    requires: ['Ext.field.Text', 'Ext.field.Number'],
    extend: 'Ext.form.Panel',
    xtype: 'newProviderDetails',
    id: 'newProviderDetailsId',
    that : this,
    
    config: {
        layout: 'vbox',
        style: NEW_PROV_CONSTANTS.CONTAINER_BACKGROUND,
        scrollable: false,
        margin: 5,
        items: [
        {
            flex: 1,
            items: [
            {
                xtype: 'container',
                layout: NEW_PROV_CONSTANTS.CONTAINER_LAYOUT,
                margin: NEW_PROV_CONSTANTS.CONTAINER_MARGIN,
                items: [{
                    xtype: 'container',
                    width: NEW_PROV_CONSTANTS.LABEL_WIDTH,
                    items: [{
                        xtype: 'textfield',
                        clearIcon: false,
                        style: NEW_PROV_CONSTANTS.LABEL_STYLE,
                        value: 'Practice Name',
                        readOnly: true,
                        width: NEW_PROV_CONSTANTS.LABEL_WIDTH,
                    }]
                }, {
                    xtype: 'textfield',
                    id: 'nameOfSetup',
                    name: 'nameOfSetup',
                    tabIndex : 1,
                    width: 400,
                    style: NEW_PROV_CONSTANTS.FIELD_BORDER,
                    listeners: {
                        focus: function() {
                            localStorage.removeItem('oldLocationUuid');
                            if(!Ext.getCmp('locationFormPanel')){
                                Ext.create('Ext.Panel', {
                                    id: 'locationFormPanel',
                                    items: [{
                                        height: 280,
                                        xtype: 'locationList',
                                        scrollable: true,
                                        hidden: false,
                                        listeners: {
                                            select: function(list, record) {
                                                console.log(record);
                                                Ext.getCmp('nameOfSetup').setValue(record.data.name);
                                                localStorage.setItem('oldLocationUuid', record.data.uuid);
                                                Ext.getCmp('address').setValue(record.data.address1);
                                                Ext.getCmp('city').setValue(record.data.cityVillage);
                                                Ext.getCmp('state').setValue(record.data.stateProvince);
                                                Ext.getCmp('country').setValue(record.data.country);
                                                Ext.getCmp('locationFormPanel').hide();
                                                Ext.getCmp('locationGoogleMapId').renderMap();    
                                            }
                                        }
                                    }],
                                    width: 300,
                                    height: 300
                                }).showBy(Ext.getCmp('nameOfSetup'), 'tc-bc?');
                            }
                            Ext.getCmp('locationFormPanel').show();
                        },
                        keyup: function() {
                            Ext.getCmp('locationList').getStore().clearFilter();
                            Ext.getCmp('locationList').getStore().filter('name', Ext.getCmp('nameOfSetup').getValue());
                        },
                        blur: function() {
                            if(Ext.getCmp('locationFormPanel')){
                                Ext.getCmp('locationFormPanel').hide();
                            }
                        }
                    }
                }]
            },
            {
                xtype: 'container',
                layout: NEW_PROV_CONSTANTS.CONTAINER_LAYOUT,
                margin: NEW_PROV_CONSTANTS.CONTAINER_MARGIN,
                items: [{
                    xtype: 'container',
                    width: NEW_PROV_CONSTANTS.LABEL_WIDTH,
                    items: [{
                        xtype: 'textfield',
                        clearIcon: false,
                        style: NEW_PROV_CONSTANTS.LABEL_STYLE,
                        value: 'Practice Address',
                        readOnly: true,
                        width: NEW_PROV_CONSTANTS.LABEL_WIDTH
                    }]
                }, {
                    xtype: 'textfield',
                    id: 'address',
                    name: 'address',
                    tabIndex : 1,
                    width: 400,
                    style: NEW_PROV_CONSTANTS.FIELD_BORDER,
                    listeners: {
                        keyup : function(value) {
                            Ext.getCmp('newProviderDetailsId').locationChanged(value);
                        }
                    }
                }]
            },
            {
                layout: 'hbox',
                items: [
                {
                
                    xtype: 'container',
                    layout: NEW_PROV_CONSTANTS.CONTAINER_LAYOUT,
                    items: [
                    {
                        xtype: 'container',
                        layout: NEW_PROV_CONSTANTS.CONTAINER_LAYOUT,
                        margin: NEW_PROV_CONSTANTS.CONTAINER_MARGIN,
                        items: [{
                            xtype: 'container',
                            width: NEW_PROV_CONSTANTS.LABEL_WIDTH,
                            items: [{
                                xtype: 'textfield',
                                clearIcon: false,
                                style: NEW_PROV_CONSTANTS.LABEL_STYLE,
                                value: 'City',
                                readOnly: true,
                                flex : 1
                            }]
                        }, {
                            xtype: 'textfield',
                            id: 'city',
                            name: 'city',
                            tabIndex : 1,
                            width : 200,
                            style: NEW_PROV_CONSTANTS.FIELD_BORDER,
                            flex : 2,
                            listeners: {
                                keyup : function(value) {
                                    Ext.getCmp('newProviderDetailsId').locationChanged(value);
                                }
                            }
                        }]
                    },
                    {
                        xtype : 'spacer',
                        width : 25
                    },    
                    {
                        xtype: 'container',
                        width: 80,
                        items: [{
                            xtype: 'textfield',
                            clearIcon: false,
                            style: NEW_PROV_CONSTANTS.LABEL_STYLE,
                            value: 'State',
                            readOnly: true,
                            flex : 1
                        }]
                    }, {
                        xtype: 'textfield',
                        id: 'state',
                        name: 'state',
                        flex: 2,
                        tabIndex : 1,
                        width: 200,
                        height: 20,
                        style: NEW_PROV_CONSTANTS.FIELD_BORDER,
                        listeners: {
                            keyup : function(value) {
                                Ext.getCmp('newProviderDetailsId').locationChanged(value);
                            }
                        }
                    }]
                    },
                ]
                },

                {
                xtype: 'container',
                layout: NEW_PROV_CONSTANTS.CONTAINER_LAYOUT,
                margin: NEW_PROV_CONSTANTS.CONTAINER_MARGIN,
                items: [{
                    xtype: 'container',
                    width: NEW_PROV_CONSTANTS.LABEL_WIDTH,
                    items: [{
                        xtype: 'textfield',
                        clearIcon: false,
                        style: NEW_PROV_CONSTANTS.LABEL_STYLE,
                        value: 'Country',
                        readOnly: true,
                        width: NEW_PROV_CONSTANTS.LABEL_WIDTH
                    }]
                }, {
                    xtype: 'textfield',
                    id: 'country',
                    name: 'country',
                    tabIndex : 1,
                    width: NEW_PROV_CONSTANTS.FIELD_WIDTH,
                    style: NEW_PROV_CONSTANTS.FIELD_BORDER,
                    listeners: {
                        keyup : function(value) {
                            Ext.getCmp('newProviderDetailsId').locationChanged(value);
                        }
                    }
                }]
            },
            {
                xtype: 'textfield',
                id: 'latitude',
                name: 'latitude',
                hidden: true,
                label: 'Latitude'
            },
            {
                xtype: 'textfield',
                id: 'longitude',
                name: 'longitude',
                hidden: true,
                label: 'Longitude'
            },
            ]
        },
        {
            xtype: 'googleMapForm',
            flex: 1
        }, {
            xtype  : 'container',
            id: 'nextBackButton',
            layout : {
                type  : 'hbox',
                pack : 'center'
            },
            items: [
            {
                xtype: 'button',
                itemId: 'backProviderDetailsButton',
                html: '<font  color="white">Back</font>',
                margin: '17 350 0 0',
                ui: 'confirm',
                width : 150,
                height : 50
            },
            {
                xtype: 'button',
                itemId: 'saveProviderDetailsButton',
                html: '<font  color="white">Next</font>',
                ui: 'confirm',
                width : 150,
                height: 50,
                margin: '17 0 0 0'
            },
            ]
        },]
    },
    locationChanged : function(value) {
        if(Ext.getCmp('country').getValue() !== "" && Ext.getCmp('address').getValue() !== "" &&  Ext.getCmp('state').getValue() !== "" && Ext.getCmp('city').getValue() !== "") {
            Ext.getCmp('locationGoogleMapId').renderMap();    
        }
    },
    saveForm: function () {
        return this.getValues();
    }
});