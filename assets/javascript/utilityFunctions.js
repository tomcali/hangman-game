     // random integer function used to draw a term at random
     // from the JSON data structure with terms, hints, and definitions
     function getRandomInt(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min)) + min;
     }
