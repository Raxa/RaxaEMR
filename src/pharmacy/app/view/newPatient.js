Ext.define('RaxaEmr.Pharmacy.view.newPatient', {
    extend: 'Ext.form.Panel',
    id: 'newPatient',
    alias: 'widget.newPatient',
    listeners:{
        'show': function() {
            this.mon(Ext.getBody(), 'mousedown', this.checkCloseClick, this);
        }

    },
    checkCloseClick: function (event) {
        var cx = event.getX(), cy = event.getY(),
        box = this.getBox();
        if (cx < box.x || cx > box.x + box.width || cy < box.y || cy > box.y + box.height) {
            this.hide();
            this.mun(Ext.getBody(), 'click', this.checkCloseClick, this);
        }
    },
    height: 400,
    width: 450,
    modal: true,
    centered: true,
    title: 'New Patient',
    layout: 'vbox',
    bodyPadding: 50,
    items: [
    {
        xtype: 'textfield',
        fieldLabel: 'GivenName',
        id: 'givenName'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'FamilyName',
        id: 'familyName'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Prescription Date',
        format: 'd/m/y',
        id: 'patientArrivalDate',
        //emptyText: 'dd/mm/yy'
        value : new Date(),
        readOnly : true
            
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Age',
        id: 'age'
    },
    {
        xtype: 'radiogroup',
        id: 'sexRadioGroup',
        width: 330,
        allowBlank: false,
        fieldLabel: 'Gender',
        x: 10,
        y: 150,
        items: [{
            xtype: 'radiofield',
            boxLabel: 'Male',
            name: 'sex',
            checked: true
        }, {
            xtype: 'radiofield',
            boxLabel: 'Female',
            name: 'sex'
        },{
            xtype: 'radiofield',
            boxLabel: 'Other',
            name: 'sex'
        }]
    },
    {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'Contact Number',
                        layout: 'hbox',
                        defaultType: 'textfield',
                        labelAlign: 'left',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: [{
                            name: 'primaryContact',
                            emptyText: 'Primary Contact',
                            id: 'patientPrimaryContact',
                            allowBlank: true
                        }, {
                            name: 'secondaryContact',
                            emptyText: 'Secondary Contact',
                            id: 'patientSecondaryContact',
                            allowBlank: true
                        }]
                    },

    {
        xtype: 'panel',
        border: false,
        layout: {
            type: 'hbox',
            pack: 'end'
        },
        items:[
        {
            xtype: 'button',
            margin: '20 20 20 20',
            text: 'Cancel',
            action: 'cancelNewPatient',
            x: 500
        },
        {
            xtype: 'button',
            margin: '20 20 20 20',
            width: 60,
            text: 'Save',
            id: 'saveNewPatient',
            action: 'doneWithNewPatientPrescription',
            x: 600
        }
        ]
    }]
});