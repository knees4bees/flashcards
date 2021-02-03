const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user\'s guess', function() {
    const card = new Card(3, 'What\'s the best bird band?', ['The Byrds', 'Black Crowes', 'Flock of Seagulls'], 'Flock of Seagulls');
    const turn = new Turn('The Byrds', card);
    expect(turn.guess).to.equal('The Byrds');
  });  

  it('should store the current card in play', function() {
    const card = new Card(4, 'How far can a dog run into the woods?', ['Partway', 'Halfway', 'All the way'], 'Halfway');
    const turn = new Turn('Partway', card);
    expect(turn.currentCard).to.deep.equal(card);
  });  
});

describe('returnGuess', function() {
  it('should return the user\'s guess', function() {
    const card = new Card(5, 'What is the best ice cream?', ['Vanilla', 'React', 'Angular'], 'Vanilla');
    const turn = new Turn('React', card);

    const returnedGuess = turn.returnGuess(); 

    expect(returnedGuess).to.equal('React');
  })
});

describe('returnCard', function() {
  it('should return the current card', function() {
    const card = new Card(5, 'What is the best ice cream?', ['Vanilla', 'React', 'Angular'], 'Vanilla');
    const turn = new Turn('React', card);

    const returnedCard = turn.returnCard(); 

    expect(returnedCard).to.deep.equal(card);
  })
});

describe('evaluateGuess', function() {
  it('should indicate that a right answer is correct', function() {
    const card = new Card(6, 'Which bear is the best bear?', ['Black', 'Brown', 'Polar'], 'Black');
    const turn = new Turn('Black', card);

    const result = turn.evaluateGuess();

    expect(result).to.equal(true);
  })

  it('should indicate that a wrong answer is incorrect', function() {
    const card = new Card(6, 'Which bear is the best bear?', ['Black', 'Brown', 'Polar'], 'Black');
    const turn = new Turn('Brown', card);

    const result = turn.evaluateGuess();

    expect(result).to.equal(false);
  })
});

describe('giveFeedback', function() {

});