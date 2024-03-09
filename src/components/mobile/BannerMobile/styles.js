import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`

  background-color: ${( { theme } ) => theme.COLORS.GRADIENT_200};
  width: 37.6rem;
  height: 12rem;
  margin: 4.4rem 1.6rem 0 3.6rem ;
  border-radius: 0.292rem;
  position: relative;

  img
    {
      position: absolute;
      top: -2.9rem;
      left: -3rem;
    }
    
    .wrappedText
    { 
      margin-top: 3.6rem;
      margin-left: 15.3rem;

      h1
      {
        font-family: 'Poppins', sem serifa;
        font-size: 1.8rem;
        font-weight: 700;
        color: ${( { theme } ) => theme.COLORS.LIGHT_300};
      }

      p
      {
        font-family: 'Poppins', sem serifa;
        font-size: clamp(0.6rem, 0.8rem + 1vw ,1.2rem);
        font-weight: 400;
        color: ${( { theme } ) => theme.COLORS.LIGHT_300};
      }

    }


    @media ${breakpoints.homeMobileTransitionTabletElements}
  {
      width: 55rem;
      height: 16rem;

      img
      {
        top: -2.4rem;
        left: -3.3rem;
      }

      .wrappedText
      {

        margin: 4.5rem 0 0 28.5rem;

        h1
        {
          font-size: 2rem;
        }

        p
        {
          font-size: 1.2rem;
        }

      }

         
  }


`