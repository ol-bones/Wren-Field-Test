# Wren-Field-Test
The fields are green and Wren are venturing out into the world as a shepherd.

## The Task
--------
Your task is to extend the provided code with functionality and logic to add sheep to the field and allow them to breed.

The rows in the HTML table illustrate sheep that are currently within the field.

The specification of what is required is as follows:

1) You must be able to name and add a sheep into the field, each as a male or female
2) You must be able to brand a sheep at random (paint it green) that is currently living in the field
3) You must encourage two random sheep to breed and if successful, spawn a new sheep into the field
4) Sheep that are born from existing sheep in the field should have their parents denoted in the table

## Logic that must be factored in:

a) The probability of a female sheep giving birth after mating is 50%
b) Branded sheep must be highlighted in green
c) Branded sheep are not able to breed

Use common sense to define your rules about which sheep can breed with each other, and include them when you return your submission.

## What's Included?
----------------
Included is some skeleton code for you to work with that comprises of a simple HTML page, Twitter Bootstrap and a barebones JavaScript frame to work upon.
The JavaScript comes pre-bootstrapped using RequireJS (http://www.requirejs.org/) as a module loader and includes a simple embedded JS template library that is already being used within the page.
The file named indexcontroller.js contains an example that adds a hard-coded sheep that you should replace. Try out the example by clicking on the 'Add Sheep (F)' button.

## Please Note
-----------
RequireJS expects to be able to make XHR requests to fetch data.
Some browsers have restrictions regarding this, so we advise that you serve the application from a HTTP server or run it using FireFox.
See https://github.com/requirejs/text#configuration about running for more information.

## Further Work
------------
Should you have any spare time, briefly describe how you would extend the application to take into account other animals that may co-exist within the field, such as cows or goats.

Good luck!

## My Comments

This test demonstrates using object oriented javascript programming to manipulate a data structure containing an array of Sheep objects.

The web page displays 4 buttons and a text entry field allowing the user to add, brand and breed sheep.

Adding a sheep takes the text in the Name entry field and creates a sheep, with its sex determined by the button pressed: (F) or (M).

Branding a sheep brands a sheep at random, turning it green. 

Breeding a sheep selects two random sheep and attempts to impregnate the female (50% chance), spawning a new sheep in the field (50% chance to be male or female). Branded sheep cannot be bred.

>_Use common sense to define your rules about which sheep can breed with each other_

I’m unfamiliar with the social stigmas of sheep society, so sheep may inbreed. In order to prevent this and to allow for cows and pigs to coexist in the field, I would change the data structure to have a base Animal class, and use the component design pattern to give male and females their respective breeding capabilities as well as species specific functionality. 

Animals would contain an array of their children and to prevent inbreeding/interbreeding an algorithm  would test for a suitable distance in the tree.

I’d also use a unit testing framework to test the javascript functionality.
