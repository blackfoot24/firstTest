var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};
var $list = $('#toDoTable');

var people = [personOne, personTwo, personThree];

people.forEach(function(toDo){
			$list.append(  '<tr><td>' + toDo.firstName + '</td>\
                                <td>' + toDo.lastName + '</td>\
                                <td>' + toDo.phoneNumber + '</td></tr>');
});


function sayItWorked (event) {
	event.preventDefault();

	var $form = $(event.target).parents('form');

	var newFirstName = $('#newFirstName').val();
	var newLastName = $('#newLastName').val();
	var newPhone = $('#newPhone').val();

	if (newFirstName && newLastName && newPhone) {  
		
		$list.append(  '<tr><td>' + newFirstName + '</td>\
                                <td>' + newLastName + '</td>\
                                <td>' + newPhone + '</td></tr>');
		
		clearInput($('#newFirstName'));
		clearInput($('#newLastName'));
		clearInput($('#newPhone'));

	}
}

function clearInput ($input) {
	$input.val("");
}


$('#createToDo').on('click', sayItWorked);