const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  })

  it('should have a current round', function() {
    // const deck = new Deck(prototypeQuestions);
    // const round = new Round(deck);
    // const game = new Game();

    // expect(game.currentRound).to.deep.equal(round);
    expect(game.currentRound).to.exist;
  });

  it('should create Cards', function() {
    const cards = game.createCards();
    
    // TODO find way to test this more fully? (right now prototypeQuestions are not Card objects)
    expect(cards[0]).to.deep.equal(prototypeQuestions[0]);
  });

  it('should put Cards in a Deck', function() {
    const cards = game.createCards();
    const deck = game.createDeck();
    
    expect(deck.cards).to.deep.equal(cards);
  });

  it('should create a new Round using the Deck', function() {
    // const cards = game.createCards();
    const deck = game.createDeck();
    const round1 = new Round(deck);
    const round2 = game.createRound();
    
    expect(round1).to.deep.equal(round2);
  });
});