$(document).ready(function() {
console.log('+++ filename: app.js: jquery.ready exoected no error actual: ', $ );

// attach event listener to buttons(input)
// create function stub for read/write/delete	
//event.stopPropagation(); //stops event from leaking into other listeners
// console.log(event.target.classList);

$('.submit-card').on("click", function(event) {
	event.preventDefault();
	// var $showBox = $('<div class="showBox"></div>');
	var subject = $('.subject').val();
	var formData = JSON.stringify(jQuery('form').serializeArray());
	      localStorage.setItem(subject, formData);
	//   });
// 	  if (newList[this.name])
		//   newList.push(data);
	// 	  $(".showBox").append(field.name, field.value);
	// 	  $showBox.prependTo('.feed');
});

$('.get-button').on('click', function(event) {
	
	$('.feed').html(`<p>${titleValue} ${codeValue}</p>`);
});

$('.delete-button').on('click', function(event) {
	console.log(localStorage.removeItem('booya')); //deletes given property
});




});