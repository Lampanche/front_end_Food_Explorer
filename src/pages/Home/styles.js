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

  .wrappedSections
  {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    justify-content: center;
    margin-top: 6.2rem;
  }

  .wrappedMainText
  {
    background-color: ${( { theme } ) => theme.COLORS.GRADIENT_200};
    max-width: 37.6rem;
    height: 12rem;
    margin: 4.4rem 1.6rem 0 3.6rem ;
    border-radius: 0.292rem;
    position: relative;

    img
    {
      position: absolute;
      top: -2.9rem;
      left: -3rem;
      width: 19.1rem;
      height: 14.9rem;
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

  }



`
