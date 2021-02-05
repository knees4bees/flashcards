const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard();
    const turn = new Turn(guess, card);

    this.turns++;
    this.deck.cards.shift();

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id);
    }

    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const numCorrect = this.turns - this.incorrectGuesses.length;

    if (this.turns > 0) {
      return Math.round((numCorrect / this.turns) * 100);
    } else {
      return 0;
    }
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
  }
}

module.exports = Round;