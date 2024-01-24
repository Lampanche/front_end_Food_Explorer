import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root
  {
    font-size: 62.5%;
  }

  body
  {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  a
  {
    text-decoration: none;
  }

  a:hover
  {
    filter: brightness(0.8)
  }

  button
  {
    border: none;
    background: none;
  }

  button:hover
  {
    filter: brightness(0.8)
  }


  button, a
  {
    cursor: pointer;
    transition: filter 0.2s;
  }



`