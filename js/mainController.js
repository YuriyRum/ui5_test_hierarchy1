function controller(){
	this.init = function(data){
		var oModel = sap.ui.model.json.JSONModel();
		oModel.loadData("js/data.json",null,false);
		var oData = JSON.parse(oModel.getJSON());
		//alert(oData.data.root.childs[0].plans);
		oData.data.root.plans = oData.data.root.childs[0].plans;
		oModel.setData(oData);
		sap.ui.getCore().setModel(oModel);
		//oData.data.root.childs[0].plans[0].id = "ttt";
	}
}