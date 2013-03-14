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
    queryMode: 'remote',
    queryParam: 'q',
    forceSelection: false,
    listeners: {
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