const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  it('should have a current round', function() {
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    const game = new Game();

    expect(game.currentRound).to.deep.equal(round);
  });
});