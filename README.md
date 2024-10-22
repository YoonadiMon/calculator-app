# Frontend Mentor - Calculator App

This is my first challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). 


## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [https://yoonadimon.github.io/calculator-app/](https://yoonadimon.github.io/calculator-app/)

## My process

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<input id="themes-choice" type="range" min="1" max="3">
```

```js
calArea.addEventListener("click",(e)=>{
  const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  console.log(`numArr: ${numArr}, operatorArr: ${operatorArr}, tempResult: ${tempResult}`);
})
```
```js
operatorArr.shift();
```

### Useful resources

- [Stackoverflow](https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons) - This helped me figure out how to add an event listener for multiple buttons.

## Acknowledgments

Many thanks to Frontend Mentor.
