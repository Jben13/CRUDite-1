$(document).ready(function() {
console.log('+++ filename: app.js: jquery.ready exoected no error actual: ', $ );

// attach event listener to buttons(input)
// create function stub for read/write/delete	
//event.stopPropagation(); //stops event from leaking into other listeners
// console.log(event.target.classList);

$('.submit-card').on('click', function(event) {
	event.preventDefault();
	var data = $(':input').serializeArray();
	  $.each(data, function(i, obj) {
		localStorage.setItem(obj.name, obj.value);
	  });

    
});

// $('.get-button').on('click', function(event) {
// 	// localStorage.getItem('booya');
// 	let titleValue = localStorage.getItem('titleValue');
// 	let codeValue = localStorage.getItem('codeValue'); //booya is the property
// 	$('.feed').html(`<p>${titleValue} ${codeValue}</p>`);
// });

$('.delete-button').on('click', function(event) {
	console.log(localStorage.removeItem('booya')); //deletes given property
});



		
		
// 		  $.each(data, function(i, obj) {
// 		  localStorage.setItem(obj.name, obj.value);
// 		});
// 	  });
	
// $("form").submit(function() {
// 	$('#form-card').prependTo('.feed');
// });




});