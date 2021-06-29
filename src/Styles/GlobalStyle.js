import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

#root {
  font-family: 'DM Sans', sans-serif;
}

*{
  box-sizing: border-box;
}

input {
border: none;
outline: none;
}

button {
border-style: none;
outline: none;
}

a {
text-decoration: none;
}
`;

export default GlobalStyle;
