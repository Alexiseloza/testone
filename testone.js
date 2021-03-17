import _ from 'underscore';

let ranks = [{name:'one',rank:1},{name:'two',rank:2}];

let getByRanks = (ranks)=>{
	return _.sortBy(_pluck(ranks,'rank'), function(num) {
    return num;
  })
};
let getRankAverage = (ranks)=>{
        return _.reduce(_.pluck(ranks,'rank'), function(memo, num) {
            return memo + num;
      }, 0) / (arr.length === 0 ? 1 : arr.length);
 
}