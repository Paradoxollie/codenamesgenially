class Game {
	constructor () {
		this.inProgress = true;
		this.winner = null; // red or blue
		this.currentTurn = Game.red; // Red always starts
		// this.cards = new Array(25).fill().map( c => new Card() );
		this.redCount = 9;
		this.blueCount = 8;
		this.codeNamesArray = ['black', 'toronto', 'dog', 'elephant', 'barbecue', 'death', 'coffee', 'wheel', 'foot', 'pencil', 'monitor', 'straw', 'ham', 'cup', 'speaker', 'tin', 'telescope', 'chips', 'table', 'almonds', 'cat', 'bank', 'window', 'torch', 'tent', 'hospital', 'cast', 'party', 'police', 'school', 'target', 'movie', 'bench', 'sleep', 'apple', 'ball', 'airplane', 'light', 'letter', 'tube', 'plant', 'twig', 'keys', 'snow', 'water', 'clouds', 'bird', 'snorkel', 'soccer', 'japan', 'frog', 'jump', 'volcano', 'hiking', 'trumpet', 'voting', 'bar', 'beer', 'nail', 'marker', 'bookshelf', 'peach', 'beach', 'sand', 'airplane', 'fall', 'spring', 'voltage', 'box', 'sun', 'string', 'toothbrush', 'salon', 'basket', 'tunnel'];
		this.typeArray = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'neutral', 'black' ];
		this.cards = [];


		// Shuffle order of codes and card types:
		this.shuffle(this.codeNamesArray);
		this.shuffle(this.typeArray);

		// Select 25 cards from the shuffled list of Codenames and Card Types and insert into Cards Array:
		for (let i = 0; i < 25; i++) {

			let card = new Card();

			card.code = this.codeNamesArray[i];
			card.type = this.typeArray[i];
			card.borderColour = card.type;

			this.cards.push(card);
			console.log(card);

		}
	}

	// Function to shuffle order of card type:
	shuffle(type) {
		type.sort(() => Math.random() - 0.5);
	}

	makeMove(i){
		if (this.inProgress && !this.cards[i].type) {
			this.cards[i].type = this.currentTurn;

			this.checkWinner();

			// Logic to determine who's turn: TODO: write out logic
			if (this.currentTurn === Game.red){
				this.currentTurn = Game.red;
			} else {
				this.currentTurn === Game.blue;
			}
		}
	}


	// TODO: write logic for death card winner
	checkWinner(){

		// Keep track of score:

		// if (this.redCount === 0) {
		// 	this.winner = Game.red;
		// 	this.inProgress = false;
		// } else if (this.blueCount === 0) {
		// 	this.winner = Game.blue;
		// 	this.inProgress = false;
		// } else if ( death card clicked ){ // TODO: Identify the game winner by death card
		// 	(this.currentTurn === "red") ? (this.winner = "blue") : (this.winner = "red");
		// 	this.inProgress = false;
		// }


		// Red Team Winner:




		// Blue Team Winner:




		if (this.redCount === 0) {
			this.winner = 'Red Team';
		} else if (this.blueCount === 0) {
			this.winner = 'Blue Team';
		}
		return this.winner;
	}
}

Game.red = 'red';
Game.blue = 'blue';
Game.neutral = 'neutral';
Game.deathcard = 'death';