export function setEntries(state, entries) {
  let copy = Object.assign({}, state);
  copy.entries = entries;
  return copy;
}

export function vote(state, entry) {
  let copy = Object.assign({}, state);
  copy.tally = {};
  copy.tally[entry] = 1;
  return copy;
}