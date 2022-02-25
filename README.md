# Real Full Stack Take Home


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Design](#design-mock-up)
  - [Links](#links)
- [Getting Started](#)
  - [Server](#server)
  - [Frontend](#frontend)
  - [Testing](#testing)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge
A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau is rectangular and must be navigated by the rovers. A rover's position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North. In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).


Build a simple React frontend that communicates with a Node backend to achieve the following: 
- Provide a way to set the size of the plateau (the upper-right coordinates). The lower-left coordinates are assumed to be 0,0.
- Provide a way to take in a rover's position (x,y, cardinal direction (N,S,E,W))
- Provide a way to give the rover a series of instructions telling it which way to move on the plateau.
- Run the instructions and print out the final coordinates of the rover

**Example Input:**
- Plateau Size: 5 5
- Rover's Position: 1 2 N
- Rover Movement Instructions: LMLMLMLMM

**Expected Output:**
1 3 N

### Design Mock Up



### Links

- Repo URL: [https://github.com/sadiejay/real-fullstack-take-home](https://github.com/sadiejay/real-fullstack-take-home)


## Getting Started

- Make sure you have `yarn` installed on your machine. If you do not, please look at the following [installation instructions](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

Install all dependencies for the app:
```
yarn
```

### Server

- There is a basic NodeJS server set up(`server/server.js`). It utilizes [express](https://expressjs.com/).

To start running the server:
```
yarn server
```

### Frontend
To set up the frontend, make sure you're in the `client` directory. 

`client` is a React frontend project included for your use. We are not judging your CSS skills, but we do want to see an intuitive user experience. 

To setup and start the app run:
```
yarn client
```


## Testing
[Jest](https://jestjs.io/docs/getting-started) has been set up to run tests on both server and client code. Any test files you add must have the `.spec.js` appendix to be picked up by the test runner. 

Run `yarn test:client` to run frontend tests.

Run `yarn test:server` to run backend tests.

## My process
- Build cartesian coordiante system logic in JS
- Create a react component for the grid
  - this would allow for changes in the browser without refreshing
- Make grid interactive including:
    - size of grid
    - input the direction of point
    - display location of rover
- Do something with node backend
- Create tests
- Polish front-end
- Submit

### Built with

- JS
- React
- NodeJS
- Jest


### What I learned
 - I have a lot to learn about connecting the front and backend!



### Continued development
- I would like to play around with this to see if I can figure out the logic for the plateu


### Useful resources

- [Tiles and tilemaps overview](https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps) - This is what I initally thought to do. Some sort of title map, but then wondered how could I depict points.
- [How To Create a JavaScript TileMap For a 2D Game --  Youtube](https://www.youtube.com/watch?v=KsLChm2MIQY) - Watching this helped me see the potential cons of a tileMap.
- [vectorjs](https://vectorjs.org/examples/cartesian-coordinate-system/) - I was thinking to build out something like this to display the plateu as a coordinate system.
  - I would then want to make the size interactive with a input on the page and a function that takes that input and adjusts the map.
- [Mapbox GL JS docs](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector) 
- [RPG game with React / Redux / HTML5 — Part 1](https://levelup.gitconnected.com/rpg-game-with-react-redux-html5-part-1-build-a-tile-map-9144fd867830)
- [Building an Interactive Map with Mapbox & React](https://medium.com/geekculture/building-an-interactive-map-with-mapbox-react-f335384f4863) - 
- [Testing asynchronous and synchronous React components with Jest and Enzyme](https://medium.com/gitconnected/testing-asynchronous-and-synchronous-react-components-with-jest-and-enzyme-a979ab425aa1) - My resource for testing

## Author

- Github - [@sadiejay](https://github.com/sadiejay)
- Frontend Mentor - [@sadiejay](https://www.frontendmentor.io/profile/sadiejay)

## Acknowledgments

- VC community for support
