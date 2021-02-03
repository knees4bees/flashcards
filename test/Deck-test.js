const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1, card2, card3, deck;

  beforeEach(function() {
    card1 = new Card(1, 'What rhymes with orange?', ['apple', 'pear', 'nothing'], 'nothing');
    card2 = new Card(2, 'What rhymes with bear?', ['apple', 'share', 'dear'], 'share');
    card3 = new Card(3, 'What rhymes with beer?', ['dear', 'pear', 'been'], 'dear');
    deck = new Deck([card1, card2, card3]);
  });

  it('should begin with an array of cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', function() {
    const size = deck.countCards();

    expect(size).to.equal(3);
  });
});
