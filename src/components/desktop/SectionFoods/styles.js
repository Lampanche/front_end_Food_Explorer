import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.section`

  position: relative;

  h2
  {
    font-family: "Poppins", sem serifa;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 2.3rem;
    font-weight: 500;
  }

  .wrappedFoodCards
  {
    max-width: 112.2rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    display: flex;
    gap: 2.7rem;
    
  }

  .wrappedBtnCarrosselLeft
  {
    background-color: ${({ theme }) => theme.COLORS.GRADIENT_100};
    width: 27.8rem;
    height: 44.8rem;
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 1;

    button
    {
      margin-left: 3.025rem;
      z-index: 2;
    }

  }

  .wrappedBtnCarrosselRight
  {
    background-color: ${({ theme }) => theme.COLORS.GRADIENT_100};
    width: 27.8rem;
    height: 44.8rem;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 1;

    button
    {
      margin-right: 3.025rem;
      z-index: 2;
    }

  }

  ::-webkit-scrollbar
  {
    display: none;
  }

  @media ${breakpoints.homeDesktopTransition}
  {

    h2
    {
      font-size: 2.6rem;
    }

    .wrappedFoodCards
    {
      max-width: 97rem;
      
    }

    .wrappedBtnCarrosselLeft
    {
      width: 20rem;
    }

    .wrappedBtnCarrosselRight
    {
      width: 20rem;
    }

  }
  
`