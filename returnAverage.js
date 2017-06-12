//Write a function that accepts an array of numbers as an argument and returns their
//average.

var average= function(n){
  var sum =0;
  for (var i=0; i<n.length; i++){    //first calculate out the sum of the numbers of the array
    sum += n[i];
  }
  return sum/(n.length)             //then calculate the average
}
