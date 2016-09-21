import {expect} from 'chai';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  })

  describe('A List', () => {

    function addMovie(currentState, movie) {
      //let copy = currentState.slice(0).push(movie);
      let copy = currentState.slice();
      copy.push(movie);
      return copy;
    }

    it('is immutable', () => {
      let state = ['Trainspotting', '28 Days Later'];
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState[2]).to.equal('Sunshine');
      expect(state.length).to.equal(2);
    });

  });



})