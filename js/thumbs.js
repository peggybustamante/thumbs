/*******************************************************************************
file: thumbs.js
project: Thumbs up / Thumbs down
date: July 2013
authors: P. Bustamante

overview: 

*******************************************************************************/


$(document).ready(function(){ // begin document.ready block

	$(".thumbvote").click(function () {
		//alert("Clicked thumbsvote!");
		cardID = $(this).attr('data-id');
		vote = $(this).attr('data-vote');
		console.log("card no.: " + cardID);
		console.log("vote: thumbs " + vote + "!");
		$("#result-"+cardID).html("<h4>card " + cardID + ": thumbs " + vote + "!</h4>");
		//$(".carousel-caption").slideUp();
	});
	
	$(".thumbsdown").click(function () {
		alert("Clicked thumbs down!");
		//$("#embedwell").hide();
	});

}); // end document.ready block
