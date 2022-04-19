// //comments none of this will execute
// //taking notes or making remarks
// //console.log('hello')


// //variables
// var x = 25;
// x = 30;
// console.log(x + x);

// var myname = 'chris';
// console.log(myname +" "+ x);

// //loops

// // for(var i = 0;i < 10; i++){
// //     //code to run
// //     console.log(i);
// // }

// //arrays 
// //[]
// var myarr=[1,2,'x',55];

// console.log(myarr[2])


// for(var i = 0; i < myarr.length; i++){
//     console.log(myarr[i])
// }




//Lesson 1 - Predict the output
var a = 25;
a = a - 13;
console.log(a/2);
    
a = "hello";
console.log(a + " hello");

//Lesson 2 - Predict Loops
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);


//Lesson 3 - Predict what the code does
function getTotal(arrayOfNumbers) {
    
  var sum = arrayOfNumbers[0];
    
  for(var i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    console.log("the current sum is: " + sum); 
  }
    
  console.log("the total is: " + sum);
    
}
    
getTotal([1, 3, 5]);