const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should begin with an array of cards', function() {
    const card1 = new Card(1, 'What rhymes with orange?', ['apple', 'pear', 'nothing'], 'nothing');
    const card2 = new Card(2, 'What rhymes with bear?', ['apple', 'share', 'dear'], 'share');
    const card3 = new Card(3, 'What rhymes with beer?', ['dear', 'pear', 'been'], 'dear');
    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', function() {
    const card1 = new Card(1, 'What rhymes with orange?', ['apple', 'pear', 'nothing'], 'nothing');
    const card2 = new Card(2, 'What rhymes with bear?', ['apple', 'share', 'dear'], 'share');
    const card3 = new Card(3, 'What rhymes with beer?', ['dear', 'pear', 'been'], 'dear');
    const deck = new Deck([card1, card2, card3]);

    const size = deck.countCards();

    expect(size).to.equal(3);
  });
});
