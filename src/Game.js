const data = require('./data');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck');
const Card = require('./Card');

class Game {
  constructor() {
    this.currentRound = {};
  }

  createCards() {
    const quizCards = prototypeQuestions.map((protoCard) => {
      return new Card(protoCard.id, protoCard.question, protoCard.answers, protoCard.correctAnswer);
    });

    return quizCards;
  }

  createDeck() {
    const deck = new Deck(this.createCards());

    return deck;
  }

  createRound() {
    const round = new Round(this.createDeck());

    return round;
  }

  start() {
    this.currentRound = this.createRound();
    this.printMessage(this.currentRound.deck);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;