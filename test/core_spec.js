import {expect} from 'chai';

import {setEntries, vote} from '../src/core';


describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = {};
      const entries = ['Trainspotting', '28 Days Later'];
      const nextState = setEntries(state, entries);
      expect(nextState).to.deep.equal({
        entries: ['Trainspotting', '28 Days Later']
      });
    });

  });

  describe('vote', () => {

    it('creates a tally for the voted entry', () => {
      const state = {
        vote: ['Trainspotting', '28 Days Later'],
        entries: []
      };
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.deep.equal({
        vote: ['Trainspotting', '28 Days Later'],
        tally: {
          'Trainspotting': 1
        },
        entries: []
      });
    });

    // it('adds to existing tally for the voted entry', () => {
    //   const state = Map({
    //     vote: Map({
    //       pair: List.of('Trainspotting', '28 Days Later'),
    //       tally: Map({
    //         'Trainspotting': 3,
    //         '28 Days Later': 2
    //       })
    //     }),
    //     entries: List()
    //   });
    //   const nextState = vote(state, 'Trainspotting');
    //   expect(nextState).to.equal(Map({
    //     vote: Map({
    //       pair: List.of('Trainspotting', '28 Days Later'),
    //       tally: Map({
    //         'Trainspotting': 4,
    //         '28 Days Later': 2
    //       })
    //     }),
    //     entries: List()
    //   }));
    // });

  });

});