function view(){
		this.createContent = function(oController){
			var oSplitter = sap.ui.commons.Splitter("splitterH");
			oSplitter.setSplitterOrientation(sap.ui.commons.Orientation.horizontal);
			oSplitter.setMinSizeFirstPane("20%");
			oSplitter.setMinSizeSecondPane("30%");
			oSplitter.setWidth("100%");
			oSplitter.setHeight("600px");			
			
			var oTree = sap.ui.table.TreeTable({
				columns:[
				new sap.ui.table.Column({
					label:"ID", template:"id"
				}),
				new sap.ui.table.Column({
					label:"Name", template:sap.ui.commons.TextField().bindProperty("value","name")
				})
				],
				selectionMode: sap.ui.table.SelectionMode.Single,
				expandFirstLevel:true				
			});
			oTree.bindRows("/data");
			oSplitter.addFirstPaneContent(oTree);	
			oSplitter.placeAt("content");
			
			var oButton = new sap.ui.commons.Button();
				oButton.attachPress(function(){
					var oModel = sap.ui.getCore().getModel();
					var oData = oModel.getData();
					alert(oData.data.root.childs[0].plans[0].name);									
				});
				oButton.placeAt("contentButton");
		}
}