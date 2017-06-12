//Write a function that accepts an array of numbers and returns true if every number
//is even, false otherwise.

var evenTest = function(n){
  for (var i = 0; i <n.length; i++){
    if (n[i]%2 !==0){
      return false;
    }
  }
  return true;
}
