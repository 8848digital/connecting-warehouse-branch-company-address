frappe.ui.form.on(cur_frm.doc.doctype, {
  onload:function(frm){
    frm.trigger("set_warehouse_filter")
  },
  
  company:function(frm){
    frm.trigger("set_warehouse_filter")
  },

  company_address:function(frm){
    frm.trigger("set_warehouse_filter")
  },

  dispatch_address_name:function(frm){
    frm.trigger("set_warehouse_filter")
  },

  set_warehouse_filter: function(frm) {
    setTimeout(function(){
      frappe.db.get_value("Company",frm.doc.company,'select_warehouse_based_on',function(company) {
        let warehouse_filters = { "is_group": 0,
                                  "company": frm.doc.company };
      
        if(company.select_warehouse_based_on == "Billing")
          warehouse_filters["company_address"] = frm.doc.company_address;
        else if(company.select_warehouse_based_on == "Shipping")
          warehouse_filters["company_address"] = frm.doc.dispatch_address_name;
        
        frm.set_query("set_warehouse", function() {
          return {"filters": warehouse_filters};
        });
      })   
    }, 100);       
  }
});