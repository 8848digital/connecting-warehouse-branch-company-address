frappe.ui.form.on(cur_frm.doc.doctype, {
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
            }
        })       
	}
});