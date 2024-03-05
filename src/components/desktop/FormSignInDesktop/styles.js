import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";


export const Container = styled.div`

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 6.4rem;
  border-radius: 1.6rem;

  form
  {
    min-width: 34.8rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  @media ${breakpoints.contentSignInTransition}
  {
    margin-top: -2.276rem;
  }

  @media ${breakpoints.contentSignInTransitionDesktop}
  {
    form
    {
      min-width: 25rem;
    }
  }

`