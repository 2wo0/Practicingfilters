import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

#root {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
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
