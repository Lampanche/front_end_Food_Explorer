import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 3.2rem 0 11.6rem 0;

  form
  {
    display: flex;
    flex-direction: column;
    gap: 3.4rem;
    max-width: 112rem;

    > button
      {
        align-self: flex-end;
      }

    @media ${breakpoints.newDesktopTransition}
    {
      max-width: 80rem;
    }  

  }

  .wrappedInputs
  {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  

` 