import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {


--text-colot-dark-blue: hsl(238, 29%, 16%);
--text-color-soft-red: hsl(14, 88%, 65%);

--bg-soft-violet: rgba(175, 103, 233, 1);
--bg-soft-blue: rgba(101, 101, 231, 1);

--text-color-dark-grayish-blue: hsl(237, 12%, 33%);
--text-color-grayish-blue: hsl(240, 6%, 50%);

--divider-color-light-grayish-blue: hsl(240, 5%, 91%);

--color-neutral-white: hsl(0, 0%, 100%);
--color-neutral-off-white: hsl(0, 0%, 94%);
--color-neutral-light-gray: hsl(0, 0%, 86%);
--color-neutral-smokey-gray: hsl(0, 1%, 44%);
--color-neutral-off-black: hsl(0, 0%, 8%);

 
}
/* 
#root{
  width: 100vw;
  height: 100vh;
} */

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
   height: 100vh;
}

body {
  font-family: 'Kumbh Sans', sans-serif;;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 16px;
  background: var(--color-neutral-light-gray);
  height: 100vh;
  /* display  :flex ;
justify-items: center; */
/* 
 display: grid;
  place-content: center;
  
  min-height: 100vh; */

  
}

input{
    font-size: 3.2rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

/* img {
  max-width: 100%; */

  /* For dark mode */
  //filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
//}

/*
FOR DARK MODE


*/
`;
export default GlobalStyles;
