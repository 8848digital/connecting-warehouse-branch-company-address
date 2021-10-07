frappe.ui.form.on('Branch', {
  setup: function(frm) {
  	frm.set_query('company_address', function(doc) {
      if(!doc.company) {
        frappe.throw(__('Please set Company'));
      }
      return {
        query: 'frappe.contacts.doctype.address.address.address_query',
        filters: {
          link_doctype: 'Company',
          link_name: doc.company
        }
      };
    });
  },

  company_address: function (frm) {
    if(frm.doc.company_address){
     return frappe.call({
        method: "frappe.contacts.doctype.address.address.get_address_display",
        args: {
          "address_dict": frm.doc.company_address
        },
        callback: function(r) {
          if(r.message)
            frm.set_value("company_address_display", r.message);
        }
      });
    }
  },
});