Ext.define('RaxaEmr.Pharmacy.view.drugComboBox', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.drugComboBox',
    editable: true,
    autoSelect: false,
    store: 'allDrugs',
    displayField: 'text',
    valueField: 'uuid',
    enableKeyEvents: true,
    disableKeyFilter: true,
    queryMode: 'local',
    forceSelection: false,
    listeners: {
        focus: function (comboField) {
            this.store.clearFilter(true);
            comboField.expand();
            this.drawNewDrugButton();
        },
        keyup: function (comboField, key) {
//            if(key.getKey() === KEY.DELETE){
//                //this.filterComboBox(comboField.rawValue);
//            }
//            this.drawNewDrugButton();
        },
        keypress: function (comboField, key) {
            
            var query = (comboField.rawValue + String.fromCharCode(key.getKey())).toLowerCase();
            this.getStore().setProxy({
                type: 'rest',
                url: HOST + '/ws/rest/v1/raxacore/drug?q='+query,
                headers: Util.getBasicAuthHeaders(),
                reader: {
                    type:'json',
                    root: 'results'
                }
            });
            this.getStore().load();
            comboField.expand();
            this.drawNewDrugButton();
        },
        beforequery: function(queryEvent) {
//            queryEvent.combo.onLoad();
//            // prevent doQuery from firing and clearing out my filter.
//            return false;
        }
    },
    filterComboBox: function(query) {
            this.store.clearFilter(true);
            this.store.filterBy(function(record, id) {
                return record.data.name.toLowerCase().indexOf(query)!==-1 ||
                    record.data.shortName.toLowerCase().indexOf(query)!==-1 ||
                    record.data.brandName.toLowerCase().indexOf(query)!==-1;
            });
    },
    drawNewDrugButton: function() {
        if(!Ext.get('addNewDrug') || !Ext.get('addNewDrug').findParentNode('.x-boundlist-list-ct')){
            Ext.DomHelper.append(Ext.dom.Element.select(".x-boundlist-list-ct").first(), "<div id='addNewDrug' align='right'>New <img src='../resources/img/add.png'/></div>");
        }
        var el = Ext.get('addNewDrug');
        el.addListener('click', function() {
            Ext.getCmp('addDrug').show();
        });
    }
});