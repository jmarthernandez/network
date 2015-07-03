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

		onSet: function () {
			this.close();
		},

		onClose: function(){
	        $(document.activeElement).blur()
	    }
    //{class: 'datepicker', config: materialize.pickDates},
  });
};

exports.tabInit = function(elem, isInitialized){
	if (isInitialized) return;

	console.log("????")

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






