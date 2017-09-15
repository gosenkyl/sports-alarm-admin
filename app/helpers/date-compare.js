import Ember from 'ember';

export function dateCompare(params, hash) {

  if(hash.compare === "LESS"){
    return hash.date1.isBefore(hash.date2);
  } else if(hash.compare === "GREATER"){
    return hash.date1.isAfter(hash.date2);
  }

  return null;
}

export default Ember.Helper.helper(dateCompare);
