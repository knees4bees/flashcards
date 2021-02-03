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
});

describe('return user input', function() {
  let card, turn;

  beforeEach(function() {
    card = new Card(5, 'What is the best ice cream?', ['Vanilla', 'React', 'Angular'], 'Vanilla');
    turn = new Turn('React', card);
  });

  it('should return the user\'s guess', function() {
    const returnedGuess = turn.returnGuess(); 

    expect(returnedGuess).to.equal('React');
  });

  it('should return the current card', function() {
    const returnedCard = turn.returnCard(); 

    expect(returnedCard).to.deep.equal(card);
  });
});

describe('evaluateGuess', function() {
  let card;

  beforeEach(function() {
    card = new Card(6, 'Which bear is the best bear?', ['Black', 'Brown', 'Polar'], 'Black');
  });

  it('should indicate that a right answer is correct', function() {
    const turn = new Turn('Black', card);

    const result = turn.evaluateGuess();

    expect(result).to.equal(true);
  });

  it('should indicate that a wrong answer is incorrect', function() {
    const turn = new Turn('Brown', card);

    const result = turn.evaluateGuess();

    expect(result).to.equal(false);
  });
});

describe('giveFeedback', function() {
  let card;

  beforeEach(function() {
    card = new Card(6, 'Which bear is the best bear?', ['Black', 'Brown', 'Polar'], 'Black');
  });

  it('should display an appropriate message when an answer is correct', function() {
    const turn = new Turn('Black', card);

    const message = turn.giveFeedback();

    expect(message).to.equal('correct!');
  });

  it('should display an appropriate message when an answer is incorrect', function() {
    const turn = new Turn('Brown', card);

    const message = turn.giveFeedback();

    expect(message).to.equal('incorrect!');
  });
});