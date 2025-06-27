$(document).ready(function() {
<<<<<<< HEAD
	$('#btnDelete').click(deleteTown)
	$('#btnDelete').click(showMessage)
=======
	$('#btnDelete').click(deleteTown);
	$('#btnAdd').click(addTown);
	$('#btnShuffle').click(shuffleTowns);
>>>>>>> 0f09a45fc1d9afc9e98fc015fd6b8c199c22ffa5
});

function deleteTown() {
    let townName = $('#townName').val();
    $('#townName').val('');
    let removed = false;
    for (let option of $('#towns option')) {
        if (option.textContent == townName) {
            removed = true;
            option.remove();
        }
    }
    if (removed)
        showMessage(townName + " deleted.");
    else
        showMessage(townName + " not found.");
}

<<<<<<< HEAD
function showMessage(msg) {
    $('#result').text(msg).css("display", "block");
    setTimeout(function () {
        $('#result').hide('blind', {}, 500);
    }, 3000);
=======
function addTown() {
	let townName = $('#townNameForAdd').val();
	$('#townNameForAdd').val('');
	$('#towns').append($('<option>').text(townName));
	$('#result').text(townName + " added.");
}

function shuffleTowns() {
	let towns = $('#towns option').toArray();
	$('#towns').empty();
		shuffleArray(towns);
	$('#towns').append(towns);
	$('#result').text("Towns shuffled.");

	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var oldElement = array[i];
			array[i] = array[j];
			array[j] = oldElement;
		}
	}
>>>>>>> 0f09a45fc1d9afc9e98fc015fd6b8c199c22ffa5
}