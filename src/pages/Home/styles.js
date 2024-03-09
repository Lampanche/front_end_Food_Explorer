import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

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
    grid-area: main;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;

  }

  footer
  {
    grid-area: footer;
    align-self: end;
  }



  @media ${breakpoints.homeMobileTransitionTablet}
    {
      main
      {
        align-items: center;
      }
    }

 


`
