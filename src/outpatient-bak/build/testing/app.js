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
 */

Ext.define('RaxaEmr.Outpatient.model.patientlist', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['firstName', 'lastName', 'city', 'state', 'disease', 'noofvisits',
        {
            name: 'lastvisit',
            type: 'date',
        }, 'nameofdoc', 'id', 'age', 'urgency', 'image']
    }
});

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
 */

Ext.define('RaxaEmr.Outpatient.model.Grid', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['height', 'weight', 'bmi', 'bp', 'pulse', 'resrate', 'temp', 'oxysat']
    }
});
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
 */

Ext.define('RaxaEmr.Outpatient.model.medicationhistory', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['drugname', 'duration', 'lastfilled', 'prescriber', 'drugreaction', 'dosage', 'routeofadministration']
    }
});
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
 */

Ext.define('RaxaEmr.Outpatient.model.refertodoc', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['docname', 'opdno']
    }
});
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
 */

Ext.define('RaxaEmr.Outpatient.model.labresulthistory', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['labtesttype', 'laborderno', 'specimenid', 'labtestdate']
    }
});
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
 */

Ext.define('RaxaEmr.Outpatient.model.drugpanel', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['drugname', 'strength', 'instruction', 'frequency', 'routeofadministration', 'duration']
    }
});
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
 */
Ext.define('RaxaEmr.Outpatient.model.cheifcomplain', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['complain', 'id', 'duration']
    }
});
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
 */
Ext.define('RaxaEmr.Outpatient.model.sign', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['sign', 'id', 'type']
    }
});
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
 */
Ext.define('RaxaEmr.Outpatient.model.diagnosis', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['sign', 'id', 'type']
    }
});

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
 */
Ext.define('RaxaEmr.Outpatient.model.diagnosedDisease', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['complain', 'id', 'duration']
    }
});

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
 */
Ext.define('RaxaEmr.Outpatient.model.druglist', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'drug',
            type: 'string',
            mapping: 'name'
        }, {
            name: 'uuid',
            type: 'string',
            mapping: 'uuid'
        }],
    }
});

Ext.define('RaxaEmr.Outpatient.model.Observation', {
	extend: 'Ext.data.Model',
	config: {
		fields: [{
			name: 'uuid',
			type: 'string'
		},
		{
			name: 'display',
			type: 'string'
		},
		{
			name: 'obsDatetime',
			type: 'string'
		},
		{
			name: 'value',
			type: 'string'
		},
		{
			name: 'comment',
			type: 'string'
		},
		{
			name: 'order',
			type: 'int'
		}]
	}
});


Ext.define('RaxaEmr.Outpatient.model.PostList', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'id',
            persist: false
        }, {
			name: 'name',
			type: 'string'
		}, {
			name: 'description',
			type: 'string'
		}, {
			name: 'searchQuery',
			tyep: 'string'
		}, {
            name: 'uuid',
			type: 'string',
			persist: false
        }]
    }
});

Ext.define("RaxaEmr.Outpatient.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});

// TODO: Remove this test hook. just causes you to autonavigate to screen 2, to save some clicking effort.
var TEMP_TEST_THINGY = false;
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
 */
var myRecord; // for the record of current patient
var opd_observations = new Array(); //contains the observations of different tabs

Ext.define('RaxaEmr.Outpatient.controller.patientlist', {
    extend: 'Ext.app.Controller',
    config: {
        refs: { // all the fields are accessed in the controller through the id of the components 
            main: '#mainview',
            contacts: 'patientlist',
            contact: '#contact',
            name: '#name',
            docname: '#docname',
            urgency: '#urgency',
            lastvisit: '#lastvisit',
            refresh: '#refresh',
            mainTabs: '#maintabs',
            medicationHistory: '#medicationhistory',
            refToDocButton: '#reftodocbutton',
            confirmLabResultHistoryButton: '#confirmlabresulthistory',
            confirmMedicationHistoryButton: '#confirmmedicationhistory',
            confirmReferToDocButton: '#confirmrefertodoc',
            cheifcomplain: '#cheifComplain',
            labinfo: '#labinfo',
            examlist: '#examList',
            signlist: '#signList',
            deletecomlain: '#deleteComlain',
            addduration: '#addDuration',
            saveduration: '#saveDuration',
            adddruginlist: '#addDrugInList',
            addMoreDrug: '#addMoreDrug',
            submithistory: '#submit-history',
            submitdrugs: '#submitDrugs',
            adddiagnosis: '#addDiagnosis',
            submitdiagnosis: '#submitDiagnosis',
            labordersearchfield: '#labordersearchfield',
            medicationhistorysearchfield: '#medicationhistorysearchfield',
            medicationhistorysortbydrugname: '#medicationhistorysortbydrugname',
            medicationhistorysortbydrugreaction: '#medicationhistorysortbydrugreaction',
            reftodocsearchfield: '#reftodocsearchfield',
            reftodocsortbydocname: '#reftodocsortbydocname',
            reftodocsortbyopdno: '#reftodocsortbyopdno',
            signfilterbysearchfield: '#signfilterbysearchfield',
            referPatient: '#referpatient',
            diagnosisfilterbysearchfield: '#diagnosisfilterbysearchfield',
            diagnosislist: '#diagnosisList',
            deleteDiagnosed: '#deleteDiagnosed',
            drugfilterbysearchfield: '#drugfilterbysearchfield',
            druglist: '#drugList',
            vitalsGrid : '#vitalsGrid',
        },

        control: { //to perform action on specific component accessed through it's id above 
            main: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            contacts: {
                itemtap: 'onContactSelect'
            },
            signlist: {
                itemtap: 'onSignListSelect'
            },
            diagnosislist: {
                itemtap: 'onDiagnosisListSelect'
            },
            examlist: {
                itemtap: 'onExamListSelect'
            },
            druglist: {
                itemtap: 'onDrugListSelect',
            },
            name: {
                tap: 'sortByName'
            },
            docname: {
                tap: 'sortByDocName'
            },
            urgency: {
                tap: 'sortByUrgency'
            },
            lastvisit: {
                tap: 'sortByLastVisit'
            },
            refresh: {
                tap: 'refreshList'
            },
            medicationhistorysortbydrugname: {
                tap: 'medicationHistorySortByDrugName'
            },
            medicationhistorysortbydrugreaction: {
                tap: 'medicationHistorySortByDrugReaction'
            },
            reftodocsortbydocname: {
                tap: 'refToDocSortByDocName'
            },
            reftodocsortbyopdno: {
                tap: 'refToDocSortByOpdno'
            },
            medicationHistory: {
                tap: 'medicationHistoryAction'
            },
            refToDocButton: {
                tap: 'refToDocButton'
            },
            labinfo: {
                tap: 'labInfoAction'
            },
            searchfield: {
                clearicontap: 'patientListOnSearchClearIconTap',
                keyup: 'patientListOnSearchKeyUp'
            },
            labordersearchfield: {
                clearicontap: 'labOrderOnSearchClearIconTap',
                keyup: 'labOrderOnSearchKeyUp'
            },
            medicationhistorysearchfield: {
                clearicontap: 'medicationHistoryOnSearchClearIconTap',
                keyup: 'medicationHistoryOnSearchKeyUp'
            },
            reftodocsearchfield: {
                clearicontap: 'refToDocOnSearchClearIconTap',
                keyup: 'refToDocOnSearchKeyUp'
            },
            signfilterbysearchfield: {
                clearicontap: 'signFilterByOnSearchClearIconTap',
                keyup: 'signFilterByOnSearchKeyUp'
            },
            diagnosisfilterbysearchfield: {
                clearicontap: 'diagnosisFilterByOnSearchClearIconTap',
                keyup: 'diagnosisFilterByOnSearchKeyUp'
            },
            drugfilterbysearchfield: {
                clearicontap: 'drugFilterByOnSearchClearIconTap',
                keyup: 'drugFilterByOnSearchKeyUp'
            },
            cheifcomplain: {
                change: 'addChiefComplain',
            },
            deletecomlain: {
                tap: 'deleteComplain',
            },
            saveduration: {
                tap: 'saveduration',
            },
            addduration: {
                tap: 'addduration',
            },
            adddruginlist: {
                tap: 'adddruginlist'
            },
            addMoreDrug: {
                tap: 'adddruginlist'
            },
            submithistory: {
                tap: 'submitHistory'
            },
            submitdrugs: {
                tap: 'submitdrugs'
            },
            adddiagnosis: {
                tap: 'addDiagnosis'
            },
            submitdiagnosis: {
                tap: 'submitDiagnosis'
            },
            referPatient: {
                tap: 'referPatient'
            },
            deleteDiagnosed: {
                tap: 'deleteDiagnosed',
            },
            diagnosedList: {
                itemtap: 'onDiagnosedListSelect'
            }
        }
    },
    //this function starts on the load of the module
    init: function () {
        // TODO: Temp
        if (! TEMP_TEST_THINGY)
        {
           this.getpatientlist();
        }
    }, 

    // TODO: Temp
    launch: function () {
        if (TEMP_TEST_THINGY)
        {
            this.onContactSelect();
        }
    },

    //fetches patient list who are screened but not not have an OPD encounter
    getpatientlist: function () {
        var d = new Date();
        //fetching screener patient list
        var list_scrEncounter = Ext.create('RaxaEmr.Outpatient.model.PostList', {
            name: "Screener Encounter",
            description: "Patients encountered Screener on " + "startDate=" + Util.Datetime(d, 24) + "&endDate=" + Util.Datetime(d),
            searchQuery: "?encounterType=" + localStorage.screenerUuidencountertype + "&startDate=" + Util.Datetime(d, 24) + "&endDate=" + Util.Datetime(d)

        });
        //fetching opd patient list
        var list_outEncounter = Ext.create('RaxaEmr.Outpatient.model.PostList', {
            name: "Outpatient Encounter",
            description: "Patients encountered Outpatient on " + "startDate=" + Util.Datetime(d, 24) + "&endDate=" + Util.Datetime(d),
            searchQuery: "?encounterType=" + localStorage.outUuidencountertype + "&startDate=" + Util.Datetime(d, 24) + "&endDate=" + Util.Datetime(d)

        });
        var k = 0;
        this.createList(list_scrEncounter, list_outEncounter, k);

    },
    //creating postlists for screener and opd lists
    createList: function (list_scr, list_out, k) {
        var store_scr = Ext.create('RaxaEmr.Outpatient.store.PostLists');
        var store_out = Ext.create('RaxaEmr.Outpatient.store.PostLists');
        store_scr.add(list_scr);
        store_out.add(list_out);
        store_scr.sync();
        store_out.sync();
        store_scr.on('write', function () {
            k = k + 1;
            if (k == 2) {
                this.finalPatientList(store_scr, store_out);
            }
        }, this);
        store_out.on('write', function () {
            k = k + 1;
            if (k == 2) {
                this.finalPatientList(store_scr, store_out);
            }
        }, this);
    },
    //this is where the actual list is fetched
    finalPatientList: function (store_scrEncounter, store_outEncounter) {
        var store_patientList = Ext.create('RaxaEmr.Outpatient.store.PatientsList', {
            storeId: 'patientStore'
        });
        store_patientList.getProxy().setUrl(this.getPatientListUrl(store_scrEncounter.getData().getAt(0).getData().uuid, store_outEncounter.getData().getAt(0).getData().uuid, localStorage.screenerUuidencountertype));
        store_patientList.load({
            scope: this,
            callback: function(records, operation, success){
                if(success){
                    Ext.getCmp('contact').setStore(store_patientList);//setting store for the patient list
                }
                else{
                    Ext.Msg.alert("Error", Util.getMessageLoadError());
                }
            }
        });
        return store_patientList;
    },
    //for setting the url of the store
    getPatientListUrl: function (scr_UUID, out_UUID, encountertype) {
        return (HOST + '/ws/rest/v1/raxacore/patientlist' + '?inList=' + scr_UUID + '&notInList=' + out_UUID + '&encounterType=' + encountertype);
    },
    //what happens when we push something in the main view i.e. acually viewport of the module
    onMainPush: function (view, item) {

        if (item.xtype == "contact-show") {
            this.getContacts().deselectAll();
        }

    },
    //function is called when we popped from main view
    onMainPop: function (view, item) {
        this.buttonHide('confirmlabresulthistory');
        this.buttonHide('confirmmedicationhistory');
        this.buttonHide('confirmrefertodoc');
    },
    //called after clicking on a patient in the patient list
    onContactSelect: function (list, index, node, record) {

        if (!this.showContact) {
            this.showContact = Ext.create('RaxaEmr.Outpatient.view.patient.more');
        }

        // TODO: Temp
        if (! TEMP_TEST_THINGY) {
            this.showContact.setRecord(record);
        }
        this.getMain().push(this.showContact);
        

        if (TEMP_TEST_THINGY) {
            return;
        }


        // Persist current patient's details
        myRecord = record;
       
        // Helper Function for getting most recent value of an observation type
        //
        // Input: display name of Observation and store of Observations
        // Returns: value of observation, if it exists, else "-"
        //
        // Note that the observations store may include only a subset of all
        // observations (e.g. the most recent 25), so you may not see an
        // observation if it is not recent enough
        var getMostRecentObsValue = function (display, store) {
            var groups = store.getGroups();
            for (var k=0; k < groups.length; k++)
            {
                if (groups[k].name === display && groups[k].children.length) 
                {
                    return groups[k].children[0].data.value;
                }
            }
            return "-";
        };
        
        // Load observations for current patient
        console.log("load obsStore");
        var obsStore = Ext.create('RaxaEmr.Outpatient.store.obs');
        console.log(obsStore); 
            
        obsStore.getProxy().setUrl(HOST + '/ws/rest/v1/obs?patient=' + myRecord.data.uuid);
        var that = this;
        obsStore.load({
            callback: function(records, operation, success){
                if(success){
                        // wait for store to load
                        console.log(obsStore); 
                        var obsTypes = ['PULSE','TEMPERATURE (C)', 'BLOOD OXYGEN SATURATION', 'DIASTOLIC BLOOD PRESSURE', 'SYSTOLIC BLOOD PRESSURE', 'RESPIRATORY RATE'];
                        item = {};
                        item.pulse = '-';
                        item.temp = '-';
                        item.oxysat = '-';
                        item.sbp = '-';
                        item.dbp = '-';
                        item.resrate = '-';
                        for (var i=0; i < obsTypes.length; i++) {
                            var val = getMostRecentObsValue(obsTypes[i], obsStore)
                            console.log(obsTypes[i] + " is " + val);
                            // TODO: Will show undefined if no value is found
                            switch (obsTypes[i]){
                                case 'PULSE':
                                    item.pulse = val;
                                    break;
                                case 'TEMPERATURE (C)':
                                    item.temp = val;
                                    break;
                                case 'BLOOD OXYGEN SATURATION':
                                    item.oxysat = val;
                                    break;
                                case 'DIASTOLIC BLOOD PRESSURE': 
                                    item.dbp = val;
                                    break;
                                case 'SYSTOLIC BLOOD PRESSURE':
                                    item.sbp = val;
                                    break;
                                case 'RESPIRATORY RATE':
                                    item.resrate = val;
                                    break;
                                default:
                                    break;
                            }
                        }
                        item.bp = Ext.String.format('{0} / {1}', item.sbp, item.dbp);

                        var vitalsGridStore = Ext.getStore("Grid");
                        vitalsGridStore.clearData();
                        vitalsGridStore.add(item);
                    //do the things here
                }
                else{
                    Ext.Msg.alert("Error", Util.getMessageLoadError());
                }
            }
        });
    },

    addChiefComplain: function () {
        var combo = Ext.getCmp('cheifComplain');
        examlist = Ext.getCmp('examList');
        examlist.getStore().add({
            complain: combo.getValue(),
            id: combo.getValue()
        });
        Ext.getCmp('maintabs').setActiveItem(TABS.EXAMINATION);
    },
    // called after selection of the examination list
    onExamListSelect: function (list, index, node, record) {
        Ext.getCmp('deleteComlain').setHidden(false);
        Ext.getCmp('addDuration').setHidden(false);
    },
    //to delete something form examination list of sign list
    deleteComplain: function () {
        var examlist = Ext.getCmp('examList');
        selectedRecord = examlist.getSelection();
        examlist.getStore().remove(selectedRecord);
    },
    //to add duration for a specefic problem/sign in the examlist
    addduration: function () {
        this.getMain().push(Ext.getCmp('durationPicker'));
        Ext.getCmp('durationPicker').setHidden(false);
    },
    //for saving the duaration
    saveduration: function () {
        var duration = Ext.getCmp('durationfield').getValue();
        var examlist = Ext.getCmp('examList');
        var selectedRecord = examlist.getSelection();
        var duration = Ext.getCmp('durationfield').getValue();
        var listdata = selectedRecord[0].set('duration', ' : ' + duration + ' days');
        Ext.getCmp('durationPicker').setHidden(true);
        Ext.getCmp('durationfield').reset();
    },
    //to perform actions on toolbar buttion of navigation view
    buttonAction: function (obj, obj2) {
        this.obj1 = Ext.create(obj);
        this.obj1.setRecord(myRecord);
        this.getMain().push(this.obj1);
        this.buttonShow(obj2);
    },

    buttonShow: function (obj) {
        var button = Ext.getCmp(obj);

        if (!button.isHidden()) {
            return;
        }

        button.setHidden(false);
    },

    buttonHide: function (obj) {
        var button = Ext.getCmp(obj);

        if (button.isHidden()) {
            return;
        }

        button.setHidden(true);
    },
    //to show the lab history of a patient
    labInfoAction: function () {
        this.buttonAction('RaxaEmr.Outpatient.view.patient.labresulthistorypanel', 'confirmlabresulthistory');
    },
    //to show the medication history of a patient
    medicationHistoryAction: function () {
        this.buttonAction('RaxaEmr.Outpatient.view.patient.medicationhistorypanel', 'confirmmedicationhistory');
    },
    //to show the doctors list for referal
    refToDocButton: function () {
        this.buttonAction('RaxaEmr.Outpatient.view.patient.refertodocpanel', 'confirmrefertodoc');
        var docList = Ext.create('Screener.store.Doctors', {
            storeId: 'docStore'
        });
        docList.load({
            scope: this,
            callback: function(records, operation, success){
                if(success){
                    Ext.getCmp('refToDocPanel').setStore(docList);
                }
                else{
                    Ext.Msg.alert("Error", Util.getMessageLoadError());
                }
            }
        });
    },
    //for shorting the patient list
    sortBy: function (obj, listStore) {
        listStore.setSorters(obj);
        listStore.load({
            scope: this,
            callback: function(records, operation, success){
                if(success){
                }
                else{
                    Ext.Msg.alert("Error", Util.getMessageLoadError());
                }
            }
        });
    },

    sortByName: function () {
        this.sortBy('display', this.getContact().getStore());
    },

    sortByDocName: function () {
        this.sortBy('nameofdoc', this.getContact().getStore());
    },

    sortByUrgency: function () {
        this.sortBy('urgency', this.getContact().getStore());
    },

    sortByLastVisit: function () {
        this.sortBy('lastvisit', this.getContact().getStore());
    },
    
    refreshList: function () {
        this.getContact().getStore().load({
            scope: this,
            callback: function(records, operation, success){
                if(success){
                }
                else{
                    Ext.Msg.alert("Error", Util.getMessageLoadError());
                }
            }
        });
    },
    // for sorting the medication history
    medicationHistorySortByDrugName: function () {
        this.sortBy('drugname', Ext.getCmp('medicationhistorygrid').getStore());
    },

    medicationHistorySortByDrugReaction: function () {
        this.sortBy('drugreaction', Ext.getCmp('medicationhistorygrid').getStore());
    },
    // sorting the doc list for referal
    refToDocSortByDocName: function () {
        this.sortBy('display', Ext.getCmp('refToDocPanel').getStore());
    },

    refToDocSortByOpdno: function () {
        this.sortBy('uuid', Ext.getCmp('refToDocPanel').getStore());
    },
    // for serching in the list
    onSearchKeyUp: function (listStore, field, value1, value2) {

        var value = field.getValue();
        var store = listStore;

        store.clearFilter();

        if (value) {
            var searches = value.split(' ');
            var regexps = [];
            var i;

            for (i = 0; i < searches.length; i++) {
                if (!searches[i]) continue;
                regexps.push(new RegExp(searches[i], 'i'));
            }

            store.filter(function (record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i];
                    var didMatch = record.get(value1).match(search) || record.get(value2).match(search);
                    matched.push(didMatch);
                }

                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    return matched[0];
                }
            });
        }
    },
    // called when clear icon in the search field is clicked
    onSearchClearIconTap: function (listStore) {
        listStore.clearFilter();
    },

    patientListOnSearchKeyUp: function (field) {
        this.onSearchKeyUp(this.getContact().getStore(), field, 'display', 'uuid');
    },

    patientListOnSearchClearIconTap: function () {
        this.onSearchClearIconTap(this.getContact().getStore());
    },

    medicationHistoryOnSearchKeyUp: function (field) {
        this.onSearchKeyUp(Ext.getCmp('medicationhistorygrid').getStore(), field, 'drugname', 'drugreaction');
    },

    medicationHistoryOnSearchClearIconTap: function () {
        this.onSearchClearIconTap(Ext.getCmp('medicationhistorygrid').getStore());
    },

    labOrderOnSearchKeyUp: function (field) {
        this.onSearchKeyUp(Ext.getCmp('labResultHistoryList').getStore(), field, 'laborderno', 'specimenid');
    },

    labOrderOnSearchClearIconTap: function () {
        this.onSearchClearIconTap(Ext.getCmp('labResultHistoryList').getStore());
    },

    refToDocOnSearchKeyUp: function (field) {
        this.onSearchKeyUp(Ext.getCmp('refToDocPanel').getStore(), field, 'display', 'uuid');
    },

    refToDocOnSearchClearIconTap: function () {
        this.onSearchClearIconTap(Ext.getCmp('refToDocPanel').getStore());
    },
    //called when sign list is clicked or selected
    onSignListSelect: function (list, index, node, record) {
        var sign = record.data.sign;
        list.getStore().remove(record);
        examlist = Ext.getCmp('examList');
        examlist.getStore().add({
            complain: sign,
            id: sign,
        });
    },
    // to filter the search in the signlist
    signFilter: function () {
        var value = Ext.getCmp('signFilter').getValue();
        var store = Ext.getCmp('signList').getStore();

        if (value) {
            var searches = value.split(' ');
            var regexps = [];
            var i;

            for (i = 0; i < searches.length; i++) {
                if (!searches[i]) continue;
                regexps.push(new RegExp(searches[i], 'i'));
            }

            store.filter(function (record) {
                var matched = [];

                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i];
                    var didMatch = record.get('type').match(search);
                    matched.push(didMatch);
                }

                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    return matched[0];
                }
            });
        }
    },
    //for searching in the signlist
    signFilterByOnSearchKeyUp: function (field) {
        Ext.getCmp('signList').setHidden(false);
        Ext.getCmp('signList').getStore().load({
            scope: this,
            callback: function(records, operation, success){
                if(success){
                }
                else{
                    Ext.Msg.alert("Error", Util.getMessageLoadError());
                }
            }
        });
        this.onSearchKeyUp(Ext.getCmp('signList').getStore(), field, 'sign', 'type');
        this.signFilter();
    },

    signFilterByOnSearchClearIconTap: function () {
        this.onSearchClearIconTap(Ext.getCmp('signList').getStore());
    },

    //This function searches list of diagnosis. Since this list is very big, UI occasionally freezes
    //So, this function searches only after "Enter" button is detected
    diagnosisFilterByOnSearchKeyUp: function (field, e) {

        //Searches only if Enter key is identified

        // Commented code to check if "Enter" Key is pressed or not as list of diagnosis is reduced to JSS prefered only
//        if (e.event.keyIdentifier == "Enter") {
            Ext.getCmp('diagnosisList').setHidden(false);
            Ext.getCmp('diagnosisList').getStore().load();
            this.onSearchKeyUp(Ext.getCmp('diagnosisList').getStore(), field, 'sign', 'type');
            this.signFilter();
//        }
    },

    //This function is called on every event on searchfield 
    diagnosisFilterByOnSearchClearIconTap: function () {
        this.onSearchClearIconTap(Ext.getCmp('diagnosisList').getStore());
    },

    //This function calls on selection of Diagnosis list and adds to Diagnosed List
    onDiagnosisListSelect: function (list, index, node, record) {
        var sign = record.data.sign;
        list.getStore().remove(record);
        diagnosislist = Ext.getCmp('diagnosedList');
        diagnosislist.getStore().add({
            complain: sign,
            id: sign,
        });
    },

    //This function is triggered when items are selected in diagnosed list and Delete button is pressed (to remove diagnosed disease)
    deleteDiagnosed: function () {
        var diagnosedlist = Ext.getCmp('diagnosedList');
        selectedRecord = examlist.getSelection();
        examlist.getStore().remove(selectedRecord);
    },

    //This function enables button which is to remove selected Diagnosed Diseased from Diagnosed List
    onDiagnosedListSelect: function (list, index, node, record) {
        Ext.getCmp('deleteDiagnosed').setHidden(false);
    },
    // called when an opd encounter is submitted
    submitOpdEncounter: function () {
        var obsdate = new Date();
        var time = Util.Datetime(obsdate, Util.getUTCGMTdiff());

        var opdencounter = Ext.create('RaxaEmr.Outpatient.model.opdEncounter', {
            patient: myRecord.data.uuid,
            encounterType: localStorage.outUuidencountertype,
            encounterDatetime: time,
            provider: localStorage.loggedInUser,
            obs: opd_observations
        });

        var encounterStore = Ext.create('RaxaEmr.Outpatient.store.opdEncounterPost');
        encounterStore.add(opdencounter);
        encounterStore.sync();
        encounterStore.on('write', function () {
            Ext.Msg.alert('successfull');
        }, this);
        Ext.getCmp('examList').getStore().removeAll();
    },

    drugFilterByOnSearchClearIconTap: function () {
        this.onSearchClearIconTap(Ext.getCmp('drugList').getStore());
    },

    //for searching in the druglist
    drugFilterByOnSearchKeyUp: function (field) {

	//Panel is created on left side of searchfield if not created in any previous call
        if (!Ext.getCmp('searchedDrugList')) {
            Ext.create('Ext.Panel', {
                id: 'searchedDrugList',
                items: [{
                    height: 475,
                    xtype: 'Drug-List',
                    scrollable: true,
                    hidden: false
                }],
                width: 200,
                height: 500,
                padding: 10
            }).showBy(Ext.getCmp('drugfilterbysearchfield'), "tl-tr?");

        } 
        else {
            Ext.getCmp('searchedDrugList').setHidden(false);
        }

	//Searches on drugList
        Ext.getCmp('drugList').getStore().load();
        this.onSearchKeyUp(Ext.getCmp('drugList').getStore(), field, 'drug', 'uuid');
        this.signFilter();
    },

    onDrugListSelect: function (list, index, node, record) {
        Ext.getCmp('drugfilterbysearchfield').setValue(record.data.drug);
        Ext.getCmp('searchedDrugList').setHidden(true);
    },

    // to add observation in the observation array
    addObservation: function (concept, value) {
        var obsdate = new Date();
        opd_observations.push({
            person: myRecord.data.uuid,
            obsDatetime: obsdate,
            concept: concept,
            value: value
        });
    },
    // to submit history observations
    submitHistory: function () {
        var obsdate = new Date();
        var tobaccoValue = Ext.getCmp('tobaccoField').getValue() + ' ' + Ext.getCmp('tobaccoRouteofIntake').getValue() + ' ' + Ext.getCmp('tobaccoFrequency').getValue()

        this.addObservation(localStorage.patientHistoryUuidconcept, Ext.getCmp('patientHistory').getValue());
        this.addObservation(localStorage.pastMedicationHistoryUuidconcept, Ext.getCmp('pastMedicalHistory').getValue());
        this.addObservation(localStorage.alcoholIntakeUuidconcept, Ext.getCmp('alcoholField').getValue());
        this.addObservation(localStorage.tobaccoIntakeUuidconcept, tobaccoValue);
        this.addObservation(localStorage.otherHistoryUuidconcept, Ext.getCmp('otherHistory').getValue());
        this.addObservation(localStorage.familyHistoryUuidconcept, Ext.getCmp('familyHistory').getValue());

        Ext.getCmp('patientHistoryPanel').reset();
        Ext.getCmp('socialHistoryPanel').reset();
    },
    // to submit the examination observations
    submitExamination: function () {
        var obsdate = new Date();
        var examlist = Ext.getCmp('examList').getStore();
        var prob_num = examlist.getCount();
        for (i = 0; i < prob_num; i++) {
            this.addObservation(localStorage.examlistUuidconcept, examlist.getAt(i).data.complain + examlist.getAt(i).data.duration);
        }
    },
    // to add the diagnosis observations in the obs array
    addDiagnosis: function () {
        var obsdate = new Date();
        var conceptType;
        var diagnosis_category = Ext.getCmp('diagnosisCategory').getValue();
        if (diagnosis_category == 'Neuro') {
            conceptType = localStorage.neurologicalDiagnosisUuidconcept;
        } else if (diagnosis_category == 'Cardio') {
            conceptType = localStorage.cadiologicalDiagnosisUuidconcept;
        }
        this.addObservation(conceptType, Ext.getCmp('diagnosisField').getValue() + ' : ' + Ext.getCmp('diagnosisNotes').getValue());
        Ext.getCmp('diagnosisForm').reset();
    },
    // to submit the diagnosis observations
    submitDiagnosis: function () {
        this.addDiagnosis();
        this.submitExamination();
        this.submitOpdEncounter();
    },
    // to add the drug order in the drug list and drug panel
    adddruginlist: function (obj) {
        druglist = Ext.getCmp('orderedDrugGrid');
	
	//Drug Form details are pushed to druglist store after validation of fields
        // if (Ext.getCmp('drugfilterbysearchfield').getValue() && Ext.getCmp('drug-strength').getValue() && Ext.getCmp('drug-instruction').getValue() && Ext.getCmp('drug-frequency').getValue() && Ext.getCmp('drug-duration').getValue() && Ext.isNumeric(Ext.getCmp('drug-duration').getValue()) && Ext.getCmp('drug-routeofadministration')) {
        if (Ext.getCmp('drugfilterbysearchfield').getValue()) {
            druglist.getStore().add({
                drugname: Ext.getCmp('drugfilterbysearchfield').getValue(), //Ext.getCmp('drug-name').getValue(),
                strength: Ext.getCmp('drug-strength').getValue(),
                instruction: Ext.getCmp('drug-instruction').getValue(),
                frequency: Ext.getCmp('drug-frequency').getValue(),
                duration: Ext.getCmp('drug-duration').getValue(),
                routeofadministration: Ext.getCmp('drug-routeofadministration').getValue()
                // strength: 'fake mg',
                // instruction: 'fake ins',
                // frequency: 'fake freq',
                // duration: 'fake dur',
                // routeofadministration: 'fake route'
            });
	 
	    //Drug Form is reset after drug data is pushed into code
            Ext.getCmp('drugaddform').reset();

            if (obj.id != 'addMoreDrug') {
                Ext.getCmp('drugForm').setHidden(true);
            };   
        } 
        else {
            Ext.Msg.alert('Invalid Form', 'Please complete the Drug Form');
            Ext.getCmp('treatment-panel').setActiveItem(TREATMENT.ADD);
        }

        if (Ext.getCmp('searchedDrugList')) {
            Ext.getCmp('searchedDrugList').setHidden(true);
        }
    },
    
    // to submit the drug order
    submitdrugs: function () {
        concept = new Array();
        order = new Array();
        var k = 0,
            l = 0;
        var druglist = Ext.getCmp('drugList').getStore();
        var drug_num = Ext.getCmp('drugList').getStore().getCount();
        drug_num = drug_num - 1;
        for (i = 0; i <= drug_num; i++) {
            // value of Url for get call is made here using name of drug
            var Url = HOST + '/ws/rest/v1/concept?q='
            //            Url = Url + Ext.getCmp('drugfilterbysearchfield').getValue();
            concept.push(Ext.create('RaxaEmr.Outpatient.store.drugConcept'))
            // setting up the proxy for store with the above Url
            concept[i].setProxy({
                type: 'rest',
                url: Url,
                headers: Util.getBasicAuthHeaders(),
                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            })
            var startdate = new Date()
            // value of end date depending on the duration 
            var enddate = new Date(startdate.getFullYear(), startdate.getMonth(), startdate.getDate() + druglist.getAt(i).data.duration);
            // model for drug order is created here
            order.push({
                patient: myRecord.data.uuid,
                drug: druglist.getAt(i).data.drug,
                startDate: startdate,
                autoExpireDate: enddate,
                dose: druglist.getAt(i).data.strength,
                quantity: druglist.getAt(i).data.duration,
                frequency: druglist.getAt(i).data.frequency,
                instructions: druglist.getAt(i).data.instruction,
                // type should be "drugorder" in order to post a drug order
                type: 'drugorder'
            })
            if (order[i].instructions == "") order[i].instructions = "-"
            // here it makes the get call for concept of related drug
            concept[i].load({
                scope: this,
                callback: function(records, operation, success){
                    if(success){
                        // added a counter k which increment as a concept load successfully, after all the concept are loaded
                        // value of k should be equal to the no. of drug forms
                        k = k + 1;
                        // value of k is compared with the no of drug forms
                        if (k == drug_num + 1) {
                            for (var j = 0; j <= drug_num; j++) {
                                order[j].concept = concept[j].getAt(0).data.uuid
                            }
                            var time = Util.Datetime(startdate, Util.getUTCGMTdiff());
                            // model for posting the encounter for given drug orders
                            var encounter = Ext.create('RaxaEmr.Outpatient.model.drugEncounter', {
                                patient: myRecord.data.uuid,
                                // this is the encounter for the prescription encounterType
                                encounterType: localStorage.prescriptionUuidencountertype,
                                encounterDatetime: time,
                                provider: localStorage.loggedInUser,
                                orders: order
                            })
                            var encounterStore = Ext.create('RaxaEmr.Outpatient.store.drugEncounter')
                            encounterStore.add(encounter)
                            // make post call for encounter
                            encounterStore.sync()
                            encounterStore.on('write', function () {
                                Ext.Msg.alert('successfull')
                                //Note- if we want add a TIMEOUT it shown added somewhere here
                            }, this)

                        }
                    }
                    else{
                        Ext.Msg.alert("Error", Util.getMessageLoadError());
                    }
                }
            });
        }
        druglist.removeAll();
    },

    referPatient: function () {
        var selection = Ext.getCmp('refToDocPanel').getSelection();
        var provider = selection[0].data.person.uuid;
        var currentDate = new Date();
        var jsonencounter = Ext.create('Screener.model.encounterpost', {
            encounterDatetime: Util.Datetime(currentDate, 5.5),
            patient: myRecord.data.uuid,
            encounterType: localStorage.screenerUuidencountertype,
            provider: provider
        });
        var store = Ext.create('Screener.store.encounterpost');
        store.getProxy().setUrl(HOST + '/ws/rest/v1/encounter/' + myRecord.data.encounters[0].uuid);
        store.add(jsonencounter);
        store.sync();
        store.on('write', function () {
            Ext.Msg.alert('successful');
        }, this);
    }
});

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
 */

Ext.define('RaxaEmr.Outpatient.store.patientlist', {
    extend: 'Ext.data.Store',

    config: {
        model: 'RaxaEmr.Outpatient.model.patientlist',
        autoLoad: true,
        sorters: 'firstName',
        proxy: {
            type: 'ajax',
            url: 'resources/data/patient.json'
        }
    }
});
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
 */

Ext.define('RaxaEmr.Outpatient.store.Grid', {
    extend: 'Ext.data.Store',
    config: {
        model: 'RaxaEmr.Outpatient.model.Grid',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'resources/data/property.json'
        }
    }
});

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
 */

Ext.define('RaxaEmr.Outpatient.store.medicationhistory', {
    extend: 'Ext.data.Store',

    config: {
        model: 'RaxaEmr.Outpatient.model.medicationhistory',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'resources/data/medicationhistory.json'
        }
    }
});
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
 */

Ext.define('RaxaEmr.Outpatient.store.refertodoc', {
    extend: 'Ext.data.Store',

    config: {
        model: 'RaxaEmr.Outpatient.model.refertodoc',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'resources/data/refertodoc.json'
        }
    }
});
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
 */

Ext.define('RaxaEmr.Outpatient.store.labresulthistory', {
    extend: 'Ext.data.Store',

    config: {
        model: 'RaxaEmr.Outpatient.model.labresulthistory',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'resources/data/labresulthistory.json'
        }
    }
});
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
 */

Ext.define('RaxaEmr.Outpatient.store.drugpanel', {
    extend: 'Ext.data.Store',

    config: {
        model: 'RaxaEmr.Outpatient.model.drugpanel',
        autoLoad: true,
    }
});
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
 */
Ext.define('RaxaEmr.Outpatient.store.cheifcomplain', {
    extend: 'Ext.data.Store',

    config: {
        model: 'RaxaEmr.Outpatient.model.cheifcomplain',
        autoLoad: true,
    }
});
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
 */
Ext.define('RaxaEmr.Outpatient.store.sign', {
    extend: 'Ext.data.Store',

    config: {
        model: 'RaxaEmr.Outpatient.model.sign',
        proxy: {
            type: 'ajax',
            url: 'resources/data/sign.json',
        }
    }
});
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
 */
Ext.define('RaxaEmr.Outpatient.store.diagnosis', {
    extend: 'Ext.data.Store',

    config: {
        model: 'RaxaEmr.Outpatient.model.diagnosis',
        proxy: {
            type: 'ajax',
            url: 'resources/data/diagnosis.json',
        }
    }
});

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
 */
Ext.define('RaxaEmr.Outpatient.store.diagnosedDisease', {
    extend: 'Ext.data.Store',

    config: {
        model: 'RaxaEmr.Outpatient.model.diagnosedDisease',
        autoLoad: true,
    }
});

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
 * This store GETs the latest Drug list at startup.
 */

Ext.define('RaxaEmr.Outpatient.store.druglist', {
    extend: 'Ext.data.Store',
      requires: ['RaxaEmr.Outpatient.model.druglist'],
        
    config: {
        model: 'RaxaEmr.Outpatient.model.druglist',
  	    fields: ['drug', 'uuid'],
	  	
      proxy: {
        type: 'rest',
        url: HOST+'/ws/rest/v1/drug?v=full',
        headers: Util.getBasicAuthHeaders(),
        reader: {
           type: 'json',
            rootProperty: 'results'
       }
    },
    autoLoad: true,
    } 
});

/**
 * Note: there is no 'writer' attached to this store, so the
 */
Ext.define('RaxaEmr.Outpatient.store.PostLists', {
    requires: ['RaxaEmr.Outpatient.model.PostList'],
    extend: 'Ext.data.Store',
    config: {
        model: 'RaxaEmr.Outpatient.model.PostList',
        proxy: {
            type: 'ajax',
            url: HOST + '/ws/rest/v1/raxacore/patientlist',
            headers: Util.getBasicAuthHeaders(),
            reader: {
                type: 'json'
            },
            writer: 'json',
        }
    }
});

Ext.define('RaxaEmr.Outpatient.store.obs', {
    extend: 'Ext.data.Store',
    config: {
        model: 'RaxaEmr.Outpatient.model.Observation',
        proxy: {
            type: 'rest',
            url: HOST + '/ws/rest/v1/obs?patient=85d0626e-e32e-4637-8143-2d6b600cbfe3',
            headers: Util.getBasicAuthHeaders(),
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        },
		grouper: {
			groupFn: function(record) {
				var equalSignIndex = record.get('display').indexOf("=");
				return record.get('display').substr(0, equalSignIndex-1);
			},
		}
    }
});

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
 */
Ext.define('RaxaEmr.Outpatient.view.patientlist', {
    extend: 'Ext.List',
    xtype: 'patientlist',
    id: 'contact',

    config: {
        title: 'Outpatient Department',
        cls: 'x-contacts',
        ui: 'round',
		// patient list toolbars
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'segmentedbutton',
                allowDepress: false,
                items: [{
                    xtype: 'button',
                    ui: 'normal',
                    text: 'Today\'s List',
                    pressed: true,
                    width: 150,
                }, {
                    xtype: 'button',
                    text: 'All Patients',
                    width: 150,
                }, {
                    xtype: 'button',
                    text: 'Pending',
                    width: 150,
                }]
            }, {
                xtype: 'spacer'
            }, {
                xtype: 'searchfield',
                id: 'searchfield',
                placeHolder: 'Search...'
            }]
        }, {
            xtype: 'toolbar',
            docked: 'top',

            items: [ {
                xtype: 'segmentedbutton',
                allowDepress: false,
                items: [{
                    xtype: 'button',
                    width: 130,
                    text: 'Name',
                    id: 'name'
                }, {
                    xtype: 'button',
                    width: 130,
                    text: 'Doctor',
                    id: 'docname'
                }, {
                    xtype: 'button',
                    width: 130,
                    text: 'Urgency',
                    id: 'urgency'
                }, {
                    xtype: 'button',
                    width: 130,
                    text: 'Last Visit',
                    id: 'lastvisit'
                }]
            },{
                xtype: 'spacer'
            },{
                    xtype: 'button',
                    width: 130,
                    text: 'Refresh',
                    id: 'refresh',
                    action: 'refreshList',
                    align: 'right'
                }]
        }],
		//list items  are shown by this
		itemTpl: new Ext.XTemplate(
			'<div class="headshot" style="background-image:url({image});"></div>', '<div style="float:left;width:25%;">', '{display}', '<span>Gender : {[this.gender(values.gender)]}</span>', '<span>From : ----</span>', '</div>', '<div style="float:left;width:25%;">', '<span>----</span>', '<span>Disease : ----</span>', '<span>Age : {age}</span>', '</div>', '<div style="float:left;height:32px;width:32px;background-image:url(resources/images/urgency.png);">8</div>', '<div style="float:right;width:25%;">', '<span>Last Visit : ----</span>', '<span>No. of Visits : --</span>', '<span>ID : ----</span>', '</div>',
			{
				date: function(str){
                    return str.encounters[0].encounterDatetime.split("T")[0];
				},
				gender: function(str){
					if(str == 'M'){
						return 'Male';
					}else if(str == 'F'){
                        return 'Female';
					}
				  }
			}
		)
	}
});

Ext.define('RaxaEmr.Outpatient.model.Patients', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
		{
			name: 'id',
            persist: false
		},{
            name: 'uuid',
            type: 'string'
        }, {
            name: 'display',
            type: 'string'
        }, {
            name: 'gender',
            type: 'string'
        }, {
            name: 'age',
            type: 'int'
        }, {
            name: 'encounters',
            persist: false,
            model: 'RaxaEmr.Outpatient.model.encounters'
        }]
    }
});

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
 */
 
 //view of lab result history
 
Ext.define('RaxaEmr.Outpatient.view.patient.labresulthistory', {
    extend: 'Ext.dataview.List',
    xtype: 'Lab-Result-History',
    config: {
        store: 'labresulthistory',
        ui: 'round',
        id: 'labResultHistoryList',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'segmentedbutton',
                margin: '0 0 0 10',
                allowDepress: false,
                items: [{
                    xtype: 'button',
                    text: 'Completed',
                    pressed: true,
                    width: 150,
                }, {
                    xtype: 'button',
                    text: 'Pending',
                    width: 150,
                }]
            }, {
                xtype: 'spacer'
            }, {
                xtype: 'searchfield',
                id: 'labordersearchfield',
                placeHolder: 'Search...'
            }]
        }],
        itemTpl: ['<div>{labtesttype}/Lab Order No: {laborderno}</br>Specimen ID: {specimenid}</br>Date: {labtestdate}</div>']
    }

});
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
 * This contains list of diagnosed diseases, items to which are added on clicking on search result list on diagnosis (Diagnosis Tab)
 */
 
Ext.define('RaxaEmr.Outpatient.view.patient.diagnosedlist', {
    extend: 'Ext.dataview.List',
    xtype: 'Diagnosed-List',
    config: {
        cls: 'x-diagnosed',
        id: 'diagnosedList',
        store: 'diagnosedDisease',
        itemTpl: ['<div id="{id}">', '<strong>{complain}</strong>', '</div>'],
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'spacer'
            },  {
                xtype: 'button',
                ui: 'plain',
                iconCls: 'trash',
                iconMask: true,
                hidden: false,
                id: 'deleteDiagnosed'
            }]
        }]
    },
});

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
 * This list shows result on diagnosis (in Diagnosis Tab)
 */
 
 
Ext.define('RaxaEmr.Outpatient.view.patient.diagnosislist', {
    extend: 'Ext.dataview.List',
    xtype: 'Diagnosis-List',
    config: {
        cls: 'x-exam',
        id: 'diagnosisList',
        store: 'diagnosis',
        itemTpl: ['<div id="{id}">', '<strong>{sign}{duration}</strong>', '</div>']
    },
});

Ext.define('Ext.ux.touch.grid.feature.Feature', {
    extend: 'Ext.mixin.Mixin',

    mixinConfig: {
        id : 'feature'
    },

    initFeatures: function(features, launchFn) {
        var me = this;

        features = me.getFeatures(features, launchFn);

        var f    = 0,
            fNum = features.length,
            feature, cfg, cls;

        if (!me._featuresCollection) {
            me._featuresCollection = Ext.create('Ext.util.MixedCollection');
        }

        for (; f < fNum; f++) {
            feature = features[f];
            cfg     = {};

            if (typeof feature === 'object') {
                Ext.apply(cfg, feature);
                feature = cfg.ftype;
                delete cfg.ftype;
            }

            cfg.grid = me;

            feature = Ext.create(feature, cfg);

            me.addCls(feature.getExtraCls());

            if (feature && typeof feature.init === 'function') {
                me._featuresCollection.add(feature);

                feature.init(me);

                me.on('beforedestroy', me.destroyFeatures, me, { single : true });
            }
        }
    },

    destroyFeatures: function() {
        var me       = this,
            features = me._featuresCollection;

        features.each(function(feature) {
            if (typeof feature.onDestroy === 'function') {
                feature.onDestroy();
            }
        });
    },

    getFeatures: function(features, launchFn) {
        features = features || [];

        var f           = 0,
            fNum        = features.length,
            retFeatures = [],
            feature;

        for (; f < fNum; f++) {
            feature = features[f];

            if (feature.launchFn === launchFn) {
                retFeatures.push(feature);
            }
        }

        return retFeatures
    }
});

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
 */
 
 //the view of history tab
 
// enum to change the panels of history tab
 
var HISTORY = {
    PERSONAL: 0,
    SOCIAL: 1
}

Ext.define('RaxaEmr.Outpatient.view.patient.history', {
    extend: 'Ext.Container',
    xtype: 'history-panel',
    id: 'history-panel',
    config: {
        layout: {
            type: 'card'
        },
        title: 'History',
        activeItem: 0,
        items: [{
            xtype: 'container',
            layout: {
                type: 'hbox'
            },
            scrollable: 'false',
            items: [{
                xtype: 'formpanel',
                id: 'patientHistoryPanel',
                scrollable: 'false',
                flex: 1,
                items: [{
                    xtype: 'fieldset',
                    width: '100%',
                    items: [{
                        xtype: 'textareafield',
                        id: 'patientHistory',
                        label: 'Patient History'
                    }, {
                        xtype: 'textareafield',
                        id: 'pastMedicalHistory',
                        label: 'Past Medical History',
                    }]
                }, {
                    xtype: 'button',
                    ui: 'forward',
                    text: 'Next',
                    id: 'next',
                    handler: function () {
                        Ext.getCmp('history-panel').setActiveItem(HISTORY.SOCIAL)// to swich the view to social history
                    }
                }]
            }, {
                xtype: 'container',
                width: 60,
                items: [{
                    xtype: 'button',
                    docked: 'top',
                    height: 40,
                    margin: '20 20 0 0',
                    width: 40,
                    id: 'labinfo',
                    icon: '../outpatient/resources/images/labhistory.png',
                    padding: '0 10 10 0'
                }, {
                    xtype: 'button',
                    docked: 'top',
                    height: 40,
                    id: 'medicationhistory',
                    margin: '10 20 0 0',
                    width: 40,
                    icon: '../outpatient/resources/images/medicationhistory.png',
                    padding: '0 10 10 0'
                }]
            }]
        }, {
            xtype: 'container',
            layout: {
                type: 'hbox'
            },
            items: [{
                xtype: 'formpanel',
                flex: 1,
                id: 'socialHistoryPanel',
                scrollable: 'false',
                items: [{
                    xtype: 'fieldset',
                    title: 'Social History',
                    items: [{
                        xtype: 'selectfield',
                        label: 'Alcohol',
                        valueField: 'alcoholFrequency',
                        displayField: 'title',
                        id: 'alcoholField',
                        store: {
                            data: [{
                                alcoholFrequency: '',
                                title: ''
                            }, {
                                alcoholFrequency: 'never',
                                title: 'None'
                            }, {
                                alcoholFrequency: 'daily',
                                title: 'Daily'
                            }, {
                                alcoholFrequency: 'occasional',
                                title: 'Occasional'
                            }, {
                                alcoholFrequency: 'experiencedWithdrawal',
                                title: 'Experienced Withdrawal'
                            }]
                        }
                    }, {
                        xtype: 'fieldset',
                        baseCls: 'x-form-fieldset-mod',
                        margin: '0 0 0 0',
                        layout: {
                            type: 'hbox'
                        },
                        items: [{
                            xtype: 'selectfield',
                            label: 'Tobacco',
                            border: 0,
                            labelWidth: '56.25%',
                            flex: 16,
                            valueField: 'time',
                            displayField: 'title',
                            id: 'tobaccoField',
                            store: {
                                data: [{
                                    time: '',
                                    title: ''
                                }, {
                                    time: 'never',
                                    title: 'Never'
                                }, {
                                    time: 'present',
                                    title: 'Present'
                                }, {
                                    time: 'past',
                                    title: 'Past'
                                }]
                            }
                        }, {
                            xtype: 'selectfield',
                            border: 0,
                            flex: 7,
                            valueField: 'way',
                            id: 'tobaccoRouteofIntake',
                            displayField: 'title',
                            store: {
                                data: [{
                                    way: '',
                                    title: ''
                                }, {
                                    way: 'Neither',
                                    title: 'Neither'
                                }, {
                                    way: 'oral',
                                    title: 'Oral'
                                }, {
                                    way: 'smoking',
                                    title: 'Smoking'
                                }, {
                                    way: 'both',
                                    title: 'Both'
                                }]
                            }
                        }, {
                            xtype: 'selectfield',
                            border: 0,
                            flex: 7,
                            valueField: 'amount',
                            id: 'tobaccoFrequency',
                            displayField: 'title',
                            store: {
                                data: [{
                                    amount: '',
                                    title: ''
                                }, {
                                    amount: 'None',
                                    title: 'None'
                                }, {
                                    amount: 'occasional',
                                    title: 'Occasional'
                                }, {
                                    amount: 'heavy',
                                    title: 'Heavy'
                                }]
                            }
                        }]
                    }, {
                        xtype: 'textareafield',
                        id: 'otherHistory',
                        label: 'Other'
                    }]
                }, {
                    xtype: 'fieldset',
                    items: [{
                        xtype: 'textareafield',
                        id: 'familyHistory',
                        label: 'Family History'
                    }]
                }, {
                    xtype: 'container',
                    layout: {
                        pack: 'center',
                        type: 'hbox'
                    },
                    items: [{
                        xtype: 'button',
                        margin: '0 10 0 10',
                        ui: 'confirm',
                        text: 'Submit',
                        flex: 1,
                        id: 'submit-history'
                    }]
                }]
            }, {
                xtype: 'container',
                width: 60,
                items: [{
                    xtype: 'button',
                    docked: 'top',
                    height: 40,
                    id: 'medicationhistory2',
                    margin: '65 20 0 0',
                    width: 40,
                    icon: '../outpatient/resources/images/medicationhistory.png',
                    padding: '0 10 10 0',
                    handler: function () {
                        Ext.getCmp('medicationhistory').fireEvent('tap');// to swich the view to medication history
                    }
                }]
            }]
        }]
    }
});
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
 * This view contains all items to displayed on Data Panel
 * 
 */

Ext.define('RaxaEmr.Outpatient.view.patient.dataPanel', {
    extend: 'Ext.Container',
    xtype: 'data-panel',
    id: 'data-panel',
    config: {
        title: 'Data',
        items: [	

			   ]
   			 }
});

// TODO: must be captured in a setupCanvas method, else will try to affect DOM before it's loaded
///////////////////////////////////////////////////////////
// Connection: Kinetic to Sencha
//  - bridges via firing Ext events
///////////////////////////////////////////////////////////
// Allows us to throw Ext events, triggering Sencha code when tapping on Kinetic items
Ext.define('KineticToSencha', {
  mixins: ['Ext.mixin.Observable'],
  config: {
    fullName: ''
  },

  constructor: function(config) {
    this.initConfig(config); // We need to initialize the config options when the class is instantiated
  },

  addDiagnosis: function() {
    this.fireEvent('clickAddDiagnosis');
  },
  clickDiagnosis: function() {
      this.fireEvent('clickOnDiagnosis');
  },
  
  saveLoadMask: function() {
    var mask = function () {
      console.log('mask off');
      Ext.getCmp('opdPatientDataEntry').setMasked(false)  
    }
    
    console.log('mask on');
    Ext.getCmp('opdPatientDataEntry').setMasked({
      xtype: 'loadmask',
      message: 'Saving...',
      modal: true
    });

    setTimeout (mask, 4000 );

  //   console.log('saveLoadMask');

  //   var p = new Ext.ProgressBar({
  //      renderTo: 'opdPatientDataEntry'
  //   });

  //   //Wait for 5 seconds, then update the status el (progress bar will auto-reset)
  //   var p = Ext.create('Ext.ProgressBar', {
  //      renderTo: Ext.getBody(),
  //      width: 300
  //   });

  //   //Wait for 5 seconds, then update the status el (progress bar will auto-reset)
  //   p.wait({
  //      interval: 500, //bar will move fast!
  //      duration: 30000,
  //      increment: 15,
  //      text: 'Saving...',
  //      scope: this,
  //      fn: function(){
  //         p.updateText('Done!');
  //      }
  //   });
  }
});

g_diagnosis_text = "";
g_diagnosis_list= "";

var k2s = Ext.create('KineticToSencha', {
  listeners: {
    clickAddDiagnosis: function() { // This function will be called when the 'quit' event is fired
      // By default, "this" will be the object that fired the event.
      console.log("k2s: clickAddDiagnosis");
      // Ext.getCmp('plusDrugButton').fireEvent('tap'); // hack to press a real button and launch its dialog
      console.log("k2s: NOTE ADDING DRUGS FOR NOW");
      // Print store. I'll have to pull info from this to print in Canvas
      // TODO: let's start with just the drug's name..
      var displayText = "";

      var store = Ext.getStore('drugpanel');
      var data = store.getData();
      var itemCount = data.getCount();
      if(itemCount > 0) {
        displayText += "Medications: \n";
      }

      for(var i = 0; i < itemCount; i++) {
        var itemData = data.getAt(i).getData();
        console.log(itemData.drugname || "");
        
        if (! itemData.drugname) { continue; }

        displayText += ('* ' + itemData.drugname);
        var duration = itemData.duration;
        if(duration) {
          displayText += (' - ' + duration);
        }

        var strength = itemData.strength;
        if(strength) {displayText += (' - ' +strength);}
        
        var quantity = itemData.duration;
        if(quantity) {displayText += (' - ' +quantity);}

        var frequency = itemData.frequency;
        if(frequency) {displayText += (' - ' +frequency);}
        
        var instruction = itemData.instruction;
        if(instruction) {displayText += (' - ' +instruction);}

        displayText += '\n';

        // return itemData.drugname || "";
      }
      console.log('display...', displayText);

      // TODO: Trigger refresh of Kinetic UI ... drug list should be updated
      g_diagnosis_text = displayText;
      store.clearData(); // Prevents repeating.. now just need to create multiple prescription text boxes
      Ext.getCmp('drugForm').setHidden(false);
      Ext.getCmp('drugaddform').reset();
      Ext.getCmp('treatment-panel').setActiveItem(TREATMENT.ADD);
    },
    clickOnDiagnosis: function() { // This function will be called when the 'quit' event is fired
      // By default, "this" will be the object that fired the event.
      console.log("k2s: clickOnDiagnosis");
      // Ext.getCmp('plusDrugButton').fireEvent('tap'); // hack to press a real button and launch its dialog
      console.log("k2s: NOTE ADDING DIAGNOSES FOR NOW");
      // Print store. I'll have to pull info from this to print in Canvas
      // TODO: let's start with just the drug's name..
      var displayText = "";

      var store = Ext.getStore('diagnosedDisease');
      var data = store.getData();
      var itemCount = data.getCount();
      if(itemCount > 0) {
        displayText += "Diagnoses: \n";
      }

      for(var i = 0; i < itemCount; i++) {
        var itemData = data.getAt(i).getData();
        console.log(itemData);
        console.log(itemData.complain || "");
        displayText += ('* ' + itemData.complain + '\n');

        // return itemData.drugname || "";
      }
      console.log('display...', displayText);

      // TODO: Trigger refresh of Kinetic UI ... drug list should be updated
      g_diagnosis_list = displayText;
      store.clearData(); // Prevents repeating.. now just need to create multiple prescription text boxes
      Ext.getCmp('diagnosis-panel').setHidden(false);
//      Ext.getCmp('drugaddform').reset();
//      Ext.getCmp('treatment-panel').setActiveItem(TREATMENT.ADD);
    }    
  }
});

///////////////////////////////////////////////////////////
// Kinetic JS, drawing Canvas
///////////////////////////////////////////////////////////
imageCount = 0;

var DRAWABLE_X_MIN = 0;
var DRAWABLE_X_MAX = 700; // 708 - strict border
var DIFF = 144; // moving whole thing up a bit ... 1024 - 880 = 144
var DRAWABLE_Y_MIN = 240 - DIFF; // 230 - strict border 
var DRAWABLE_Y_MAX = 1024;
var DEFAULT_MODE = "draw"; // undefined
var STAGE_X = 768; //768
var STAGE_Y = 1024; //1024
var HISTORY_BASE_X = DRAWABLE_X_MAX;
var HISTORY_BASE_Y = DRAWABLE_Y_MIN + 196;
var HISTORY_ITEM_DIM = 64;

var CONTROL_BASE_X = DRAWABLE_X_MAX + 8;
var CONTROL_BASE_Y = DRAWABLE_Y_MIN - 6;
var CONTROL_ITEM_SPACING = 3;
var CONTROL_ITEM_DIM = 52;
var HIGH_Y_OFFSET = 5;  // a little extra space

function isInDrawableArea(myX, myY) {
  up = {
    x: myX,
    y: myY
  };

  if((DRAWABLE_X_MIN <= up.x && up.x <= DRAWABLE_X_MAX) && (DRAWABLE_Y_MIN <= up.y && up.y <= DRAWABLE_Y_MAX)) {
    return true;
  } else {
    // console.log("not in drawable area: ", up.x, up.y );  
    return false;
  }
}


var setupCanvas = function() {

    var lowY = DRAWABLE_Y_MIN;
    var highY = DRAWABLE_Y_MIN;

    var newLine;
    var newLinePoints = [];
    var prevPos;
    var mode = DEFAULT_MODE;

    var historyYOffset = HISTORY_BASE_Y;

    layer = new Kinetic.Layer();
    loadedImageLayer = new Kinetic.Layer(); // For re-loaded thumbs
    linesLayer = new Kinetic.Layer();
    textLayer = new Kinetic.Layer();
    controlsLayer = new Kinetic.Layer();

    // Setup stage, upon which all layers are built.
    stage = new Kinetic.Stage({
      container: "container",
      width: STAGE_X,
      height: STAGE_Y
    });
    GloStage = stage;

    // Layers
    stage.add(layer);
    stage.add(linesLayer);
    stage.add(textLayer); // in front of "draw" layer, i.e. cant draw on a diagnosis. for now.
    stage.add(loadedImageLayer);
    stage.add(controlsLayer);

    moving = false;

    ////////////////////////
    // Event Listeners 
    ////////////////////////
    stage.on("mousedown touchstart", function() {
      dragStart();
    });
    stage.on('mousemove touchmove', function() {
      dragMove();
    });
    stage.on("mouseup", function() {
      dragComplete();
    });
    stage.on("touchend", function() {
      dragComplete();
    });

    ////////////////////////
    // Event Handlers
    ////////////////////////
    // First touch or click starts a drag event


    function dragStart() {
      // console.log('dragStart');
      var up = stage.getUserPosition();
      if(!up || !isInDrawableArea(up.x, up.y) || mode !== 'draw') {
        return;
      }

      if(moving) {
        moving = false;
        layer.draw();
      } else {
        newLinePoints = [];
        prevPos = stage.getUserPosition(); // Mouse or touch
        newLinePoints.push(prevPos);
        newLine = new Kinetic.Line({
          points: newLinePoints,
          stroke: "red",
        });
        linesLayer.add(newLine);

        moving = true;
      }
    }

    // While user holding down the mouse clicker or touch, continue dragging


    function dragMove() {
      var up = stage.getUserPosition();
      // console.log(up.x, up.y);
      if(!up || !isInDrawableArea(up.x, up.y)) {
        return;
      }

      // console.log('dragMove');
      if(mode !== 'draw') {
        return;
      }

      if(moving) {
        var mousePos = stage.getUserPosition(); // Mouse or touch
        var x = mousePos.x;
        var y = mousePos.y;
        newLinePoints.push(mousePos);
        updateBounds(mousePos);
        prevPos = mousePos;

        moving = true;
        linesLayer.drawScene();
      }
    }

    // On release of mouse or touch, done dragging


    function dragComplete() {
      console.log('drag complete');

      var up = stage.getUserPosition();
      if(!up || !isInDrawableArea(up.x, up.y)) {
        return;
      }

      if(mode !== 'draw') {
        return;
      }

      moving = false;
    }

    // Keep track of the current low and high bounds (y-axis) for where a user
    // has already added content onto the canvas. The idea is that we want to add
    // structured data (diagnoses, prescriptions, ...) into blank areas on the 
    // canvas where the user hasn't yet written.


    function updateBounds(mousePos) {
      var y = mousePos.y;
      if(y < lowY || lowY == undefined) {
        lowY = y;
      }
      if(y > highY || highY == undefined) {
        highY = y + HIGH_Y_OFFSET;
        console.log("hi = " + y)
      }
    }

    // SAVING 
    // Save - event handler


    function onSaveCanvas() {
      // Callback, since the stage toDataURL() method is asynchronous, 
      k2s.saveLoadMask();
      stage.toDataURL({
        callback: function(dataUrl) {
          addHistoryItem('', 'yellow', dataUrl)
        }
      });
    }

    // Save - helper, creates history bar items one-by-one


    function addHistoryItem(name, color, dataUrl) {
      // if No data URL, then it's the "special" case for "today"
      if(!dataUrl) {
        var box = new Kinetic.Rect({
          x: DRAWABLE_X_MAX,
          y: historyYOffset,
          width: HISTORY_ITEM_DIM,
          height: HISTORY_ITEM_DIM,
          fill: color,
          stroke: "black",
          strokeWidth: 4,
          draggable: false,
        });
        updateHistoryBar(box, '');

        // Add text that says "Today"
        var text = new Kinetic.Text({
          x: DRAWABLE_X_MAX + 8,
          y: historyYOffset - (HISTORY_ITEM_DIM + (HISTORY_ITEM_DIM / 2)) + HISTORY_ITEM_DIM / 3,
          fontSize: HISTORY_ITEM_DIM / 3,
          fontFamily: "ComicSans",
          textFill: "white",
          text: name
        });
        text.on('click touchstart', function() {
          // Reset to current visit
          loadImageFromPriorVisit('');
        });

        controlsLayer.add(text);
        controlsLayer.draw();

        return;
      } else {
        // TODO: This code is slow. Generating fns in-line is inefficient? DataUrl is slow?
        // If there is a dataUrl, then use that image to create thumb, linking to previous visit
        var imageObj = new Image();
        imageObj.onload = function() {
          var box = createHistoryLink(imageObj);
          updateHistoryBar(box, dataUrl);
        }
        imageObj.src = dataUrl;

        // Generates an image from the dataUrl


        function createHistoryLink(img) {
          var box = new Kinetic.Image({
            x: DRAWABLE_X_MAX,
            y: historyYOffset,
            width: HISTORY_ITEM_DIM,
            height: HISTORY_ITEM_DIM,
            stroke: "black",
            strokeWidth: 4,
            image: img
          });
          return box;
        }

        // Takes image from the dataUrl


        function updateHistoryBar(box, dataUrl) {
          controlsLayer.add(box);
          controlsLayer.draw();
          box.on('click touchstart', function() {
            // Reset to current visit
            loadImageFromPriorVisit(dataUrl);
          });
          historyYOffset += HISTORY_ITEM_DIM + (HISTORY_ITEM_DIM / 2);
        }
      }
    }

    // Load - restore image from a previous visit
    //
    // Note that this canvas is "in front", so the draw line or text actions can still happen
    // but they update a layer behind the 'loadedImageLayer'. When we go back, we reset 
    // the content of the linesLayer and textLayer, so the user doesn't realize that they were 
    // writing on layers in the background.


    function loadImageFromPriorVisit(dataUrl) {
      console.log('loadImageFromPriorVisit');

      // Same idea as function addHistoryItem() ... 
      // if No data URL, then it's the "special" case for "today"
      if(!dataUrl) {
        console.log('no data url');
        // Reset to draw mode
        loadedImageLayer.hide();

        // 
        // TODO: For now, reset the drawing layers.. However, there may be times when we want 
        //  to persist ('today in progress') and flip back-and-forth between today and history
        linesLayer.removeChildren();
        textLayer.removeChildren();

        // Also reset highY, so that text will appear in correct place relative to doctor handwriting
        highY = DRAWABLE_Y_MIN;

        stage.draw();
        return;
      } else {
        var imageObj = new Image();
        imageObj.onload = function() {
          console.log("image loaded");

          var priorVisitImage = new Kinetic.Image({
            x: 0,
            y: 0,
            image: imageObj,
            width: stage.getWidth(),
            height: stage.getHeight()
          });

          loadedImageLayer.add(priorVisitImage);
          loadedImageLayer.draw();
        }
        imageObj.src = dataUrl;

        loadedImageLayer.show();
      }
    }

    ////////////////////////////////////////////////
    // Initialize
    //  - Draw background
    //  - Add Controls... Pencil, eraser, save
    ////////////////////////////////////////////////
    // Background - blank white canvas
    background = new Kinetic.Rect({
      x: 0,
      y: 0,
      width: stage.getWidth(),
      height: stage.getHeight(),
      fill: "white"
    });
    layer.add(background);

    // Background - image of OPD-lite: paper, inactive (currently) buttons, etc
    var imageObj = new Image();
    imageObj.onload = function() {
      console.log("image loaded");
      console.log(stage.getWidth(), stage.getHeight());
      var backgroundImage = new Kinetic.Image({
        x: 0,
        y: 0,
        image: imageObj,
        width: stage.getWidth(),
        height: 880
      });
      layer.add(backgroundImage);
      layer.draw();
    }
    var file = "resources/images/background-768x880.png";
    imageObj.src = file;

    // History - Add "Today" to the history list
    addHistoryItem('new', 'green', '');

    var controlItems = [{
      handler: function() {
        console.log('mode = draw');
        mode = "draw";
      },
      image: 'resources/images/pencil.png'
    }, {
      handler: function() {
        console.log('disabled, for now, since eraser isnt working');
        // mode = "erase";
      },
      image: 'resources/images/eraser.png'
    },
    // {
    //   handler: function() { console.log('keyboard not implemented');},
    //   image: 'resources/images/keyboard.png'
    // },
    {
      handler: function() {
        console.log('tapped save button');
        onSaveCanvas();
      },
      image: 'resources/images/save.png'
    }];

    function createControlItem(item, offset) {
      console.log(item)
      var pencilImageObj = new Image();
      pencilImageObj.onload = function() {
        var box = new Kinetic.Image({
          x: CONTROL_BASE_X,
          y: CONTROL_BASE_Y + offset * (CONTROL_ITEM_DIM + CONTROL_ITEM_SPACING),
          width: CONTROL_ITEM_DIM,
          height: CONTROL_ITEM_DIM,
          stroke: "black",
          strokeWidth: 1,
          image: pencilImageObj
        });
        box.on('click touchstart', item.handler);
        controlsLayer.add(box);
        controlsLayer.draw();
      }
      pencilImageObj.src = item.image;
    }

    createControlItem(controlItems[0], 0);
    createControlItem(controlItems[1], 1);
    createControlItem(controlItems[2], 2);

    // // Overlaps with "new" history item. just to help make it easier to understand
    // var newImgObj = new Image();
    // newImgObj.onload = function() {
    //   var box = new Kinetic.Image({
    //     x: CONTROL_BASE_X,
    //     y: CONTROL_BASE_Y + CONTROL_ITEM_DIM*3 + CONTROL_ITEM_SPACING*3,
    //     width: CONTROL_ITEM_DIM,
    //     height: CONTROL_ITEM_DIM,
    //     stroke: "black",
    //     strokeWidth: 1,
    //     image: newImgObj
    //   });
    //   box.on('click touchstart', function() {
    //     onSaveCanvas();
    //   });
    //   controlsLayer.add(box);
    //   controlsLayer.draw();
    // }
    // newImgObj.src = 'resources/images/new.png';
    var plusDiagnosisImgObj = new Image();
    plusDiagnosisImgObj.onload = function() {
      var box = new Kinetic.Image({
        x: 200,
        y: DRAWABLE_Y_MIN - 40,
        width: 128,
        height: 30,
        stroke: "black",
        strokeWidth: 1,
        image: plusDiagnosisImgObj
      });
      box.on('click touchstart', function() {
        console.log("Bringing diagnoses modal window.")
        // TODO: Rewrire to pull up diagnosis window.
        //  NOTE... there's some naming confusion because i originally wired up the diagnosis
        //  button to open the medications/prescriptions window
         onClickDiagnosis();
      });
      controlsLayer.add(box);
      controlsLayer.draw();
    }
    plusDiagnosisImgObj.src = 'resources/images/plus_diagnosis.png';

    var plusMedicationImgObj = new Image();
    plusMedicationImgObj.onload = function() {
      var box = new Kinetic.Image({
        x: 350,
        y: DRAWABLE_Y_MIN - 40,
        width: 150,
        height: 30,
        stroke: "black",
        strokeWidth: 1,
        image: plusMedicationImgObj
      });
      box.on('click touchstart', function() {
        onAddDiagnosis();
      });
      controlsLayer.add(box);
      controlsLayer.draw();
    }
    plusMedicationImgObj.src = 'resources/images/plus_medication.png';

    function onClickDiagnosis() {
        console.log("add diagnosis");
        k2s.clickDiagnosis();
        drawDiagnosis(g_diagnosis_list);
    }

    function onAddDiagnosis() {
      // Get user input
      console.log("add diagnosis")
      // var input = window.prompt("What's the diagnosis?","Tuberculosis");
      // Trigger launch of modal dialog in Sencha
      k2s.addDiagnosis();

      // inserts a dianosis wherever there's untouched space on canvas
      // drawTextAtLowPoint(input);
      drawDiagnosis(g_diagnosis_text);
    }

    function drawDiagnosis(text) {
      if(text) {
        drawTextAtLowPoint(text);
      }
    }

    function drawTextAtLowPoint(text) {
      console.log("drawTextAtLowPoint");

      // add the shapes to the layer
      // simpleText.setAttrs({y: highY});
      // console.log(simpleText);
      // console.log(simpleText.y);
      // textLayer.add(simpleText);
      if (text.indexOf('Medications')>=0) {
        bgFill = '#44f';
      } else if (text.indexOf('Diagnoses')>=0) {
        bgFill = '#f44';
      } else {
        bgFill = '#eee';
      }
      var complexText = new Kinetic.Text({
        x: 20,
        // y: 60,
        stroke: '#555',
        strokeWidth: 3,
        fill: bgFill,
        // text: 'DIAGNOSIS: Tuberculosis',
        // text: 'Medication: \n* Acetominophan - 100mg - 2x Daily \n* Acetominopan - 100mg - 2x Daily \n* Acetominopan - 100mg - 2x Daily \n',
        text: '',
        fontSize: 14,
        fontFamily: 'Calibri',
        textFill: '#000',
        // width: 380,
        padding: 10,
        // align: 'center',
        align: 'left',
        fontStyle: 'italic',
        shadow: {
            color: 'black',
            blur: 1,
            offset: [10, 10],
            opacity: 0.2
        },
        cornerRadius: 10
      });

      complexText.setAttrs({
        y: highY,
        text: text,
        fill: bgFill
      });
      console.log(complexText);
      textLayer.add(complexText);
      stage.draw();
      highY += (complexText.textHeight*complexText.textArr.length+1)+30;
      
    }
  };

///////////////////////////////////////////////////////////
// Sencha code
//  - well, it's a glorified canvas, wrapped in Sencha
///////////////////////////////////////////////////////////
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
 */
//the view after clicking one of the patient in the patient list
Ext.define('RaxaEmr.Outpatient.view.patient.draw', {
  extend: 'Ext.Container',
  xtype: 'draw-panel',
  id: 'drawPanel',
  // requires: ['RaxaEmr.Outpatient.view.patient.Grid', 'RaxaEmr.Outpatient.view.patient.medicationhistory', 'RaxaEmr.Outpatient.view.patient.refertodoc', 'RaxaEmr.Outpatient.view.patient.work', 'RaxaEmr.Outpatient.view.patient.labresulthistory'],
  config: {
    layout: 'hbox',
    // scroll: true,
    items: [{
      xtype: 'container',
      id: 'opdPatientDataEntry',
      width: STAGE_X,
      // height:760,
      height: STAGE_Y,
      layout: 'vbox',
      items: [{
        scroll: false,
        html: '<div id="container" ></div>'
        // }, {
        //     xtype: 'drug-grid',
        //     id: 'orderedDrugGrid',
        //     height: 250,
        //     border: 10,
      }],
      listeners: {
        painted: function() {
          console.log("painted");
          setupCanvas();
        }
      },
      // }, {
      //     // Buttons to navigate while using OPD 
      //     xtype: 'container',
      //     id: 'opdPatientDataEntryControls',
      //     width: 118,
      //     items: [{
      //         xtype: 'button',
      //         text: '+ Drug',
      //         id: 'plusDrugButton',
      //         handler: function () {
      //             Ext.getCmp('drugForm').setHidden(false);
      //             Ext.getCmp('drugaddform').reset();
      //             Ext.getCmp('treatment-panel').setActiveItem(TREATMENT.ADD); // to add more than one treatment
      //         },
      //     }],
    }]
    // }],
  },

  // updateRecord: function (newRecord) {
  //     if (newRecord) {
  //         this.down('#content').setData(newRecord.data);
  //     }
  // }
});

// }());

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
 */
 
 //the chief complain view
 
Ext.define('RaxaEmr.Outpatient.view.patient.examinationlist', {
    extend: 'Ext.dataview.List',
    xtype: 'Examination-List',
    config: {
        cls: 'x-exam',
        id: 'examList',
        store: 'cheifcomplain',
        itemTpl: ['<div id="{id}">', '<strong>{complain}{duration}</strong>', '</div>'],
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'spacer'
            }, {
                xtype: 'button',
                ui: 'plain',
                iconCls: 'locate',
                iconMask: true,
                hidden: false,
                id: 'addDuration'
            }, {
                xtype: 'button',
                ui: 'plain',
                iconCls: 'trash',
                iconMask: true,
                hidden: false,
                id: 'deleteComlain'
            }]
        }]
    },
});
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
 */
 
 //view of sign list in the examination tab
 
Ext.define('RaxaEmr.Outpatient.view.patient.signlist', {
    extend: 'Ext.dataview.List',
    xtype: 'Sign-List',
    config: {
        cls: 'x-exam',
        id: 'signList',
        hidden: true,
        store: 'sign',
        itemTpl: ['<div id="{id}">', '<strong>{sign}{duration}</strong>', '</div>']
    },
});
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
 */

 //final lsit of the treatment tab
 
Ext.define('RaxaEmr.Outpatient.view.patient.treatmentsummery', {
    extend: 'Ext.dataview.List',
    xtype: 'Treatment-Summery',
	id: 'drugList',
    config: {
        store: 'drugpanel',
        itemTpl: ['<div>{drugname} {strength} mg</br>{frequency} {instruction}</br>Continue for {duration} days</div>']
    }

});
/* Store to load the list of drugs on the openmrs server */
Ext.define('Screener.store.druglist', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Screener.model.druglist',
        proxy: {
            type: 'rest',
            url: HOST + '/ws/rest/v1/drug?v=default',
            headers: Util.getBasicAuthHeaders(),
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        },
        autoLoad: true
    }
})
/* model for the drug list in pharmacy form and their values */
Ext.define('Screener.model.druglist', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'value',
            type: 'string',
            mapping: 'uuid'
        }, {
            name: 'text',
            type: 'string',
            mapping: 'name'
        }]
    }
});
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
 */
 
Ext.define('RaxaEmr.Outpatient.view.patient.druglist', {
    extend: 'Ext.dataview.List',
    xtype: 'Drug-List',
    config: {
        cls: 'x-exam',
        id: 'drugList',
        store: 'druglist',
        itemTpl: ['<div id="{id}">', '<strong>{drug}</strong>', '</div>']
    },
});

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
 * This view contains the form to add details about a drug order
 *
 */
Ext.define('RaxaEmr.Outpatient.view.patient.drugform', {
    extend: 'Ext.Container',
    xtype: 'drug-panel',
    id: 'drugForm',
    config: {
        centered: true,
        modal: true,
        hidden: true,
        floating: true,
        hideOnMaskTap: true,
        title: 'Treatment',
        items: [{
            xtype: 'container',
            width: 500,
            layout: {
                type: 'hbox'
            },
            items: [{
                xtype: 'container',
                flex: 1,
                items: [{
                    xtype: 'container',
                    style: 'border:solid #DADADA;',
                    height: 500,
                    width: 500,
                    layout: {
                        type: 'fit'
                    },
                    items: [{
                        xtype: 'formpanel',
                        flex: 2,
                        id: 'drugaddform',
                        scrollable: 'false',
                        items: [{
                            xtype: 'fieldset',
                            items: [{
                                xtype: 'searchfield',
                                id: 'drugfilterbysearchfield',
                                label: 'Drug Name'
                            }, {
                                xtype: 'selectfield',
                                label: 'Strength',
                                id: 'drug-strength',
                                valueField: 'value',
                                displayField: 'title',
                                store: {
                                    data: [{
                                        value: '',
                                        title: '',
                                    }, {
                                        value: '100',
                                        title: '100mg'
                                    }, {
                                        value: '200',
                                        title: '200mg'
                                    }, {
                                        value: '500',
                                        title: '500mg'
                                    }]
                                }
                            }, {
                                xtype: 'fieldset',
                                baseCls: 'x-form-fieldset-mod',
                                margin: '0 0 0 0',
                                layout: {
                                    type: 'hbox'
                                },
                                items: [{
                                    xtype: 'selectfield',
                                    label: 'Frequency',
                                    border: 0,
                                    labelWidth: '46.1538%',
                                    flex: 13,
                                    id: 'drug-frequency',
                                    valueField: 'value',
                                    displayField: 'title',
                                    store: {
                                        data: [{
                                            value: '',
                                            title: '',
                                        }, {
                                            value: 'Once Daily',
                                            title: 'Once Daily'
                                        }, {
                                            value: 'Once Daily',
                                            title: 'Twice Daily'
                                        }, {
                                            value: 'Once Daily',
                                            title: 'Thrice Daily'
                                        }]
                                    }
                                }, {
                                    xtype: 'selectfield',
                                    border: 0,
                                    flex: 7,
                                    id: 'drug-instruction',
                                    valueField: 'value',
                                    displayField: 'title',
                                    store: {
                                        data: [{
                                            value: '',
                                            title: '',
                                        }, {
                                            value: 'Empty Stomach',
                                            title: 'Empty Stomach',
                                        }, {
                                            value: 'Before Meals',
                                            title: 'Before Meals',
                                        }, {
                                            value: 'With Meals',
                                            title: 'With Meals',
                                        }, {
                                            value: 'After Meals',
                                            title: 'After Meals',
                                        }]
                                    }
                                }]
                            }, {
                                xtype: 'selectfield',
                                label: 'Route of Administration',
                                id: 'drug-routeofadministration',
                                valueField: 'value',
                                displayField: 'title',
                                store: {
                                    data: [{
                                        value: 'Oral',
                                        title: 'Oral',
                                    }, {
                                        value: 'Injection',
                                        title: 'Injection'
                                    }]
                                }
                            }, {
                                xtype: 'textfield',
                                id: 'drug-duration',
                                label: 'Duration (days)',
                            }]
                        }, {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [{
                                xtype: 'spacer',
                                width: '8%'
                            }, {
                                xtype: 'button',
                                ui: 'confirm',
                                text: 'Done',
                                id: 'addDrugInList',
                                flex: 1,
                                width: '40%',
                            }, {
                                xtype: 'spacer',
                                width: '4%'
                            }, {
                                xtype: 'button',
                                ui: 'confirm',
                                text: 'Add More Drugs',
                                id: 'addMoreDrug',
                                flex: 2,
                                width: '40%',
                            }, {
                                xtype: 'spacer',
                                width: '8%'
                            }]
                        }]
                    }]
                }]
            }]
        }]
    }
});

Ext.define('RaxaEmr.Outpatient.store.PatientsList', {
    requires: ['RaxaEmr.Outpatient.model.Patients'],
    extend: 'Ext.data.Store',
    config: {
        model: 'RaxaEmr.Outpatient.model.Patients',
        proxy: {
            type: 'ajax',
            // this is a currently a placeholder. It will call all patients name 'john'
            // TODO: After backend work is done use patient list here
			// link to ticket: https://raxaemr.atlassian.net/browse/RAXAJSS-156
            url: HOST + '/ws/rest/v1/raxacore/patientlist/<uuid>?v=full',
            headers: Util.getBasicAuthHeaders(),
            reader: {
                type: 'json',
                rootProperty: 'patients'
            }
        }
    }
});

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
 */
 
 //view of lab history panel
 
Ext.define('RaxaEmr.Outpatient.view.patient.labresulthistorypanel', {
    extend: 'Ext.Container',
    xtype: 'labresulthistorypanel',
    requires: ['RaxaEmr.Outpatient.view.patient.labresulthistory'],
    config: {
        title: 'Lab Results History',
        cls: 'x-show-contact',
        layout: 'vbox',
        items: [{
            id: 'labcontent',
            tpl: ['<div class="top">', '<div style="float:left;width:50%;">', '<div class="headshot" style="float:left;background-image:url({image});">', '</div>', '<div class="name" style="float:left;width:80%;">', '{display}', '</br>', '<span>From : New Delhi, India</span>', '</br>', '</div>', '</div>', '<div style="float:left;width:50%;">', '<div class="name_small" style="float:left;width:50%;">', '<span> Age : {age} </span>', '<span>ID : 16736127</span>', '</br>', '</div>', '<div class="name_right" style="float:left;width:50%;">', '<h3>Dr.Arpana Jain</h3>', '<span></span>', '</div>', '</div>', '</div>'].join('')
        }, {
            xtype: 'Lab-Result-History',
            flex: 1
        }],
        record: null
    },

    updateRecord: function (newRecord) {
        if (newRecord) {
            this.down('#labcontent').setData(newRecord.data);
        }
    }
});
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
 */

Ext.define('RaxaEmr.Outpatient.view.patient.diagnosis', {
    extend: 'Ext.Container',
    xtype: 'diagnosis-panel',
    requires: ['RaxaEmr.Outpatient.view.patient.diagnosedlist','RaxaEmr.Outpatient.view.patient.diagnosislist'],
    id: 'diagnosis-panel',
    config: {
        layout: {
            type: 'vbox'
        },
        width: 500,
        height: 500,
        centered: true,
        modal: true,
        hidden: true,
        floating: true,
        hideOnMaskTap: true,
        title: 'Diagnosis',
        items: [
{
            xtype: 'container',
            width: 500,
            layout: {
                type: 'hbox'
            },
            items: [{
                    xtype: 'container',
                flex: 1,
                layout: {
                    type: 'vbox'
                },
                items: [{
                    xtype: 'formpanel',
                    border: '0 0 1 0',
                    padding: '0 0 0 0',
                    style: 'border:solid #DADADA;',
                    scrollable: false,
                    items: [{
                        xtype: 'selectfield',
                        label: 'Search In',
                        hidden: true,
                        id: 'diagnosisFilter',
                        border: '0 0 1 0',
                        style: 'border:solid #DADADA;',
                        valueField: 'filterBy',
                        displayField: 'title',
                        store: {
                            data: [{
                                filterBy: 'all',
                                title: 'All',
                            }]
                        }
                    }, {
                        xtype: 'searchfield',
                        id: 'diagnosisfilterbysearchfield',
                    }]
                }, {
                    xtype: 'Diagnosis-List',
                    flex: 1,
                }]
            }, {
                xtype: 'container',
                flex: 1,
                items: [{
                    xtype: 'container',
                    margin: '0 0 20 0',
                    border: '0 0 0 3',
                    style: 'border:solid #DADADA;',
                    height: 476,
                    layout: {
                        type: 'fit'
                    },
                    items: [{
                        xtype: 'Diagnosed-List',
                    }]
                }]
            }]
        }
//        , {// side buttons for refer to doc nad to add another diagnosis
//            xtype: 'container',
//            width: 60,
//            items: [{
//                xtype: 'button',
//                height: 40,
//                id: 'reftodocbutton',
//                margin: '20 20 0 0',
//                width: 40,
//                icon: '../outpatient/resources/images/doclist.png',
//                padding: '0 10 10 0'
//            }, {
//                xtype: 'button',
//                height: 40,
//		id : 'addDiagnosis',
//                margin: '10 20 0 0',
//                width: 40,
//                icon: '../outpatient/resources/images/add.png',
//                padding: '0 10 10 0'
//            }]
//        }
    ]
    }
});

Ext.define('Ext.ux.touch.grid.View', {
    extend   : 'Ext.dataview.DataView',
    xtype    : 'touchgridpanel',

    requires : ['Ext.ux.touch.grid.feature.Feature'],
    mixins   : ['Ext.ux.touch.grid.feature.Feature'],

    config : {
        columns : [],
        cls     : 'touchgridpanel',
        header  : {
            xtype  : 'toolbar',
            docked : 'top',
            cls    : 'x-grid-header'
        },
        itemTpl : false
    },

    constructor: function(config) {
        var me       = this,
            features = me.features = config.features || me.config.features || me.features;

        if (typeof me.initFeatures === 'function' && typeof config.features === 'object') {
            me.initFeatures(features, 'constructor');
        }

        me.callParent([config]);

        me.setWidth(me._buildWidth());
    },

    initialize: function() {
        var me = this;

        me.callParent();

        if (typeof me.initFeatures === 'function' && typeof me.features === 'object') {
            me.initFeatures(me.features, 'initialize');
        }
    },

    applyColumns : function(columns) {
        var c          = 0,
            cLen       = columns.length,
            newColumns = [];

        for (; c < cLen; c++) {
            newColumns.push(
                Ext.merge({}, columns[c])
            );
        }

        return newColumns;
    },

    refreshScroller : function() {
        var scroller = this.getScrollable().getScroller();

        scroller.refresh();
    },

    applyHeader : function(config) {
        Ext.apply(config, {
            docked : 'top',
            cls    : 'x-grid-header'
        });

        return Ext.factory(config, Ext.Toolbar);
    },

    updateHeader : function(header) {
        this.insert(0, header);
    },

    _buildWidth: function() {
        var me       = this,
            columns  = me.getColumns(),
            c        = 0,
            cNum     = columns.length,
            retWidth = 0,
            stop     = false,
            defaults = this.getDefaults() || {},
            column, width;

        for (; c < cNum; c++) {
            column = columns[c];
            width  = column.width || defaults.column_width;

            if (!Ext.isNumber(width)) {
                stop = true;
                break;
            }

            retWidth += width;
        }

        return stop ? undefined : retWidth;
    },

    _defaultRenderer: function(value) {
        return value;
    },

    applyItemTpl : function(tpl) {
        if (!tpl) {
            tpl = this._buildTpl(this.getColumns(), false);
        }

        if (!(tpl instanceof Ext.XTemplate)) {
            tpl = Ext.create('Ext.XTemplate', tpl.tpl, tpl.renderers);
        }

        return tpl;
    },

    updateItemTpl : function() {
        var header = this.getHeader(),
            html   = this._buildTpl(this.getColumns(), true);

        header.setHtml(html.tpl);
    },

    _buildTpl: function(columns, header) {
        var tpl        = [],
            c          = 0,
            cNum       = columns.length,
            basePrefix = Ext.baseCSSPrefix,
            renderers  = {},
            defaults   = this.getDefaults() || {},
            column, hidden, css, styles, attributes, width, renderer, rendererName, innerText;

        for (; c < cNum; c++) {
            column = columns[c];
            hidden = column.hidden;

            if (hidden) {
                continue;
            }

            css           = [basePrefix + 'grid-cell'];
            styles        = [];
            attributes    = ['dataindex="' + column.dataIndex + '"'];
            width         = column.width || defaults.column_width;
            renderer      = column.renderer || this._defaultRenderer;
            rendererName  = column.dataIndex + '_renderer';

            if (header) {
                css.push(basePrefix + 'grid-cell-hd');
                innerText = column.header;
            } else {
                innerText = '{[this.' + rendererName + '(values.' + column.dataIndex + ', values)]}';

                if (column.style) {
                    styles.push(column.style);
                }

                if (column.cls) {
                    css.push(column.cls);
                }

                renderers[rendererName] = renderer;
            }

            if (width) {
                styles.push('width: ' + width + (Ext.isString(width) ? '' : 'px') + ';');
            }

            if (styles.length > 0) {
                attributes.push('style ="' + styles.join(' ') + '"');
            }

            tpl.push('<div class="' + css.join(' ') + '" ' + attributes.join('') + '>' + innerText + '</div>');
        }

        tpl = tpl.join('');

        return {
            tpl       : tpl,
            renderers : renderers
        };
    },

    getColumn: function(dataIndex) {
        var me       = this,
            columns  = me.getColumns(),
            c        = 0,
            cNum     = columns.length,
            column;

        for (; c < cNum; c++) {
            column = columns[c];

            if (column.dataIndex === dataIndex) {
                break;
            }
        }

        return column;
    },

    toggleColumn : function(index, hide) {
        var columns = this.getColumns(),
            column  = columns[index];

        if (!Ext.isDefined(hide)) {
            hide = !column.hidden;
        }

        column.hidden = hide;

        this.setItemTpl(null); //trigger new tpl on items and header
        this.refresh();
    },

    hideColumn : function(index) {
        this.toggleColumn(index, true);
    },

    showColumn : function(index) {
        this.toggleColumn(index, false);
    }
});
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
 */

//info about the patient when we click on a patient like weight, height etc. is shown by this grid
 
Ext.define('RaxaEmr.Outpatient.view.patient.Grid', {
    extend: 'Ext.ux.touch.grid.View',
    xtype: 'vitalsGrid',
    id: 'vitalsGrid',

    requires: ['Ext.ux.touch.grid.feature.Feature', 'Ext.field.Number', 'RaxaEmr.Outpatient.store.Grid'],

    config: {
        title: 'Grid',
        store: 'Grid',
        scrollable: 'false',
        columns: [{
        //     header: 'Height',
        //     dataIndex: 'height',
        //     width: '17%',
        //     cls: 'centered-cell',
        //     renderer: function (value, values) {
        //         if(value == undefined) {
        //             return '<span>' + "-" + '</span>';
        //         } else {
        //             return '<span>' + value + ' cm' + '</span>';
        //         }// to change the view of the data feched
        //     }
        // }, {
        //     header: 'Weight',
        //     dataIndex: 'weight',
        //     width: '17%',
        //     cls: 'centered-cell',
        //     renderer: function (value , values) {
        //         if(value == undefined)  {
        //             return '<span>' + "-" +'</span>';  
        //         } else {
        //             return '<span>' + value + ' kg' + '</span>';
        //         }// to change the view of the data feched
        //     }
        // }, 
        // {
        //     header: 'BMI',
        //     dataIndex: 'bmi',
        //     width: '17%',
        //     cls: 'centered-cell',
        //     renderer: function (value ) {
        //         if(value == undefined) {    
        //             return "-";
        //         }
        //     }
        // }, 
        // {
            header: 'BP',
            dataIndex: 'bp',
            width: '25%',
            cls: 'centered-cell',
            renderer: function (value ) {
                // TODO: Determine how to pass 2 BMI values into one grid panel
                if(value == "- / -" || value == undefined ) {
                    return "-";
                }
                else {
                    // var bmi = 68;
                    // return Ext.String.format('{0}/{1}', value);
                    return value;
                }// to change the view of the data feched
            }
        }, {
            header: 'Pulse',
            dataIndex: 'pulse',
            width: '17%',
            cls: 'centered-cell'
        }, {
            header: 'RespRate',
            dataIndex: 'resrate',
            width: '25%',
            cls: 'centered-cell'
        }, {
            header: 'Temp',
            dataIndex: 'temp',
            width: '17%',
            cls: 'centered-cell'
        }, {
            header: 'O2Sat',
            dataIndex: 'oxysat',
            width: '16%',
            cls: 'centered-cell'
        }]
    }
});

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
 */
 
 //view of medication history
 
Ext.define('RaxaEmr.Outpatient.view.patient.medicationhistory', {
    extend: 'Ext.ux.touch.grid.View',
    xtype: 'Medication-History',

    requires: ['Ext.ux.touch.grid.feature.Feature', 'Ext.field.Number', 'RaxaEmr.Outpatient.store.Grid'],

    config: {
        title: 'Medication History',
        id: 'medicationhistorygrid',
        store: 'medicationhistory',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'segmentedbutton',
                margin: '0 0 0 10',
                allowDepress: false,
                items: [{
                    xtype: 'button',
                    text: 'Sort By Drug Name',
                    id: 'medicationhistorysortbydrugname',
                    pressed: true,
                    width: 200,
                }, {
                    xtype: 'button',
                    id: 'medicationhistorysortbydrugreaction',
                    text: 'Sort By Drug Reaction',
                    width: 200,
                }]
            }, {
                xtype: 'spacer'
            }, {
                xtype: 'searchfield',
                id: 'medicationhistorysearchfield',
                placeHolder: 'Search...'
            }]
        }],
        columns: [{
            header: 'Drug Name',
            dataIndex: 'drugname',
            width: '10%',
            cls: 'centered-cell',
            renderer: function (value, values) {
                return '<span>' + value + '</span>';
            }
        }, {
            header: 'Duration',
            dataIndex: 'duration',
            width: '10%',
            cls: 'centered-cell',
            renderer: function (value, values) {
                return '<span>' + value + '</span>';
            }
        }, {
            header: 'Last Filled',
            dataIndex: 'lastfilled',
            width: '10%',
            cls: 'centered-cell',
        }, {
            header: 'Prescriber',
            dataIndex: 'prescriber',
            width: '15%',
            cls: 'centered-cell'
        }, {
            header: 'Drug Reaction',
            dataIndex: 'drugreaction',
            width: '20%',
            cls: 'centered-cell',
        }, {
            header: 'Dosage',
            dataIndex: 'dosage',
            width: '15%',
            cls: 'centered-cell',
        }, {
            header: 'Route of Administration',
            dataIndex: 'routeofadministration',
            width: '20%',
            cls: 'centered-cell',
        }]
    }
});
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
 */
 
 //view of medication history panel
 
Ext.define('RaxaEmr.Outpatient.view.patient.medicationhistorypanel', {
    extend: 'Ext.Container',
    xtype: 'Medication-History-Panel',
    requires: ['RaxaEmr.Outpatient.view.patient.medicationhistory'],
    config: {
        title: 'Medication-History',
        cls: 'x-show-contact',
        layout: 'vbox',
        items: [{
            id: 'medicationhistorycontent',
            tpl: ['<div class="top">', '<div style="float:left;width:50%;">', '<div class="headshot" style="float:left;background-image:url({image});">', '</div>', '<div class="name" style="float:left;width:80%;">', '{display}', '</br>', '<span>From : New Delhi, India</span>', '</br>', '</div>', '</div>', '<div style="float:left;width:50%;">', '<div class="name_small" style="float:left;width:50%;">', '<span> Age : {age} </span>', '<span>ID : 16736127</span>', '</br>', '</div>', '<div class="name_right" style="float:left;width:50%;">', '<h3>Dr.Arpana Jain</h3>', '<span></span>', '</div>', '</div>', '</div>'].join('')
        }, {
            xtype: 'Medication-History',
            flex: 1
        }],
        record: null
    },

    updateRecord: function (newRecord) {
        if (newRecord) {
            this.down('#medicationhistorycontent').setData(newRecord.data);
        }
    }
});
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
 */
 
 //view of refer to doc grid
 
Ext.define('RaxaEmr.Outpatient.view.patient.refertodoc', {
    extend: 'Ext.ux.touch.grid.View',
    xtype: 'Refer-To-Doc',

    requires: ['Ext.ux.touch.grid.feature.Feature', 'Ext.field.Number', 'RaxaEmr.Outpatient.store.Grid'],

    config: {
        title: 'Refer to Doctor',
        id: 'refToDocPanel',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'segmentedbutton',
                margin: '0 0 0 10',
                allowDepress: false,
                items: [{
                    xtype: 'button',
                    text: 'Sort By Drug Name',
                    id: 'reftodocsortbydocname',
                    pressed: true,
                    width: 200,
                }, {
                    xtype: 'button',
                    id: 'reftodocsortbyopdno',
                    text: 'Sort By OPD No.',
                    width: 200,
                }]
            }, {
                xtype: 'spacer'
            }, {
				xtype: 'button',
				id: 'referpatient',
				text: 'Refer',
				ui: 'confirm',
				width: 100,
			}, {
                xtype: 'searchfield',
                id: 'reftodocsearchfield',
                placeHolder: 'Search...'
            }]
        }],
        columns: [{
            header: 'Doctor Name',
            dataIndex: 'display',
            width: '50%',
            cls: 'centered-cell',
            renderer: function (value) {
                return value.split("- ")[1];
            }
        }, {
            header: 'Identifier',
            dataIndex: 'identifier',
            width: '50%',
            cls: 'centered-cell'
        }]
    }
});
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
 */
 
 //view of refer to doc panel

Ext.define('RaxaEmr.Outpatient.view.patient.refertodocpanel', {
    extend: 'Ext.Container',
    xtype: 'Refer-To-Doc-Panel',
    requires: ['RaxaEmr.Outpatient.view.patient.refertodoc'],
    config: {
        title: 'Refer to Doctor',
        cls: 'x-show-contact',
        layout: 'vbox',
        items: [{
            id: 'reftodoccontent',
            tpl: ['<div class="top">', '<div style="float:left;width:50%;">', '<div class="headshot" style="float:left;background-image:url({image});">', '</div>', '<div class="name" style="float:left;width:80%;">', '{display}', '</br>', '<span>From : New Delhi, India</span>', '</br>', '</div>', '</div>', '<div style="float:left;width:50%;">', '<div class="name_small" style="float:left;width:50%;">', '<span> Age : {age} </span>', '<span>ID : 16736127</span>', '</br>', '</div>', '<div class="name_right" style="float:left;width:50%;">', '<h3>Dr.Arpana Jain</h3>', '<span></span>', '</div>', '</div>', '</div>'].join('')
        }, {
            xtype: 'Refer-To-Doc',
            flex: 1
        }],
        record: null
    },

    updateRecord: function (newRecord) {
        if (newRecord) {
            this.down('#reftodoccontent').setData(newRecord.data);
        }
    }
});
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
 */
 
 //examination tab view
 
Ext.define('RaxaEmr.Outpatient.view.patient.examination', {
    extend: 'Ext.Container',
    xtype: 'examination-panel',
    requires: ['RaxaEmr.Outpatient.view.patient.examinationlist', 'RaxaEmr.Outpatient.view.patient.signlist'],
    id: 'examination-panel',
    config: {
        layout: {
            type: 'card'
        },
        title: 'Examination',
        activeItem: 0,
        items: [{
            xtype: 'container',
            layout: {
                type: 'hbox'
            },
            items: [{
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'vbox'
                },
                items: [{
                    xtype: 'formpanel',
                    border: '0 0 1 0',
                    padding: '0 0 0 0',
                    style: 'border:solid #DADADA;',
                    scrollable: false,
                    height: 93,
                    items: [{
                        xtype: 'selectfield',
                        label: 'Search In',
                        id: 'signFilter',
                        hidden: true,
                        border: '0 0 1 0',
                        style: 'border:solid #DADADA;',
                        valueField: 'filterBy',
                        displayField: 'title',
                        store: {
                            data: [{
                                filterBy: 'all',
                                title: 'All',
                            }]
                        }
                    }, {
                        xtype: 'searchfield',
                        id: 'signfilterbysearchfield',
                    }]
                }, {
                    xtype: 'Sign-List',
                    flex: 1,
                }]
            }, {
                xtype: 'container',
                flex: 1,
                items: [{
                    xtype: 'container',
                    margin: '0 0 20 0',
                    border: '0 0 0 3',
                    style: 'border:solid #DADADA;',
                    height: 576,
                    layout: {
                        type: 'fit'
                    },
                    items: [{
                        xtype: 'Examination-List'
                    }, {
                        xtype: 'actionsheet',
                        id: 'durationPicker',
                        hidden: true,
                        items: [{
                            xtype: 'formpanel',
                            height: 100,
                            width: '100%',
                            items: [{
                                xtype: 'numberfield',
                                label: 'Duration',
                                id: 'durationfield'
                            }]
                        }, {
                            xtype: 'toolbar',
                            docked: 'top',
                            items: [{
                                xtype: 'button',
                                text: 'Save',
                                id: 'saveDuration'
                            }, {
                                xtype: 'spacer'
                            }, {
                                xtype: 'button',
                                text: 'Cancel',
                                handler: function () {
                                    Ext.getCmp('durationPicker').setHidden(true);// to hide the duration picker field
                                }
                            }]
                        }]
                    }]
                }]
            }]
        }]
    }
});

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
 */
 
//medication history panel
 
Ext.define('RaxaEmr.Outpatient.view.patient.drugpanel', {
    extend: 'Ext.ux.touch.grid.View',
    xtype: 'Drug-Panel',
    store: 'drugpanel',
    requires: ['Ext.ux.touch.grid.feature.Feature'],

    config: {
        title: 'Medication History',
        store: 'drugpanel',
        columns: [{
            header: 'Drug Name',
            dataIndex: 'drugname',
            width: '25%',
            cls: 'centered-cell',
            renderer: function (value, values) {
                return '<span>' + value + '</span>';
            }
        }, {
            header: 'Strength',
            dataIndex: 'strength',
            width: '25%',
            cls: 'centered-cell',
            renderer: function (value, values) {
                return '<span>' + value + ' mg' + '</span>';
            }
        }, {
            header: 'Dosage',
            dataIndex: 'frequency',
            width: '25%',
            cls: 'centered-cell',
        }, {
            header: 'Instruction',
            dataIndex: 'instruction',
            width: '25%',
            cls: 'centered-cell',
        }]
    }
});
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
 */
 
Ext.define('RaxaEmr.Outpatient.view.patient.DrugGrid', {
    extend: 'Ext.ux.touch.grid.View',
    xtype: 'drug-grid',

    requires: ['Ext.ux.touch.grid.feature.Feature', 'Ext.field.Number', 'RaxaEmr.Outpatient.store.drugpanel'],

    config: {
        title: 'Drug Grid',
        store: 'drugpanel',
        scrollable: 'true',
        columns: [{
            header: 'Drug Name',
            dataIndex: 'drugname',
            width: '20%',
            cls: 'centered-cell'
        }, {
         
            header: 'Strength',
            dataIndex: 'strength',
            width: '15%',
            cls: 'centered-cell',
            renderer: function (value, values) {
                return '<span>' + value + ' mg' + '</span>';// to change the view of the data feched
            }
        }, {
            header: 'Frequency',
            dataIndex: 'frequency',
            width: '15%',
            cls: 'centered-cell'           
        }, {
            header: 'Time of Intake',
            dataIndex: 'instruction',
            width: '20%',
            cls: 'centered-cell'
            
        }, {
            header: 'Route of Administration',
            dataIndex: 'routeofadministration',
            width: '20%',
            cls: 'centered-cell'
        },{
            header: 'Duration',
            dataIndex: 'duration',
            width: '10%',
            cls: 'centered-cell',
            renderer: function (value, values) {
                return '<span>' + value + ' days' + '</span>';// to change the view of the data feched
            }            
        }]
    }
});

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
 */
//view of treatment tab
//enum for switching the panels in the treatment tab
var TREATMENT = {
    ADD: 0,
    DRUGPANEL: 1,
    
}

Ext.define('RaxaEmr.Outpatient.view.patient.treatment', {
    extend: 'Ext.Container',
    xtype: 'treatment-panel',
    requires: ['RaxaEmr.Outpatient.view.patient.drugpanel', 'RaxaEmr.Outpatient.view.patient.treatmentsummery', 'Screener.store.druglist', 'Screener.model.druglist', 'RaxaEmr.Outpatient.view.patient.druglist', 'RaxaEmr.Outpatient.view.patient.drugform', 'RaxaEmr.Outpatient.view.patient.DrugGrid'],
    id: 'treatment-panel',

    config: {
        layout: {
            type: 'card'
        },
        title: 'Treatment',
        activeItem: 0,
        items: [{
            xtype: 'drug-panel'
        }, {
            xtype: 'draw-panel'
        }, {
            xtype: 'container',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    height: 40,
                    margin: '20 20 0 0',
                    width: '150',
                    icon: '../outpatient/resources/images/add.png',
                    text: 'Add Drugs',
                    padding: '0 10 10 0',
                    handler: function () {

                        Ext.getCmp('drugForm').setHidden(false);
                        Ext.getCmp('drugaddform').reset();
                        Ext.getCmp('treatment-panel').setActiveItem(TREATMENT.ADD); // to add more than one treatment
                    }
                }, {
                    xtype: 'spacer',
                    width: '0%'
                }, {
                    xtype: 'button',
                    ui: 'confirm',
                    height: 40,
                    margin: '20 20 0 0',
                    width: '150',
                    text: 'Confirm Drug Order',
                    padding: '0 10 10 0',
                    handler: function () {
						//Loads the drug order from drugpanel store and POST encounter with order inside it
                        drugOrderInDrugPanel = Ext.getStore('drugpanel');
                        drugListStore = Ext.getStore('druglist')
                        order = [];
                        for (var i = 0; i < drugOrderInDrugPanel.data.length; i++) {
                            for (var j = 0; j < drugListStore.data.length; j++) {
                                if (drugOrderInDrugPanel.data.items[i].data.drugname == drugListStore.data.items[j].data.drug) {
                                    var druguuid = drugListStore.data.items[i].data.uuid;
                                    break;
                                }
                            }

                            concept = new Array();

                            var duration = drugOrderInDrugPanel.data.items[i].data.duration;
                            var strength = drugOrderInDrugPanel.data.items[i].data.strength;
                            var quantity = drugOrderInDrugPanel.data.items[i].data.duration;
                            var frequency = drugOrderInDrugPanel.data.items[i].data.frequency;
                            var instruction = drugOrderInDrugPanel.data.items[i].data.instruction;

                            Ext.Ajax.request({
                                url: HOST + '/ws/rest/v1/concept?q=' + drugOrderInDrugPanel.data.items[i].data.drugname,
                                method: 'GET',
                                disableCaching: false,
                                headers: Util.getBasicAuthHeaders(),
                                failure: function (response) {
                                    console.log('GET call on concept failed with response status' + response.status);
                                },
                                success: function (response) {
                                    console.log('GET call on concept was successful with response status' + response.status);

                                    var JSONResult = JSON.parse(response.responseText);

                                    var currentdate = new Date();
                                    var startdate = Util.Datetime(startdate, Util.getUTCGMTdiff())
                                    order.push({
                                        patient: Ext.getCmp('contact').selected.items[0].data.uuid,
                                        drug: druguuid,
                                        startDate: currentdate,
                                        autoExpireDate: new Date(currentdate.getFullYear(), currentdate.getMonth(), currentdate.getDate() + duration),
                                        dose: strength,
                                        quantity: duration,
                                        frequency: frequency,
                                        instructions: instruction,
                                        // type should be "drugorder" in order to post a drug order
                                        type: 'drugorder',
                                        concept: JSONResult.results[0].uuid
                                    });
                                }
                            });
                        }

                        var currentdate = new Date();
                        var time = Util.Datetime(currentdate, Util.getUTCGMTdiff());

                        // model for posting the encounter for given drug orders
                        var encounter = Ext.create('RaxaEmr.Outpatient.model.drugEncounter', {
                            patient: Ext.getCmp('contact').selected.items[0].data.uuid,

                            // this is the encounter for the prescription encounterType
                            encounterType: localStorage.outUuidencountertype,
                            encounterDatetime: time,
                            provider: localStorage.loggedInUser,
                            orders: order
                        });

                        var encounterStore = Ext.create('RaxaEmr.Outpatient.store.drugEncounter')
                        encounterStore.add(encounter)
                        // make post call for encounter
                        encounterStore.sync()

                        var i = 0;
                        var j = 0;
                        var k = 0;
                    }
                }]
            }, {
                xtype: 'drug-grid',
                id: 'orderedDrugGrid',
                height: 250,
                border: 10,
            }, ]
        }]
    }
});

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
 */
 
//bottom half view of the patient details (history , examination, diagnosis and treatment tab)
 
//enum to swich the tabs
 
var TABS = {
    HISTORY: 0,
    EXAMINATION: 1,
    DATA: 2,
    DIAGNOSIS: 3,
    TREATMENT: 4
}

Ext.define('RaxaEmr.Outpatient.view.patient.work', {
    extend: 'Ext.Container',
    xtype: 'work',
    requires: ['RaxaEmr.Outpatient.view.patient.history', 'RaxaEmr.Outpatient.view.patient.examination', 'RaxaEmr.Outpatient.view.patient.dataPanel', 'RaxaEmr.Outpatient.view.patient.treatment', 'RaxaEmr.Outpatient.view.patient.diagnosis', 'RaxaEmr.Outpatient.view.patient.draw'],
    config: {
        layout: {
            type: 'hbox'
        },
        height: 768,
        width: 1024,
        items: [{
            // xtype: 'draw-panel',
        // }, {
        //     xtype: 'examination-panel',
        // }, {
             xtype: 'diagnosis-panel',
             id: 'diagnosis-panel'
         }, {
            xtype: 'treatment-panel',
           
        },
        ]
    }
});

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
 */
//the view after clicking one of the patient in the patient list
Ext.define('RaxaEmr.Outpatient.view.patient.more', {
    extend: 'Ext.Container',
    xtype: 'patientlist-show',
    requires: ['RaxaEmr.Outpatient.view.patient.Grid', 'RaxaEmr.Outpatient.view.patient.medicationhistory', 'RaxaEmr.Outpatient.view.patient.refertodoc', 'RaxaEmr.Outpatient.view.patient.work', 'RaxaEmr.Outpatient.view.patient.labresulthistory'],
    config: {
        title: 'Outpatient Department',
        cls: 'x-show-contact',
        ui: 'round',
        id: 'more',
        layout: 'vbox',
        items: [{
            xtype: 'container',
            height: 96,
            layout: 'hbox',
            items: [{
                id: 'content',
                height: 60,
                tpl: [
                    '<div class="top">', 
                        '<div style="float:left;width:30%;">', 
                            '<span class="headshot" style="float:left;background-image:url(resources/images/headshot.png);">', 
                            '</span>', 

                        '</div>', 
                        '<div style="float:left;width:40%;">', 
                            '<span class="name" style="float:left;">', 
                                '{display}', 
                            '</span>', 
                        '</div>', 
                        '<div style="float:left;width:30%;">', 
                            '<div class="name_small" style="float:left;">', 
                                '<span>ID : --</span>', 
                                '<span>Age : {age} </span>', 
                                '<span>From : -- </span>', 
                            '</div>', 
                        '</div>', 
                    '</div>'
                    ].join(''),
                flex: 1,
                border: 1,
            }, {
                xtype: 'vitalsGrid',
                margin: 4,
                flex: 1,
                // border: 1,
                
            }]
        }, {
            xtype: 'container',
            layout: {
                type: 'card'
            },
            id: 'working-area',
            flex: 1,
            activeItem: 0,
            items: [{
                xtype: 'treatment-panel',
            },{
                xtype: 'diagnosis-panel'
            }]
        }],
        record: null
    },

    updateRecord: function (newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
        }
    }
});

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
 */

Ext.define('RaxaEmr.Outpatient.view.Viewport', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',
	id: 'mainview',
	//other view used in this view are included
    requires: ['RaxaEmr.Outpatient.view.patientlist', 'RaxaEmr.Outpatient.view.patient.more', 'RaxaEmr.Outpatient.view.patient.labresulthistorypanel', 'RaxaEmr.Outpatient.view.patient.refertodocpanel', 'RaxaEmr.Outpatient.view.patient.medicationhistorypanel', 'RaxaEmr.Outpatient.view.patient.diagnosis'],

    config: {
        autoDestroy: false,
        fullscreen: true,
		// confirmation buttons in the toolbar in the different view like medication history, refer to doc panel etc.
        navigationBar: {
            items: [{
                xtype: 'button',
                id: 'confirmmedicationhistory',
                text: 'Done',
                ui: 'confirm',
                align: 'right',
                hidden: true
            }, {
                xtype: 'button',
                id: 'confirmlabresulthistory',
                text: 'Done',
                ui: 'confirm',
                align: 'right',
                hidden: true
            }, {
                xtype: 'button',
                id: 'confirmrefertodoc',
                text: 'Done',
                ui: 'confirm',
                align: 'right',
                hidden: true
            }, ]
        },
		//the basic view of the main page is loaded
        items: [{
            xtype: 'patientlist'
        }]
    }
});

Ext.Loader.setPath({
    'Ext.ux.touch.grid': '../lib/touch/Ext.ux.touch.grid',//Path to grid code so that grid fuctionalities and view can be accessed
    // 'Screener': '/Raxa-JSS/src/screener/app'//Path to screener module so that store and models of screener can be accessed 
    'Screener': '../screener/app'//Path to screener module so that store and models of screener can be accessed 
});

Ext.application({
    name: 'RaxaEmr.Outpatient',

    requires: [
        'Ext.MessageBox'
    ],
    
    models: ['patientlist', 'Grid', 'medicationhistory', 'refertodoc', 'labresulthistory', 'drugpanel', 'cheifcomplain', 'sign','diagnosis','diagnosedDisease','druglist','Observation', 'PostList'],
    stores: ['patientlist', 'Grid', 'medicationhistory', 'refertodoc', 'labresulthistory', 'drugpanel', 'cheifcomplain', 'sign','diagnosis','diagnosedDisease','druglist', 'PostLists', 'PatientsList', 'obs'],
    views: ['Main', 'Viewport'], 
    controllers: ['patientlist'],
    
    // views: ['Main'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('RaxaEmr.Outpatient.view.Viewport'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

