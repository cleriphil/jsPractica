// Return the length of the longest word in the provided sentence.

function findLongestWord(str) {
  var arr = str.split(' ');
  var lengths = arr.map(function(val){
      return val.length;
  });
  var sortLengths = lengths.sort(function(a, b){
       return b - a;
  });
  return sortLengths[0];
}
