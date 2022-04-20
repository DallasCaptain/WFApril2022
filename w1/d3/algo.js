// var age = 10
// var ishappy = true

// if(age != 5){

// }

// function checkAge(age){
//     if(age > 16){
//         console.log('you can borrow my keys')
//         if(age < 75 && age > 60){
//             console.log('lets get more insurance')
//         }

//     }else if(age == 16){
//         console.log('you can drive ill come with')
//     }else if(age<10){
//         console.log('Sorry my trike is broken')
        
//     }else{
//         console.log('you can borrow my bike')

//     }

   

// }

// checkAge(age)

// checkAge(17)


// Always isSunny
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);

//Prepare for downcount
for(var i=10; i>0; i--) {
  if(i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}
    
console.log("liftoff!");

//Count positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!
    
console.log("there are " + countPositives + " positive values");