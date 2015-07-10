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
  	
	  format: 'mmmm dd, yyyy',
	  formatSubmit: 'yyyy-mm-dd',
	  hiddenPrefix: 'prefix__',
	  hiddenSuffix: '__suffix',

		onSet: function (date) {
			console.log(date.select)
			if(date.select === undefined) return;
			else if (date) this.close();
		},

		onClose: function(){
	        $(document.activeElement).blur()
	    }
    //{class: 'datepicker', config: materialize.pickDates},
  });
};

exports.tabInit = function(elem, isInitialized){
	if (isInitialized) return;

  $(elem).tabs();  //.ul.tabs
};



exports.modalClick = function(elem, isInitialized){
	if (isInitialized) return;

  $(elem).leanModal({  //.modal-trigger
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      // ready: function() { alert('Ready'); }, // Callback for Modal open
      // complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
};

exports.navDrop = function(elem, isInitialized){
	if (isInitialized) return;

	$(elem).sideNav();
};

exports.dropDowns = function (elem, isInitialized){
	if (isInitialized) return;

	$(elem).dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 10, // Spacing from edge
      belowOrigin: true // Displays dropdown below the button
    }
  );
}

exports.carosel = function(elem, isInitialized){
	if (isInitialized) return;
  $(elem).slider({full_width: true});
}

exports.fullScreenSlider = function(elem, isInitialized){
	if (isInitialized) return;

	$(elem).slider({full_width: true}); //.slider
}







