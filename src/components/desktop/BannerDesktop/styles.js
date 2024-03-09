import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`

  width: 112.0rem;
  height: 26.0rem;
  border-radius: 0.8rem;
  background-color: ${( { theme } ) => theme.COLORS.GRADIENT_200};
  position: relative;
  margin-top: 16.4rem;


  img
  {
    position: absolute;
    right: 53.4rem;
    top: -13.8rem;
  }

  .wrappedText
  {
    margin: 8.8rem 0 0 59.8rem;

    h1
    {
      font-family: 'Poppins', sem serifa;
      font-size: 4rem;
      font-weight: 500;
      color: ${( { theme } ) => theme.COLORS.LIGHT_300};
    }

    p
    {
      font-family: 'Roboto', sem serifa;
      color: ${( { theme } ) => theme.COLORS.LIGHT_300};
    }

  }

  @media ${breakpoints.homeDesktopTransition}
  {
    width: 90rem;
    height: 22rem;

    img
    {
      right: 40.1rem;
      top: -12rem;
    }

    .wrappedText
    {

      margin-left: 50rem;
      margin-top: 8rem;

      h1
      {
        font-size: 3rem;
      }

      p
      {
        font-size: 1.4rem;
      }

    }

  }

`