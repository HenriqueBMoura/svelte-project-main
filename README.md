# Project

Your task is to implement a simple UI as a static Svelte app (no API communication required).

[Figma file outlining the design](https://www.figma.com/file/G0YXZEYqqk6iywEm6CsCJi/Frontend-take-home-project).

Time limit: 4 hours

## Requirements

- Your implementation should use the Svelte framework
- Use Tailwind CSS for styling ([a Tailwind configuration file with the color scheme is provided in this repository](/tailwind.config.cjs)).
- Try to follow the design as closely as possible - visual fidelity and attention to detail will be greatly appreciated!
- Your solution should be responsive and should work correctly on both mobile and desktop.
- The data used throughout the app should be randomly selected from a preset list of possible values for each type of data. There are 3 different data types: "coach", "lesson", and "replay". [The full list is provided in the data.js file.](/src/data.js)

This repository contains a template for a Svelte + Tailwind app which should have everything you need to get started (you can also use your own template if you'd like).

## Description

- On the top, there's a header displaying the selected lesson, which is an instance of the "lesson" data type. It shows an image of the lesson's game, the type of the lesson (in this case, always "Replay Review"), and the lesson title "M2K Ultimate Replay Review".

- Towards the top-right there's a "Randomize" button, which when clicked re-selects a new random model for all the data shown on the screen (coach, lesson, each of the replays).

- The area underneath the header should show the currently added replays. Each item in the list is an instance of the "replay" data type.

- If there are no replays, we should show the empty state instead.

- Clicking on the "Add more replays" button should push a new replay to the bottom of the list. When adding a replay, it should be randomly selected from the provided list of possible replays.

- Clicking the "Delete" button should remove the replay from the list.

- The right-hand side should show the selected coach (avatar, name, and title) and the order subtotal. The coach is an instance of the "coach" data type. The subtotal displays the total price, taking into account the base lesson price and the number of selected replays.

- If there are more than 2 replays selected, a 10% discount should be applied on the total order.
