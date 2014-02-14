$(document).ready(function() {

	// Use VEX to show each stymbols stock information
	function showReservation() {
		vex.open({
			contentClassName: "popup",
			content: 
				'<p>Dinner reservations are for 4:30pm</p>',
			overlayClassName:'quoteDialogOverlay',
			showCloseButton:false});
	}

	$('center a').click(showReservation);

	// jQuery UI code for tooltips
	$(document).tooltip();
});

