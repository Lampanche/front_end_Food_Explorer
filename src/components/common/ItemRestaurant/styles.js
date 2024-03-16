import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`

  background-color: ${({ theme }) => theme.COLORS.DARK_800 } ;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4rem;
  border-radius: 0.8rem;
  padding: 1.6rem 2.4rem;

  button
  {
    padding: 1.2rem 3.2rem;
    background-color: ${( { theme } ) => theme.COLORS.TOMATO_100};
    color: ${( { theme } ) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sem serifa;
    font-weight: 500;
    border-radius: 0.5rem;
  }

  @media ${breakpoints.restaurantsTransitionTablet}
  {
    button
    {
      padding: 0.8rem 2.2rem;
      font-size: 1.2rem;
    }
  }

  @media ${breakpoints.restaurantsTransitionMobile}
  {

    justify-content: center;
    gap: 2rem;

    button
    {
      padding: 0.6rem 1.8rem;
      font-size: 1.4rem;
    }
  }


`

export const WrappedInfoRestaurant = styled.div`

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;

  a
  {
    color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    font-family: "Poppins", sem serifa;
    font-weight: 700;
    font-size: 3.2rem;
  }

  img
  {
    border-radius: 99%;
    width: 15rem;
    height: 15rem;

    object-fit: cover;

  }

  @media ${breakpoints.restaurantsTransitionTablet}
  {
    img
    {
      width: 6rem;
      height: 6rem;
    }

    a
    {
      font-size: 2rem;
    }

  }


  @media ${breakpoints.restaurantsTransitionMobile}
  {

    gap: 2rem;
    justify-content: center;

    img
    {
      width: 5rem;
      height: 5rem;
    }

    a
    {
      font-size: 1.6rem;
    }
  }

`



  

  

