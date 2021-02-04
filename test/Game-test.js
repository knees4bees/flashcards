const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {
  it('should have a current round', function() {
    const card4 = new Card(4, 'How far can a dog run into the woods?', ['Partway', 'Halfway', 'All the way'], 'Halfway');
    const card5 = new Card(5, 'What is the best ice cream?', ['Vanilla', 'React', 'Angular'], 'Vanilla');
    const card6 = new Card(6, 'Which bear is the best bear?', ['Black', 'Brown', 'Polar'], 'Black');
    const deck = new Deck([card4, card5, card6]);
    const round = new Round(deck);
    const game = new Game(deck);

    expect(game.currentRound).to.deep.equal(round);
  });
});