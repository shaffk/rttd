sap.ui.jsview("rttd.RTTD", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf rttd.RTTD
	*/ 
	getControllerName : function() {
		return "rttd.RTTD";
	},
	
	getCategoryPanel : function(){
		var oCategorypanel = new sap.ui.commons.Panel().setText("Category");
		
		return oCategorypanel;
	},
	
	getAgeGroupPanel : function(){
		
		var oAgeGroupPanel = new sap.ui.commons.Panel().setText("Age Group");
		return oAgeGroupPanel;
		
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf rttd.RTTD
	*/ 
	createContent : function(oController) {
		var sString = '<Val><Val1>25-30</Val1><Val2>25-30</Val2></val>';
		var oModel =  new sap.ui.model.xml.XMLModel();
		oModel.setData(sString);
		var oCheckbox = new sap.ui.commons.CheckBox().bindProperty("text", '{Val1}');		
		var oVerticalLayout = new sap.ui.commons.layout.VerticalLayout();
		oVerticalLayout.setWidth("250px");		
		var oCategoryPanel = this.getCategoryPanel();
		var oAgeGroupPanel = this.getAgeGroupPanel();
		oVerticalLayout.addContent(oCheckbox);
		oVerticalLayout.addContent(oCategoryPanel);
		oVerticalLayout.addContent(oAgeGroupPanel);
		return oVerticalLayout;
	}

});
