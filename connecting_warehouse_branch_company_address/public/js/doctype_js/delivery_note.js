frappe.ui.form.on('Delivery Note', {
    onload:function(frm){
        frm.trigger("set_warehouse_filter")
    },
    company:function(frm){
        frm.trigger("set_warehouse_filter")
    },
	set_warehouse_filter: function(frm) {
        frappe.db.get_value("Company",frm.doc.company,'select_warehouse_based_on',function(r){
            console.log(r.select_warehouse_based_on)
            if(r.select_warehouse_based_on == "Billing"){
                frm.set_query("set_warehouse", function() {
                    return {
                        "filters": {
                            "company_address": frm.doc.company_address,
                            "is_group": 0
                        }
                    };
                });
                frm.set_query("set_target_warehouse", function() {
                    return {
                        "filters": {
                            "company_address": frm.doc.billing_address,
                            "is_group": 0
                        }
                    };
                });
            }
            else if(r.select_warehouse_based_on == "Shipping"){
                frm.set_query("set_warehouse", function() {
                    return {
                        "filters": {
                            "company_address": frm.doc.dispatch_address_name,
                            "is_group": 0
                        }
                    };
                });
                frm.set_query("set_target_warehouse", function() {
                    return {
                        "filters": {
                            "company_address": frm.doc.shipping_address,
                            "is_group": 0
                        }
                    };
                });
            }
            else{
                frm.set_query("set_warehouse", function() {
                    return {
                        "filters": {
                            "company": frm.doc.company,
                            "is_group": 0
                        }
                    };
                });
                frm.set_query("set_target_warehouse", function() {
                    return {
                        "filters": {
                            "company": frm.doc.company,
                            "is_group": 0
                        }
                    };
                });
            }
        })       
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
					console.log(res.message);
					if(res.message == 0){
						frm.remove_custom_button("E-Way Bill JSON", 'Create');
					}
				  
				}
			});
		}     
	}
});
