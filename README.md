# Personal Comments

I thought the assignment wants to show I know how to use event binding and input and output annotations, as well as how to nest components, so I made sure to do those.

I use a class called TileState to enforce the rules of a game of checkers, in addition to keeping track of the number of times one clicks on a tile.

I don't really know how much I should document here, but I use angular material grid list to create the grid, and use a nested component to show that I could do this the way it was intended. I have a variable that will determine the size of the NxN grid in the checkerboard component. As long as that number is even the game will work. The click events should work regardless if you throw try catches around everything.

I added a couple functions to display the list of clicked squares or whatnot cause I forgot that was a requirement of this technical assignment. While I did that in less than a few minutes, I was fairly lazy with how I did it as I didn't plan for that behavior and was more excited to see how fast I could make a checkers game.

# Checkerboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
