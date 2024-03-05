import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`

  display: flex;
  align-items: center;
  gap: 1.074rem;
  margin-top: -9.256rem;

  h1
  {
    margin: 0;
    padding: 0;

    font-family: "Roboto", sem serifa;
    font-size: 4.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  
  @media ${breakpoints.contentSignInTransitionDesktop} 
  {
    h1
    {
      font-size: 3rem;
    }
  
    img
    {
      width: 3.5rem;
      height: 4rem;
    }
  }

  

`