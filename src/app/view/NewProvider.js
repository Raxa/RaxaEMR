Ext.define("RaxaEmr.view.NewProvider", {
    requires: ['Ext.field.Text', 'Ext.field.Number'],
    extend: 'Ext.form.Panel',
    xtype: 'newProvider',
    id: 'newProviderId',
    config: {
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        hidden: true,
        // Set the width and height of the panel
        width: 1000,
        height: 480,
        items: [
        {
          xtype: 'label',
          html: '<h1 style="text-align:center;font-size:30px;">Adding New Provider Account</h1><br><br>'
        },
        
        {
            xtype: 'textfield',
            itemId: 'email',
            name: 'email',
            label: "Email"
        },
        {
            xtype: 'textfield',
            itemId: 'userName',
            name: 'userName',
            label: "Username"
        },
        {
            xtype: 'textfield',
            itemId: 'password',
            name: 'password',
            inputType: 'password',
            label: 'Password'
        },
        {
            xtype: 'textfield',
            itemId: 'confirmPassword',
            name: 'confirmPassword',
            inputType: 'password',
            label: 'Confirm password'
        },
        {
            xtype: 'textfield',
            itemId: 'phone',
            name: 'phone',
            label: "Phone"
        },
        {
            xtype: 'spacer'    
        },
        {
            xtype: 'spacer'    
        },
        {
            xtype: 'button',
            itemId: 'saveProviderButton',
            text: 'Next',
            ui: 'action'
        }]
    },
    saveForm: function () {
        return this.getValues();
    }
});