const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it.skip('should store a user\'s guess', function() {
    const card = new Card(3, 'What\'s the best bird band?', ['The Byrds', 'Black Crowes', 'Flock of Seagulls'], 'Flock of Seagulls');
    const turn = new Turn('The Byrds', card);
    expect(turn.guess).to.equal('The Byrds');
  });  

  it.skip('should store the current card in play', function() {
    const card = new Card(4, 'How far can a dog run into the woods?', ['Partway', 'Halfway', 'All the way'], 'Halfway');
    const turn = new Turn('Partway', card);
    expect(turn.currentCard).to.deep.equal(card);
  });  
});