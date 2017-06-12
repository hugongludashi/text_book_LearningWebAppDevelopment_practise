//Write a function that accepts an array of numbers as an argument and returns the
//largest number in the array.

var largestNumber = function(n){
  n.sort(function(a,b){
    return b-a;
  });
 return n[0];
}

largestNumber([1,4,2,1,3,1]);
