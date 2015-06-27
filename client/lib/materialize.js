exports.makeCollapsible = function(elem, isInitialized){
	if (isInitialized) return;

	$(elem).collapsible({
		accordion: false
	})
}



// <script>
// 	$(document).ready(function(){
// 	    $('.collapsible').collapsible({
// 	      accordion : false
// 	    });
//       $('.datepicker').pickadate({
//         selectMonths: true, // Creates a dropdown to control month
//         selectYears: 15 // Creates a dropdown of 15 years to control year
//       });
// 	  });

// </script>