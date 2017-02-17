# hangman-game
A hangman-syle game to train students in statistical terminology.

## Overview
This assignment involves building a hangman-style game. It provides an opportunity to develop JavaScript programming methods.  

The variation on the design that I am trying is to use the game as a statistics training device. A set of statistical terms, hints, and full definitions is maintained in a JSON data structure, which may be sourced into the JavaScript program creating a JavaScript object that we can use to guide the game. The JSON data are limited in this initial version of the game, which is merely a prototype or demonstration. But instructors could easily add to the data structure providing an extensive array of statistical terms for training purposes.

The main thing that I am doing regarding the logic of the game is using set operations. I define a set object following documentation from
Mozilla at

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/

I am also putting together a collection of utility functions that I expect to draw on for future projects. These utilities will be my toolbox of sorts going forward. 

Sets simplify the implementation of hangman game logic. I focused on the game logic on this assignment. Not really concerned about how good the final game looks. Function over form is the rule for now. To check out the function, I use lots of console.log() functions. I include a file of set functions as well, though I did not need to use these for the hangman game. Good to have them handy, though, for future projects.

I will continue to work with Bootstrap 4, which is currently in alpha release. 

The program is operational. There are data validation issues to address in the future...  things relating to user data input, such as then incorrect or multiple letters are entered in response to the prompt(). But these, as we have been told in class, will be better handled by modals. Modals will wait for another day.

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
