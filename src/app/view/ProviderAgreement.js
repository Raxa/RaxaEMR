Ext.define("RaxaEmr.view.ProviderAgreement", {
    requires: ['Ext.field.Text', 'Ext.field.Number'],
    extend: 'Ext.form.Panel',
    xtype: 'providerAgreement',
    id: 'providerAgreementId',
    config: {
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        hidden: true,
        // Set the width and height of the panel
        width: 1000,
        height: 500,
        items  : [
        {
            xtype: 'panel',
//            html: '<h1>Please review the terms of services,By checking I Agree below,you acknowledge that you have read,understand and agree to these terms.</h1><br><p style="font-size:15px;">JSS considers privacy of the information collected from patients to be of utmost importance and follows a strict policy to protect the information.  This policy lays down the practices and procedures that we follow in collecting, storing and handling the information provided by patients.</p><br><h1>Collection of Information</h1>'+
//        '<p style="font-size:15px;">JSS collects demographic details like name, address and telephone number that could help to identify the patient.  We also collect medical information related to the patient and this could include physical and physiological conditions, results of laboratory tests, details of medicine prescribed and other information related to the treatment of the patient at JSS.  We also collect information related to financial transactions concerning the treatment of the patient at JSS.  The patient by providing such information to us authorises us to use it in accordance with the terms of this policy.</p><br>'+
//        '<h1>Purpose of collection and usage of information</h1><p style="font-size:15px;">JSS collects only the information which we consider relevant to provide the best healthcare to the patient.  The information thus collected is used only for the purpose of providing the required healthcare to the patient. The information will be stored for such a period as reasonably necessary to provide continuous health care to the patient or till the time the consent to use the information is revoked by the patient.  The information could be used for statistical purposes like analysis of area-wise outbreak of a disease.</p><br>'+
//        '<h1>Access to data</h1><p style="font-size:15px;">JSS follows a well defined role-based access to patient data by its personnel.  Personnel performing various functions are only provided access to those parts of patient data which are necessary for them to perform their function.  Access to the software handling patient data is restricted by a password based authentication system.  A log of access to information of each user is also kept by the system.</p><br>'+
//        '<h1>Security practices and procedures</h1><p style="font-size:15px;">JSS follows security practices and procedures that are consistent with international standards like the IS/ISO/IEC 27001 on “Information Technology – Security Techniques – Information Security Management System – Requirements”.  We follow well defined administrative, technical and physical security control procedures to provide reasonable protection to information provided by patients.</p><br>'+
//        '<h1>Transfer of information</h1><p style="font-size:15px;">JSS may, in some cases, transfer information to third parties if it is necessary to meet the healthcare needs of the patient.  Such transfer of information will only be done if the third party follows the same level of data protection as that followed by JSS.  The patient authorises JSS to transfer such information to third parties.</p><br>'+
//        '<h1>Disclosure to Government</h1><p style="font-size:15px;">In some cases JSS will have to disclose the information collected from patients to the Government to fulfil its legal obligations.  Such disclosure will only be carried out with agencies of the Government or agencies authorised by it and no information other than that which is required to be disclosed under law will be transferred to such agencies.</p><br>'+
//        '<h1>Changes in policy</h1><p style="font-size:15px;">JSS could change terms of this policy at any time and this will be communicated to the users by updating the “Privacy Policy” page on this website(if JSS does not have a website we need to modify this).</p><br>'+
//        '<h1>Grievance Redressal Mechanism</h1><p style="font-size:15px;">If a user has any grievance related to the privacy of information provided to JSS  he may contact …….. who is designated as the Grievance Officer in this regard. The user can contact the Grievance Officer by email on …… or by phone at ……………….</p><br>'
           html: '<h1>PLACEHOLDER FOR PRIVACY POLICY</h1>'       
    },
        
        {
            xtype: 'checkboxfield',
            name : 'AgreeServices',
            checked: false,
            label: 'Agree To Term Of Services',
            labelWidth: '70%',
            labelAlign: 'right'
        },
        {
            xtype  : 'container',
            id: 'saveBackButton',
            layout : {
                type  : 'hbox',
                pack : 'center'
            },
            items: [
            {
                xtype: 'button',
                itemId: 'backNewProviderButton',
                text: 'Back',
                ui: 'action',
                width : 150
            },
            {
                xtype: 'spacer',
                width: 50
            },
            {
                xtype: 'button',
                itemId: 'saveNewProviderButton',
                text: 'Save',
                ui: 'action',
                width : 150
            }]
        },
        ]
    },
    saveForm: function () {
        return this.getValues();
    }

});
