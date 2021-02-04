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

  it('should have a current round', function() {
    // const deck = new Deck(prototypeQuestions);
    // const round = new Round(deck);
    // const game = new Game();

    // expect(game.currentRound).to.deep.equal(round);
    expect(game.currentRound).to.exist;
  });



    // TODO figure out whether/how I need to test this
  it('should create Cards', function() {
    const cards = game.createCards();
    
    // TODO find way to test this more fully? (right now prototypeQuestions are not Card objects)
    expect(cards[0]).to.deep.equal(prototypeQuestions[0]);
  });
});