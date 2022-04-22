var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);


var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}



// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...

["a", "b", "c", "d", "e"];
// we expect to get back...

["e", "d", "c", "b", "a"];