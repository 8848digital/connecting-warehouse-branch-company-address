from . import __version__ as app_version

app_name = "connecting_warehouse_branch_company_address"
app_title = "Connecting Warehouse Branch Company Address"
app_publisher = "Ascra Technologies"
app_description = "Connecting Warehouse Branch Company Address"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "nirali@ascratech.com"
app_license = "GPL 3.0"

doctype_js = {
	"Branch"           : "public/js/doctype_js/branch.js",
	"Warehouse"        : "public/js/doctype_js/warehouse.js",
	"Purchase Order"   : "public/js/doctype_js/purchase_common_warehouse_filter.js",
	"Purchase Receipt" : "public/js/doctype_js/purchase_common_warehouse_filter.js",
	"Purchase Invoice" : "public/js/doctype_js/purchase_common_warehouse_filter.js",
	"Sales Order"      : "public/js/doctype_js/sales_common_warehouse_filter.js",
	"Sales Invoice"    : "public/js/doctype_js/sales_common_warehouse_filter.js",
	"Delivery Note"    : "public/js/doctype_js/delivery_note.js",
}

fixtures = [
  {
    "dt": "Custom Field", 
    "filters": [["name", "in", [ "Warehouse-company_address",
                 								"Company-select_warehouse_based_on",
	 															"Branch-company",
																"Branch-column_break_2",
																"Branch-company_address",
																"Branch-company_address_display"]
        			]]
  }
]
# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/connecting_warehouse_branch_company_address/css/connecting_warehouse_branch_company_address.css"
# app_include_js = "/assets/connecting_warehouse_branch_company_address/js/connecting_warehouse_branch_company_address.js"

# include js, css files in header of web template
# web_include_css = "/assets/connecting_warehouse_branch_company_address/css/connecting_warehouse_branch_company_address.css"
# web_include_js = "/assets/connecting_warehouse_branch_company_address/js/connecting_warehouse_branch_company_address.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "connecting_warehouse_branch_company_address/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "connecting_warehouse_branch_company_address.install.before_install"
# after_install = "connecting_warehouse_branch_company_address.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "connecting_warehouse_branch_company_address.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"connecting_warehouse_branch_company_address.tasks.all"
# 	],
# 	"daily": [
# 		"connecting_warehouse_branch_company_address.tasks.daily"
# 	],
# 	"hourly": [
# 		"connecting_warehouse_branch_company_address.tasks.hourly"
# 	],
# 	"weekly": [
# 		"connecting_warehouse_branch_company_address.tasks.weekly"
# 	]
# 	"monthly": [
# 		"connecting_warehouse_branch_company_address.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "connecting_warehouse_branch_company_address.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "connecting_warehouse_branch_company_address.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "connecting_warehouse_branch_company_address.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

user_data_fields = [
	{
		"doctype": "{doctype_1}",
		"filter_by": "{filter_by}",
		"redact_fields": ["{field_1}", "{field_2}"],
		"partial": 1,
	},
	{
		"doctype": "{doctype_2}",
		"filter_by": "{filter_by}",
		"partial": 1,
	},
	{
		"doctype": "{doctype_3}",
		"strict": False,
	},
	{
		"doctype": "{doctype_4}"
	}
]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"connecting_warehouse_branch_company_address.auth.validate"
# ]

