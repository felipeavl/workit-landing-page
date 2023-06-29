# Frontend Mentor - Workit landing page solution

This is a solution to the [Workit landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/workit-landing-page-2fYnyle5lu). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

[Live Site URL] (https://felipeavl.github.io/workit-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Throughout the development of this project, I deepened my understanding of responsive design, including CSS Grid and Flexbox. I also learned to effectively use styled-components in React for component-based styling.

For instance, here is an example of a React styled component:

```jsx
export const HeroWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  background-image: url(${process.env.PUBLIC_URL + "/assets/bg-pattern-1.svg"}),
    url(${process.env.PUBLIC_URL + "/assets/bg-pattern-2.svg"});
  background-position: top 116px left 0, right 0 bottom -235px;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.white};
  height: 730px;
  position: relative;
`;
```

### Continued development

In future projects, I aim to focus more on state management in React, further mastering styled-components, and improving the overall performance of my web applications. I also plan to explore more about animations and transitions to enhance the UX of my projects.

## Author

- Frontend Mentor - [@felipeavl](https://www.frontendmentor.io/profile/felipeavl)
