exports.makeCollapsible = function(elem, isInitialized){
	if (isInitialized) return;

	$(elem).collapsible({
		accordion: false
	});

	//config: materialize.makeCollapsible
};

exports.pickDates = function(elem, isInitialized){
	if (isInitialized) return;

  $(elem).pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year

    dateFormat: 'yyyy-mm-dd',
  	
	  format: 'mmmm dd , yyyy',
	  formatSubmit: 'yyyy-mm-dd',
	  hiddenPrefix: 'prefix__',
	  hiddenSuffix: '__suffix',

		onSet: function () {
			this.close();
		},

		onClose: function(){
	        $(document.activeElement).blur()
	    }
    //{class: 'datepicker', config: materialize.pickDates},
  });
};

// exports.setter = function (prop) {
// 	return function(elem, isInitialized){
// 		if (isInitialized) return;

// 		$(elem).datepicker({
// 	  	dateFormat: "yyyy-mm-dd",
// 	  	onSelect: prop
// 		});
// 	};
// }