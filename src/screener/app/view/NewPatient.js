/**
 * This panel will overlay when the new patient button is
 * pressed. This is a form that gets user name and shows
 */
var NEW_PATIENT_CONSTANTS = {
    FIELD_BORDER: 'border-color: #333333; border-width: 1px; border-style : solid;',
    FIELD_WIDTH: 300,
    LABEL_WIDTH: 135,
    AGE_FIELD_WIDTH: 80,
    LABEL_STYLE: 'background-color: #eeeeee;',
    CONTAINER_BACKGROUND: 'background-color: #eeeeee;',
    CONTAINER_LAYOUT: {
        type: 'hbox',
        align: 'strech'
    },
    CONTAINER_MARGIN: '5 0 5 0',
    RADIO_FIELD_WIDTH: 230
}

Ext.define("Screener.view.NewPatient", {
    requires: ['Ext.field.Text', 'Ext.field.Number'],
    extend: 'Ext.form.Panel',
    xtype: 'newPatient',
    id: 'newPatient',
    config: {
        //centered: true,
        style: NEW_PATIENT_CONSTANTS.CONTAINER_BACKGROUND,
        items: [{
            xtype: 'container',
            layout: NEW_PATIENT_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PATIENT_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PATIENT_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PATIENT_CONSTANTS.LABEL_STYLE,
                    value: 'First Name',
                    width: NEW_PATIENT_CONSTANTS.LABEL_WIDTH
                }]
            }, {
                xtype: 'textfield',
                id: 'givenName',
                name: 'givenname',
                tabIndex : 1,
                width: NEW_PATIENT_CONSTANTS.FIELD_WIDTH,
                style: NEW_PATIENT_CONSTANTS.FIELD_BORDER
            }]
        }, {
            xtype: 'container',
            layout: NEW_PATIENT_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PATIENT_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PATIENT_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PATIENT_CONSTANTS.LABEL_STYLE,
                    value: 'Last Name',
                    width: NEW_PATIENT_CONSTANTS.LABEL_WIDTH
                }]
            }, {
                xtype: 'textfield',
                id: 'familyName',
                name: 'familyname',
                tabIndex : 2,
                width: NEW_PATIENT_CONSTANTS.FIELD_WIDTH,
                style: NEW_PATIENT_CONSTANTS.FIELD_BORDER
            }]
        }, {
            xtype: 'container',
            layout: NEW_PATIENT_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PATIENT_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PATIENT_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PATIENT_CONSTANTS.LABEL_STYLE,
                    value: 'Age',
                    width: NEW_PATIENT_CONSTANTS.LABEL_WIDTH
                }]
            }, {
                xtype: 'container',
                id: 'ageDateOfBirth',
                items: [{
                    xtype: 'numberfield',
                    id: 'patientAge',
                    name: 'patientAge',
                    tabIndex : 3,
                    width: NEW_PATIENT_CONSTANTS.AGE_FIELD_WIDTH,
                    style: NEW_PATIENT_CONSTANTS.FIELD_BORDER,
                    allowDecimals: false,
                    listeners: {
                        blur: function (field) {
                            field.setValue(Math.floor(field.getValue()));
                            if (!(field.getValue() >= Util.OPEN_MRS_MIN_AGE && field.getValue() < Util.OPEN_MRS_MAX_AGE)) {
                                Ext.Msg.alert('Wrong Input', 'Patient Age should be between ' + Util.OPEN_MRS_MIN_AGE + ' and ' + Util.OPEN_MRS_MAX_AGE);
                                field.setValue('');
                            }
                        }
                    }
                }]
            }]
        }, {
            xtype: 'container',
            layout: NEW_PATIENT_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PATIENT_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PATIENT_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PATIENT_CONSTANTS.LABEL_STYLE,
                    value: 'Gender',
                    width: NEW_PATIENT_CONSTANTS.LABEL_WIDTH
                }]
            }, {
                xtype: 'container',
                id: 'sexRadioGroup',
                layout: {
                    type: 'vbox',
                    align: 'strech'
                },
                items: [{
                    xtype: 'radiofield',
                    label: 'Male', // Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.male'),
                    value: 'M',
                    name: 'choice',
                    style: NEW_PATIENT_CONSTANTS.LABEL_STYLE,
                    labelAlign: 'right',
                    labelCls: 'font-size: 18px',
                    labelWidth: NEW_PATIENT_CONSTANTS.RADIO_FIELD_WIDTH,
                    flex: 1
                }, {
                    xtype: 'radiofield',
                    label: 'Female', // Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.female'),
                    value: 'F',
                    name: 'choice',
                    labelAlign: 'right',
                    labelWidth: NEW_PATIENT_CONSTANTS.RADIO_FIELD_WIDTH,
                    style: NEW_PATIENT_CONSTANTS.LABEL_STYLE,
                    flex: 1
                }, {
                    xtype: 'radiofield',
                    label: 'Other', // Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.other'),
                    value: 'O',
                    name: 'choice',
                    labelAlign: 'right',
                    labelWidth: NEW_PATIENT_CONSTANTS.RADIO_FIELD_WIDTH,
                    style: NEW_PATIENT_CONSTANTS.LABEL_STYLE,
                    flex: 1
                }]
            }]
        }, {
            xtype: 'container',
            layout: NEW_PATIENT_CONSTANTS.CONTAINER_LAYOUT,
            margin: NEW_PATIENT_CONSTANTS.CONTAINER_MARGIN,
            items: [{
                xtype: 'container',
                width: NEW_PATIENT_CONSTANTS.LABEL_WIDTH,
                items: [{
                    xtype: 'textfield',
                    clearIcon: false,
                    style: NEW_PATIENT_CONSTANTS.LABEL_STYLE,
                    value: 'Contact No',
                    width: NEW_PATIENT_CONSTANTS.LABEL_WIDTH
                }]
            }, {
                xtype: 'numberfield',
                id: 'contactNumber',
                tabIndex : 5,
                width: NEW_PATIENT_CONSTANTS.FIELD_WIDTH,
                style: NEW_PATIENT_CONSTANTS.FIELD_BORDER
            }]
        }, {
            xtype: 'button',
            id: 'savePatientButton',
            ui: 'confirm',
            html: '<font  color="white">Save Patient</font>',
            margin: '20 120 0 120'
        }],
        onChange: function () {
            Ext.Msg.alert("Please enter the date format");
        }
    },
    saveForm: function () {
        return this.getValues();
    }
});