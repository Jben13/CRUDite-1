$(document).ready(function() {
console.log('+++ filename: app.js: jquery.ready exoected no error actual: ', $ );

// attach event listener to buttons(input)
// create function stub for read/write/delete	
//event.stopPropagation(); //stops event from leaking into other listeners
// console.log(event.target.classList);

$('.submit-card').on("click", function(event) {
	event.preventDefault();
	var subject = $('.subject').val();
	var posText = $('#pos-input').val();
	var studyText = $('#study-input').val();
	var learnText = $('#learn-input').val();
	var recomText = $('#recom-input').val();
	var docText = $('#doc-input').val();
	var $inputBox = $('<div class="inputBox"></div>');
	var obj = {};
	$('#form-card :input').not(':submit').each(function() {
		var $input = $(this);
		var name = $input.attr('name');
		var value = $input.val();
		  obj[name] = value;
	    var newObj = JSON.stringify(obj);
	      localStorage.setItem(subject, newObj);
		var display;
	
	$inputBox.append(
		subject,
		display = "<p>What did I learn -OR- do well today? " + posText + 
		"</p><p> What do I need to study -OR- need more information? " + studyText + 
		"</p><p> What do I need help on? " + learnText + 
		"</p><p> Recommendations? " + recomText + 
		"</p><p> Additional Notes: " + docText + "</p>"
	);
	$inputBox.prependTo(".feed");
	});
});

$('.get-button').on('click', function(event) {
	var subject = $('.subject').val();
	localStorage.getItem('subject');
	$('.feed').html(`<p>${subject}</p>`);
});

$('.delete-button').on('click', function(event) {
	console.log(localStorage.removeItem('booya')); //deletes given property
});




});