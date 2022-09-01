let gameInputs = ["Rock", "Paper", "Scissors"];
let adjustPlayerInput = (playerSelection) =>
	playerSelection.slice(0, 1).toUpperCase() +
	playerSelection.slice(1).toLowerCase();
let computerPlay = () => gameInputs[Math.floor(Math.random() * 3)];
function checkPlayerSelection(playerSelection) {
	if (gameInputs.indexOf(playerSelection) === -1) {
		return "The input must be Rock, Paper or Scissors";
	} else {
		return false;
	}
}
function checkRoundWinner(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return `Draw! You have both chosen ${playerSelection}`;
	} else if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) {
		return `You Win! ${playerSelection} beats ${computerSelection}`;
	} else {
		return `You Lose! ${computerSelection} beats ${playerSelection}`;
	}
}
function playRound(playerSelection, computerSelection) {
	if (playerSelection === null) {
		return "Game Over!";
	} else {
		playerSelection = adjustPlayerInput(playerSelection);
	}
	if (checkPlayerSelection(playerSelection)) {
		return checkPlayerSelection(playerSelection);
	}
	return checkRoundWinner(playerSelection, computerSelection);
}
let getFinalResult = (playerScore, computerScore) =>
	playerScore > computerScore
		? "You Win!"
		: playerScore < computerScore
		? "You Lose!"
		: "Draw!";
function game() {
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt("Insert an Input (Rock, Paper or Scissors)");
		let computerSelection = computerPlay();
		let roundResult = playRound(playerSelection, computerSelection);
		if (roundResult === "Game Over!") {
			let finalResult = getFinalResult(playerScore, computerScore);
			alert(
				`You have chosen to end the game. The final result is: ${finalResult} Your score is ${playerScore} and the computer's score is ${computerScore}`
			);
			break;
		} else {
			if (roundResult.indexOf("input") !== -1) {
				i--;
				alert(`${roundResult}. The round will resume`);
			} else {
				if (roundResult.indexOf("Win") !== -1) {
					playerScore++;
				} else if (roundResult.indexOf("Lose") !== -1) {
					computerScore++;
				}
				if (4 - i > 1) {
					alert(`${roundResult}. ${4 - i} rounds left to play`);
				} else if (4 - i === 1) {
					alert(`${roundResult}. ${4 - i} round left to play`);
				} else {
					let finalResult = getFinalResult(playerScore, computerScore);
					alert(`${roundResult}. Click ok to check the final result`);
					alert(
						`Final result: ${finalResult} Your score is ${playerScore} and the computer's score is ${computerScore}`
					);
				}
			}
		}
	}
}
game();
