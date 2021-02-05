const chai = require('chai');
const expect = chai.expect;

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
    expect(game.currentRound).to.exist;
  });

  it('should create Cards', function() {
    const cards = game.createCards();
    
    expect(cards[0]).to.deep.equal(prototypeQuestions[0]);
    expect(cards[cards.lastIndexOf()]).to.deep.equal(prototypeQuestions[cards.lastIndexOf()]);
    expect(cards.length).to.equal(prototypeQuestions.length);
  });

  it('should put Cards in a Deck', function() {
    const cards = game.createCards();

    const deck = game.createDeck();
    
    expect(deck.cards).to.deep.equal(cards);
  });

  it('should create a new Round using the Deck', function() {
    const deck = game.createDeck();
    const round1 = new Round(deck);

    const round2 = game.createRound();
    
    expect(round1).to.deep.equal(round2);
  });

  it.skip('should start a new game', function() {
    const deck = game.createDeck();
    const round1 = new Round(deck);

    const myGame = game.start();
    const round2 = myGame.currentRound;

    expect(round1).to.equal(round2);
  });
});