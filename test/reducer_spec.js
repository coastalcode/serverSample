import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_ENTRIES', () => {
    const initialState = {};
    const action = {type: 'SET_ENTRIES', entries: ['Trainspotting']};
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      entries: ['Trainspotting']
    });
  });

  it('handles VOTE', () => {
    const initialState = {
      vote: ['Trainspotting', '28 Days Later'],
      entries: []
    };
    const action = {type: 'VOTE', entry: 'Trainspotting'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      vote: ['Trainspotting', '28 Days Later'],
      tally: {Trainspotting: 1},
      entries: []
    });
  });

});