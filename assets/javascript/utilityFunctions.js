// random integer function used to draw a term at random
// from the JSON data structure with terms, hints, and definitions
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// With execution in the form:
// console.log('before');
// wait(7000);  //7 seconds in milliseconds
// console.log('after');
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

