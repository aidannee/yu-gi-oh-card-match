# Yu-Gi-Oh Card Match

This project is a card flipping game built using Tailwind CSS and React. The game fetches card image data from a JSON file named `yugiohcollection.json`, containing a collection of over 20,000 cards.

![Card Game](https://cdnb.artstation.com/p/assets/images/images/033/154/035/large/alexander-londono-angola-57-sin-titulo-20200625174301e4r45t5.jpg?1608586924)

## Overview

The logic of the card game is implemented in the `Cards.js` component. The main functionalities include:

- Flipping cards to reveal their images.
- Comparing flipped cards and checking for matches.
- Dynamically updating the game state when all cards are matched.

### Game Logic

The `Cards.js` component utilizes React state and `useEffect` for handling card flipping, comparison, and game completion logic. The main logic involves setting up cards, handling their states (comparing, matched), and managing game completion.

### Card Flip Animation

The CSS file `card-flip.css` contains the animations used for flipping the cards when they are compared.

## Getting Started

To run this project locally:

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the application using `npm start` or `yarn start`.

## Usage

The game presents a grid of cards that are flipped by clicking on them. The objective is to match pairs of cards until all cards are successfully paired.

## Credits

- Tailwind CSS: [Tailwind CSS](https://tailwindcss.com/)
- React: [React](https://reactjs.org/)
- Card Data Source: [Yu-Gi-Oh! Collection](yugiohcollection.json)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to contribute or report issues by creating a pull request or raising an issue in the repository!
