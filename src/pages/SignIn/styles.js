import { styled } from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  main
  { 
    height: 100vh;
    padding-top: 15.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.3rem;

    @media ${breakpoints.titleAppMobile}
    {
      .wrappedTitleAndForm
      {
        display: flex;
        flex-direction: column;
        gap: 7.3rem;
      }
    }

    @media ${breakpoints.titleAppDesktopAndTransition}
    {
      
      padding: 0;

      .wrappedTitleAndForm
      {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 30.6rem;
      }
    }

    @media ${breakpoints.contentSignInTransitionDesktop}
    {
      .wrappedTitleAndForm
      {
        padding: 0 5rem;
      }
    }

  }


`