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

  .wrappedContentHamMenu
  {
    margin-top: 3.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
    width: 37.2rem;
  }

  .wrappedInput
  {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    background-color: ${( { theme } ) => theme.COLORS.DARK_900};
    width: 37.2rem;
    height: 4.8rem;
    border-radius: 0.5rem;

    img
    {
      margin-left: 1.4rem;
    }

    input
    {
      background: none;
      padding: 1.2rem 1.4rem;
      border: none;
      width: 100%;
      color:${({ theme }) => theme.COLORS.LIGHT_100};

      ::placeholder
      {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        font-family: "Roboto", sem serifa;
      }

    }

  }

  .wrappedHamMenuOptions
  {
    display: flex;
    flex-direction: column;
  }

  .wrappedBtnOptions
  {
    padding: 1rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

    span
    {
      font-family: "Poppins", sem serifa;
      font-size: 2.4rem;
      font-weight: 300;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

    }

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

      @media ${breakpoints.homeMobileHeader}
      {
        h1
        {
          font-size: 1.4rem;
        }
      }

    }

  }

  @media ${breakpoints.homeMobileTransicaoTablet}
    {
      main
      {
        align-items: center;
      }
    }

  @media ${breakpoints.homeMobileTransicaoTabletElements}
  {
    .wrappedMainText
    {
      max-width: 45rem;
      height: 14rem;

      img
      {
        width: 22rem;
        height: 16rem;
        top: -2rem;
      }

      .wrappedText
      {

        margin-left: 18rem;

        h1
        {
          font-size: 2.2rem;
        }

        p
        {
          font-size: 1.6rem;
        }

      }

    }      
  }


`
