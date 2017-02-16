# hangman-game
A hangman-syle game to train students in statistical terminology.

## Overview
This assignment involves building a hangman-style game. It provides an opportunity to develop JavaScript programming methods.  

The variation on the design that I am trying is to use the game as a statistics training device. A set of statistical terms, hints, and full definitions is maintained in a JSON data structure, which may be sourced into the JavaScript program creating a JavaScript object that we can use to guide the game. The JSON data are limited in this initial version of the game, which is merely a prototype or demonstration. But instructors could easily add to the data structure providing an extensive array of statistical terms for training purposes.

The main thing that I am doing regarding the logic of the game is using set operations. I define a set object following documentation from
Mozilla at

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/

Sets make implementing hangman game logic so much easier. I focused on the game logic on this assignment. Not really concerned about how good the final game looks. Function over form is the rule for now. To check out the function, I use lots of console.log() functions. I include a file of set functions as well, though I did not need to use these for the hangman game. Good to have them handy, though, for future projects.

I continue to work with Bootstrap 4, which is currently in alpha release. So far my testing of this shows that Bootstrap 4 operates about the same as Bootstrap 3. Documentation for Bootstrap 4 suggests that we should employ stlying best practices of normalize.css, such as using em rather than px for size paramters. Bootstrap 4 is actually a smaller package because it drops glyphs/icons included with Bootstrap 3, so these must be included as separate icon/glyph files. Bootstrap 4 also has an extra small setting for responsiveness, making solutions compatible with very small screens. If you interact with the web through your own version of a Dick Tracy watch, whether the product of Apple or Google, you may be better served by Bootstrap 4. 

## Viewing the Websites

The results of this homework are available as GitHub web pages.

## Requirements

The game is a hangman style game displayed with a Bootstrap Jumbotron at the top and three columns as the core display elements of the game. The left-hand column shows the hint associated with the word and the guesses letter-by-letter. The middle column shows number of guesses remaining and the letters used so far. And the right-hand column is reserved for displaying the game result (win or lose) and the full definition of the game.

## Technologies Used

- HTML
- CSS (style.css after Bootstrap 4 css and Yeti Bootswatch)
- JavaScript (via Bootstrap 4) and hangman code
- Set data structures implemented via JavaScript objects
- Git/GitHub
- Bootstrap for responsive design
- One image used as background for the Bootstrap Jumbotron

## Code Explanation
- We start with GitHub, setting up the hangman-game repostory. We set up directories and subdirectories according to the assignment definitions. And we added bootstap as a directory, using the same structure as in the previous assignment. The javascript directory includes my JavaScript code and the JSON data. A separate js directory was set up for the jQuery code. (Because I like to be able to continue working when I do not have a connection to the Internet, I include copies of files in the repositories. Both human-readable and minified versions of JQuery were included because I am learning jQuery, and would like to inspect code for functions/methods on occasion.)
- Set up the structure a la bootstrap.
- Set up method for importing the data for the statistical terms in the JSON structure.
- Did a bit of JavaScrip coding for the game itself. There are still rough edges that need work but the general structure is in place.
- Deployed hangman-game to gh-pages.
