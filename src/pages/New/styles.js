import { styled } from "styled-components";


export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-areas: 
  
  "header"
  "main"
  "footer"
  
  ;
  grid-template-rows: max-content;

  header
  {
    grid-area: header;
  }

  main
  {
    display: flex;
    justify-content: center;
    grid-area: main;
  }

  footer
  {
    grid-area: footer;
    align-self: end;
  }

`