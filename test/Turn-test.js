const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card, turn;

  beforeEach(function() {
    card = new Card(3, 'What\'s the best bird band?', ['The Byrds', 'Black Crowes', 'Flock of Seagulls'], 'Flock of Seagulls');
    turn = new Turn('The Byrds', card);
  });

  it('should store a user\'s guess', function() {
    expect(turn.guess).to.equal('The Byrds');
  });  

  it('should store the current card in play', function() {
    expect(turn.currentCard).to.deep.equal(card);
  });  

  describe('returnGuess', function() {
    it('should return the user\'s guess', function() {
      const returnedGuess = turn.returnGuess(); 

      expect(returnedGuess).to.equal('The Byrds');
    });
  });

  describe('returnCard', function() {
    it('should return the current card', function() {
      const returnedCard = turn.returnCard(); 

      expect(returnedCard).to.deep.equal(card);
    });
  });

  describe('evaluateGuess', function() {
    it('should indicate that a right answer is correct', function() {
      const turn = new Turn('Flock of Seagulls', card);

      const result = turn.evaluateGuess();

      expect(result).to.equal(true);
    });

    it('should indicate that a wrong answer is incorrect', function() {
      const turn = new Turn('Black Crowes', card);

      const result = turn.evaluateGuess();

      expect(result).to.equal(false);
    });
  });

  describe('giveFeedback', function() {
    it('should display an appropriate message when an answer is correct', function() {
      const turn = new Turn('Flock of Seagulls', card);

      const message = turn.giveFeedback();

      expect(message).to.equal('correct!');
    });

    it('should display an appropriate message when an answer is incorrect', function() {
      const turn = new Turn('The Byrds', card);

      const message = turn.giveFeedback();

      expect(message).to.equal('incorrect!');
    });
  });
});