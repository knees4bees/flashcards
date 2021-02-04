const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'Which snack food is best?', ['chips', 'pretzels', 'cheese'], 'cheese');
    card2 = new Card(2, 'Which lunch food is best?', ['apple', 'sandwich', 'burrito'], 'apple');
    card3 = new Card(3, 'Which drink is best?', ['water', 'coffee', 'tea'], 'tea');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should have a deck', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should start with 0 turns', function() {
    expect(round.turns).to.equal(0);
  })

  it('should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  })

  describe('returnCurrentCard', function() {
    it('should return the current card being played', function() {
      const currentCard = round.returnCurrentCard();

      expect(currentCard).to.equal(card1);
    });
  });

  describe('takeTurn', function() {
    it('should update the turns count', function() {
      round.takeTurn('chips');
      round.takeTurn('apple');

      expect(round.turns).to.equal(2);
    });

    it('should make the next card the current card', function() {
      round.takeTurn('chips');

      expect(round.returnCurrentCard()).to.equal(card2);
    });

    it('should store incorrect guesses by id', function() {
      round.takeTurn('chips');
      round.takeTurn('apple');
      round.takeTurn('water');

      expect(round.incorrectGuesses).to.deep.equal([1, 3]);
    });

    it('should return feedback about the guess', function() {
      const result1 = round.takeTurn('chips');

      expect(result1).to.equal('incorrect!');

      const result2 = round.takeTurn('apple');

      expect(result2).to.equal('correct!');
    });
  });

  describe('calculatePercentCorrect', function() {
    it('should give a score of zero if no turns have been taken yet', function() {
      const score = round.calculatePercentCorrect();

      expect(score).to.equal(0);
    });

    it('should calculate a non-zero score as a percentage', function() {
      round.takeTurn('cheese');
      round.takeTurn('sandwich');
      round.takeTurn('tea');

      const score = round.calculatePercentCorrect();

      expect(score).to.equal(67);
    });
  });

  // revive this test if opting for return statement instead of console.log in endRound method
  // describe('endRound', function() {
  //   it('should print a message when the round is over', function() {
  //     round.takeTurn('pretzels');
  //     round.takeTurn('apple');
  //     round.takeTurn('coffee');

  //     const message = round.endRound();

  //     expect(message).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  //   });
  // });
});
