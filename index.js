// let firstMove = true;
// let currentPlayer;
let gameButtons = document.querySelectorAll("#game-grid button");


// Function called whenever user tab on any box
function playMove() {

	// Setting DOM to all boxes or input field
	let b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.querySelector(".b1").value;
	b2 = document.querySelector(".b2").value;
	b3 = document.querySelector(".b3").value;
	b4 = document.querySelector(".b4").value;
	b5 = document.querySelector(".b5").value;
	b6 = document.querySelector(".b6").value;
	b7 = document.querySelector(".b7").value;
	b8 = document.querySelector(".b8").value;
	b9 = document.querySelector(".b9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.querySelector('.message')
			.innerHTML = "Player X won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.querySelector('.message')
			.innerHTML = "Player X won";
      gameButtons.forEach(input => input.disabled = true);

		window.alert('Player X won');
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.querySelector('.message')
			.innerHTML = "Player X won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.querySelector('.message')
			.innerHTML = "Player X won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.querySelector('.message')
			.innerHTML = "Player X won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.querySelector('.message')
			.innerHTML = "Player X won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.querySelector('.message')
			.innerHTML = "Player X won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.querySelector('.message')
			.innerHTML = "Player X won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player X won');
	}

	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.querySelector('.message')
			.innerHTML = "Player 0 won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.querySelector('.message')
			.innerHTML = "Player 0 won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player 0 won');
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.querySelector('.message')
			.innerHTML = "Player 0 won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.querySelector('.message')
			.innerHTML = "Player 0 won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.querySelector('.message')
			.innerHTML = "Player 0 won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.querySelector('.message')
			.innerHTML = "Player 0 won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.querySelector('.message')
			.innerHTML = "Player 0 won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player 0 won');
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.querySelector('.message')
			.innerHTML = "Player 0 won";
      gameButtons.forEach(input => input.disabled = true);
		window.alert('Player 0 won');
	}

	// Checking of Player 0 finsh
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.querySelector('.message')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.querySelector('.message')
				.innerHTML = "Player X Turn";
		}
		else {
			document.querySelector('.message')
				.innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function reset() {
	location.reload();
  gameButtons.forEach(input => input.innerText = '');

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function box_1() {
	if (flag == 1) {
		document.querySelector(".b1").value = "X";
		document.querySelector(".b1").disabled = true;
		flag = 0;
	}
	else {
		document.querySelector(".b1").value = "0";
		document.querySelector(".b1").disabled = true;
		flag = 1;
	}
}

function box_2() {
	if (flag == 1) {
		document.querySelector(".b2").value = "X";
		document.querySelector(".b2").disabled = true;
		flag = 0;
	}
	else {
		document.querySelector(".b2").value = "0";
		document.querySelector(".b2").disabled = true;
		flag = 1;
	}
}

function box_3() {
	if (flag == 1) {
		document.querySelector(".b3").value = "X";
		document.querySelector(".b3").disabled = true;
		flag = 0;
	}
	else {
		document.querySelector(".b3").value = "0";
		document.querySelector(".b3").disabled = true;
		flag = 1;
	}
}

function box_4() {
	if (flag == 1) {
		document.querySelector(".b4").value = "X";
		document.querySelector(".b4").disabled = true;
		flag = 0;
	}
	else {
		document.querySelector(".b4").value = "0";
		document.querySelector(".b4").disabled = true;
		flag = 1;
	}
}

function box_5() {
	if (flag == 1) {
		document.querySelector(".b5").value = "X";
		document.querySelector(".b5").disabled = true;
		flag = 0;
	}
	else {
		document.querySelector(".b5").value = "0";
		document.querySelector(".b5").disabled = true;
		flag = 1;
	}
}

function box_6() {
	if (flag == 1) {
		document.querySelector(".b6").value = "X";
		document.querySelector(".b6").disabled = true;
		flag = 0;
	}
	else {
		document.querySelector(".b6").value = "0";
		document.querySelector(".b6").disabled = true;
		flag = 1;
	}
}

function box_7() {
	if (flag == 1) {
		document.querySelector(".b7").value = "X";
		document.querySelector(".b7").disabled = true;
		flag = 0;
	}
	else {
		document.querySelector(".b7").value = "0";
		document.querySelector(".b7").disabled = true;
		flag = 1;
	}
}

function box_8() {
	if (flag == 1) {
		document.querySelector(".b8").value = "X";
		document.querySelector(".b8").disabled = true;
		flag = 0;
	}
	else {
		document.querySelector(".b8").value = "0";
		document.querySelector(".b8").disabled = true;
		flag = 1;
	}
}

function box_9() {
	if (flag == 1) {
		document.querySelector(".b9").value = "X";
		document.querySelector(".b9").disabled = true;
		flag = 0;
	}
	else {
		document.querySelector(".b9").value = "0";
		document.querySelector(".b9").disabled = true;
		flag = 1;
	}
}