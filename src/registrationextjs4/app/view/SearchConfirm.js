
/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 * 
 * This script defines the view SearchConfirm of the registration module
 */
Ext.define('Registration.view.SearchConfirm', {
	extend: 'Ext.form.Panel',
    alias: 'widget.searchconfirm',
    autoScroll: true,
    border: 0,
    // padding: 10,
    layout: {
        type: 'hbox',
        pack: 'center'
    },
    initComponent: function () {
        this.items = {
            // xtype: 'panel',
            // // ui: 'raxa-panel',
            // width: 800,
            // // padding: 20,
            // items: [{
                xtype: 'container',
                border: 0,
                // bodyPadding: 10,
                items: [{
                    xtype: 'fieldset',
                    id : 'fieldsetSearchedPatient',
                    padding: 10,
                    updateData: {"attributes":[],addresses:[]},
                    title: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.title'),
                    items: [{
                        xtype: 'fieldcontainer',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.OPRN'),
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: [{
                            name: 'Old Patient Identifier',
                            fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.OPI'),
                            flex: 1,
                            id: 'oldPatientIdentifierSearchedPatient',
                            readOnly: true,
                            emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.OPI.emptytext'),
                            allowBlank: true,
                            listeners: {
                                change: function(object) {
                                    if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'] != 'undefined')
                                        Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'][0] = {"attributeType": localStorage.getItem('oldPatientIdentificationNumberUuidpersonattributetype'),"value":object.value};
                                }
                            }
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.PN'),
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: [{
                            name: 'patientName',
                            id: 'patientNameSearchedPatient',
                            emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.PN.emptytext'),
                            flex: 1,
                            readOnly: true,
                            allowBlank: false,
                            listeners :{
                                change: function(object) {
                                    var names = object.value.split(" ");
                                    Ext.getCmp('fieldsetSearchedPatient').updateData['names'] = [{"givenName":names[0],"familyName":names[1]}];
                                }
                            }
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.FHN'),
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: [{
                            name: 'relativeNameSearchedPatient',
                            id: 'relativeNameSearchedPatient',
                            emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.FHN.emptytext'),
                            flex: 1,
                            readOnly: true,
                            allowBlank: false,
                            listeners: {
                                change: function(object) {
                                    if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'] != 'undefined')
                                        Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'][1] = {"attributeType": localStorage.getItem('primaryRelativeUuidpersonattributetype'),"value":object.value};
                                }
                            }
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Age'),
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: [{
                            name: 'age',
                            id: 'ageSearchedPatient',
                            emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Age.emptytext'),
                            flex: 1,
                            readOnly: true,
                            allowBlank: false,
                            listeners: {
                                change: function(object) {
                                    var age = object.value;
                                    Ext.getCmp('fieldsetSearchedPatient').updateData['age'] = age; 
                                }
                            }
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Gender'),
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: [{
                            name: 'sex',
                            id: 'sexSearchedPatient',
                            emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Gender.emptytext'),
                            flex: 1,
                            readOnly: true,
                            allowBlank: false,
                            listeners: {
                                change: function(object) {
                                    var gender = object.value;
                                    Ext.getCmp('fieldsetSearchedPatient').updateData['gender'] = gender; 
                                }
                            }
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.ED'),
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: [{
                            name: 'age',
                            id: 'educationSearchedPatient',
                            emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.ED.emptytext'),
                            flex: 1,
                            readOnly: true,
                            allowBlank: false,
                            listeners: {
                                change: function(object) {
                                    if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'] != 'undefined')
                                        Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'][2] = {"attributeType": localStorage.getItem("educationUuidpersonattributetype"),"value":object.value};
                                }
                            }
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Caste'),
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: [{
                            name: 'caste',
                            id: 'casteSearchedPatient',
                            emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Caste.emptytext'),
                            flex: 1,
                            readOnly: true,
                            allowBlank: false,
                            listeners: {
                                change: function(object) {
                                    if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'] != 'undefined')
                                        Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'][3] = {"attributeType": localStorage.getItem("casteUuidpersonattributetype"),"value":object.value};
                                }
                            }
                        }]
                    }, {
                        xtype: 'fieldcontainer',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Occupation'),
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: [{
                            name: 'occuption',
                            id: 'occupationSearchedPatient',
                            emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Occupation.emptytext'),

                            readOnly: true,
                            flex: 1,
                            allowBlank: false,
                            listeners: {
                                change: function(object) {
                                    if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'] != 'undefined')
                                        Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'][4] = {"attributeType": localStorage.getItem("occupationUuidpersonattributetype"),"value":object.value};
                                }
                            }
                        }]
                    // TODO: https://raxaemr.atlassian.net/browse/RAXAJSS-613
                    // }, {
                    //     xtype: 'fieldcontainer',
                    //     fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Religion'),
                    //     layout: 'hbox',
                    //     combineErrors: true,
                    //     defaultType: 'textfield',
                    //     labelAlign: 'right',
                    //     labelPad: 20,
                    //     labelWidth: 250,
                    //     anchor: '95%',
                    //     defaults: {
                    //         hideLabel: 'true'
                    //     },
                    //     items: [{
                    //         name: 'religion',
                    //         id: 'religionSearchedPatient',
                    //         emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Religion.emptytext'),
                    //         readOnly: true,
                    //         flex: 1,
                    //         allowBlank: false
                    //     }]
                    }, {
                        xtype: 'textfield',
                        id: 'residentialAreaSearchedPatient',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.ResidentialArea'),
                        labelAlign: 'right',
                        emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.ResidentialArea.emptytext'),

                        readOnly: true,
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        listeners: {
                            change:  function(object) {
                                
                            }
                        }
                        
                    }, {
                        xtype: 'textfield',
                        id: 'stretSearchedPatient',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Street'),
                        labelAlign: 'right',
                        emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Street.emptytext'),

                        readOnly: true,
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        street: {},
                        listeners: {
                            change:  function(object) {
                                if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['addresses'] != 'undefined')
                                    Ext.getCmp('fieldsetSearchedPatient').updateData['addresses']['address1'] = object.value || ''; 
                            }
                        }
                    }, {
                        xtype: 'textfield',
                        id: 'townSearchedPatient',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Town'),
                        labelAlign: 'right',
                        emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Town.emptytext'),

                        readOnly: true,
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        listeners: {
                            change:  function(object) {
                                if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['addresses'] != 'undefined')
                                    Ext.getCmp('fieldsetSearchedPatient').updateData['addresses']['cityVillage'] = object.value; 
                            }
                        }
                    },/* POST Office & Pincode are no longer in New Patient Registration Form, so removed from here as well
                     {
                        xtype: 'textfield',
                        id: 'postOfficeSearchedPatient',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.PO'),
                        labelAlign: 'right',
                        emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.PO.emptytext'),

                        readOnly: true,
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%'
                    }, {
                        xtype: 'textfield',
                        id: 'pinSearchedPatient',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.PC'),
                        labelAlign: 'right',
                        emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.PC.emptytext'),

                        readOnly: true,
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%'
                    }, */ {
                        xtype: 'textfield',
                        id: 'tehsilSearchedPatient',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Tehsil'),
                        labelAlign: 'right',
                        emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Tehsil.emptytext'),

                        readOnly: true,
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        listeners: {
                            change:  function(object) {
                                if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['addresses'] != 'undefined')
                                    Ext.getCmp('fieldsetSearchedPatient').updateData['addresses']['address3'] = object.value; 
                            }
                        }
                    }, {
                        xtype: 'textfield',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.District'),
                        id: 'districtSearchedPatient',
                        emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.District.emptytext'),

                        readOnly: true,
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        hideTrigger: true,
                        anchor: '95%',
                        listeners: {
                            change:  function(object) {
                                if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['addresses'] != 'undefined')
                                    Ext.getCmp('fieldsetSearchedPatient').updateData['addresses']['address3'] = object.value; 
                            }
                        }
                    },{
                        xtype: 'textfield',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.State'),
                        id: 'stateSearchedPatient',
                        emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.State.emptytext'),
                        readOnly: true,
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        hideTrigger: true,
                        anchor: '95%',
                        listeners: {
                            change:  function(object) {
                                if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['addresses'] != 'undefined')
                                    Ext.getCmp('fieldsetSearchedPatient').updateData['addresses']['stateProvince'] = object.value; 
                            }
                        }
                    }, {
                        xtype: 'fieldcontainer',
                        fieldLabel: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.CN'),
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 250,
                        anchor: '95%',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: [{
                            name: 'primaryContact',
                            emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.CN.emptytext1'),
                            id: 'primaryContactNumberSearchedPatient',

                            readOnly: true,
                            flex: 1,
                            allowBlank: false,
                            listeners: {
                                change: function(object) {
                                    if(typeof Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'] != 'undefined')
                                        Ext.getCmp('fieldsetSearchedPatient').updateData['attributes'][4] = {"attributeType": localStorage.getItem("primaryContactUuidpersonattributetype"),"value":object.value};
                                }
                            }
                        }, {
                            name: 'lastName',
                            emptyText: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.CN.emptytext2'),
                            id: 'secondaryContactNumberSearchedPatient',
                            readOnly: true,
                            flex: 1,
                            margins: '0 0 0 6',
                            allowBlank: false
                        }]
                    }, {
                        xtype: 'button',
                        margin: '10 10 0 200',
                        // ui: 'raxa-orange-small',
                        text: 'Cancel', // Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Cancel'),
                        handler: function () {
                            var l = Ext.getCmp('mainRegArea').getLayout();
                            l.setActiveItem(REG_PAGES.HOME.value); //Going to Home Page
                        }
                    }, {
                        xtype: 'button',
                        margin: '10 0 0 0',
                        text: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.Return'),
                        handler: function () {
                            var l = Ext.getCmp('mainRegArea').getLayout();
                            l.setActiveItem(REG_PAGES.SEARCH_2.value); //Going to Search Part-2 Screen (Result List)
                        }
                    }, {
                        xtype: 'button',
                        margin: '10 0 0 10',
                        text: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.BMI'),
                        // ui: 'raxa-aqua-small',
                        action: 'bmipage'
                    }, {
                        xtype: 'button',
                        margin: '10 0 0 20',
                        id: 'updateButton',
                        text: Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.EDIT'),
                        handler: function () {
                            var ids = ['oldPatientIdentifierSearchedPatient','patientNameSearchedPatient','relativeNameSearchedPatient','ageSearchedPatient','sexSearchedPatient','educationSearchedPatient','casteSearchedPatient','occupationSearchedPatient','residentialAreaSearchedPatient','stretSearchedPatient','townSearchedPatient','tehsilSearchedPatient','districtSearchedPatient','stateSearchedPatient','primaryContactNumberSearchedPatient'];
                            //console.log(updateData);
                            if(Ext.getCmp('updateButton').text == Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.EDIT') ) {
                                console.log(Ext.getCmp('updateButton').text);
                                for( id in ids) {
                                    Ext.getCmp(ids[id]).setReadOnly(false);
                                }
                                Ext.getCmp('updateButton').setText(Ext.i18n.appBundle.getMsg('RaxaEmrReg.view.sc.UPDATE'))
                             }
                             else {   
                                age = Ext.getCmp('ageSearchedPatient').value;
                                data = JSON.stringify(Ext.getCmp('fieldsetSearchedPatient').updateData);
                                Ext.Ajax.request({
                                    url: HOST+'/ws/rest/v1/raxacore/patient/'+localStorage.getItem('newPatientUuid'),
                                    useDefaultXhrHeader: false,
                                    headers: Util.getBasicAuthHeaders(),
                                    params: data,
                                    success: function(response){
                                        var text = response.responseText;
                                    }
                                });
                            }
                        }
                    }]
                }]
            // }]
        };
        this.callParent();
    }
});
