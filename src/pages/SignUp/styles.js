import { styled } from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  main
  { 
    padding-top: 15.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.3rem;

    @media ${breakpoints.contentSignInTransition}
    {
      flex-direction: row;
      gap: 30.614rem;
      justify-content: center;
        
    }
    
  }


`