import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`

  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 4.2rem;

  > button
  {
    align-self: flex-start;
  }
  
  .wrappedContentDetailsFood
  {
    display: flex;
    align-items: center;
    gap: 4.736rem;
    grid-area: main;

  }

  .wrappedTextAndBtns
  {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
  }

  .wrappedContentText
  {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 68.7rem;

    @media ${breakpoints.detailsDesktopTransition}
    {
      max-width: 40rem;
    }

  }

  .wrappedTags
  {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
  }

  .wrappedBtns
  {
    grid-area: btns;
    display: flex;
    gap: 3.3rem;
  }

`