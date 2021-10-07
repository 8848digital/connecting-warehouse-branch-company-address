frappe.ui.form.on('Delivery Note', {
    onload:function(frm){
        frm.trigger("set_warehouse_filter")
    },
    company:function(frm){
        frm.trigger("set_warehouse_filter")
    },
    customer:function(frm){
      frm.trigger("set_warehouse_filter")
    },
	  set_warehouse_filter: function(frm) {
        setTimeout(function(){
          frappe.db.get_value("Company",frm.doc.company,'select_warehouse_based_on',function(company) {
            let warehouse_filters_source = { "is_group": 0,
                                  "company": frm.doc.company };
            let warehouse_filters_target = { "is_group": 0,
                                  "company": frm.doc.company };
            
            if(company.select_warehouse_based_on == "Billing"){
                warehouse_filters_source["company_address"] = frm.doc.company_address;
                warehouse_filters_target["company_address"] = frm.doc.billing_address;
            }
            else if(company.select_warehouse_based_on == "Shipping"){
              warehouse_filters_source["company_address"] = frm.doc.dispatch_address_name;
              warehouse_filters_target["company_address"] = frm.doc.shipping_address;
            }
            
            frm.set_query("set_warehouse", function() {
              return {"filters": warehouse_filters_source};
            });
            frm.set_query("set_target_warehouse", function() {
                return {"filters": warehouse_filters_target};
            });
      
        }); 
        }, 100);
            
	  },
    refresh: function(frm) {
      if(frm.doc.set_warehouse && frm.doc.set_target_warehouse){
        frappe.call({
          "method":"connecting_warehouse_branch_company_address.connecting_warehouse_branch_company_address.doc_events.delivery_note.check_warehouse_state",
          "freeze":true,
          "args":{
            "source_warehouse":frm.doc.set_warehouse,
            "target_warehouse":frm.doc.set_target_warehouse
          },
          "callback":function(res){
            if(res.message == 0){
              frm.remove_custom_button("E-Way Bill JSON", 'Create');
            }
            
          }
        });
      }     
    }
});
