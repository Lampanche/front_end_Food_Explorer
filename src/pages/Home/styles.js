import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  main
  {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;

  }


  @media ${breakpoints.homeMobileTransitionTablet}
    {
      main
      {
        align-items: center;
      }
    }

 


`
