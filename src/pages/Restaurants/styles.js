import { styled } from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-areas: 
  
  "header"
  "main"
  "footer"
  
  ;
  grid-template-rows: max-content;

  header
  {
    grid-area: header;
  }

  main
  {
    display: flex;
    justify-content: center;
    grid-area: main;

    .content
    {
      margin: 3rem 0 0;
      display: flex;
      flex-direction: column;
      gap: 3rem;

      min-width: 110rem;

      h1
      {
        color: ${({ theme }) => theme.COLORS.LIGHT_100 };
        font-family: "Poppins", sem serifa;
        font-weight: 700;
        font-size: 3.2rem;
      }

      button
      {

        display: flex;
        align-items: center;

        svg
        {
          width: 5rem;
          height: 5rem;
          fill: ${({ theme }) => theme.COLORS.TOMATO_100 } ;
        }

        span
        {
          color: ${({ theme }) => theme.COLORS.LIGHT_300 };
          font-family: "Poppins", sem serifa;
          font-weight: 700;
          font-size: 2.8rem;
        }

      }

    }

    .contentRestaurants
    {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }


    .listRestaurants
    {
      max-height: 40rem;
      width: 80rem;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;
      gap: 2rem;
      padding: 0 3rem;

    }


    @media ${breakpoints.restaurantsTransitionDesktop}
    {
      .content
      {
        align-items: center;
        min-width: 80rem;
      }

      .contentRestaurants
      {
        align-items: center;
      }

    }

    @media ${breakpoints.restaurantsTransitionTablet}
    {
      .content
      {
        align-items: center;
        min-width: 0;
      }

      .contentRestaurants
      {
        align-items: center;
      }

      .listRestaurants
      {
        width: 50rem;
      }

    }

    @media ${breakpoints.restaurantsTransitionMobile}
    {

      .content
      {
        align-items: center;
        min-width: 0;

        h1
        {
          font-size: 2.4rem;
        }

        button
        {
          svg
          {
            width: 3rem;
            height: 3rem;
          }

          span
          {
            font-size: 1.8rem;
          }

        }

      }

      .contentRestaurants
      {
        align-items: center;
      }

      .listRestaurants
      {
        width: 30rem;
      }

    }

  }

  footer
  {
    grid-area: footer;
    align-self: end;
  }


`