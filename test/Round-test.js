const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, deck;

  beforeEach(function() {
    card1 = new Card(1, 'Which snack food is best?', ['chips', 'pretzels', 'cheese'], 'cheese');
    card2 = new Card(2, 'Which lunch food is best?', ['apple', 'sandwich', 'burrito'], 'apple');
    card3 = new Card(3, 'Which drink is best?', ['water', 'coffee', 'tea'], 'tea');
    deck = new Deck([card1, card2, card3]);
  });

  it('should have a deck', function() {
    const round = new Round(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });
});
