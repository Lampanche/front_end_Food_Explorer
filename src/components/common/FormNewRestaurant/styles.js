import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`

  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;


  > button
  {
    align-self: flex-start;
  }

  
  .wrappedTitle
  {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    h1
    {
      color: ${({ theme }) => theme.COLORS.LIGHT_100 };
      font-family: "Poppins", sem serifa;
      font-weight: 700;
      font-size: 3.2rem;
    }

    svg
    {
      width: 5rem;
      height: 5rem;
      fill: ${({ theme }) => theme.COLORS.TOMATO_100 } ;
    }

    @media ${breakpoints.formsRestaurantsTransitionDesktop}
    {

      h1
      {
        font-size: clamp(2rem, 2rem + 1vw, 3.2rem);
      }

      svg
      {
        width: clamp(3.2rem, 3.6rem + 1vw, 5rem);
        height: clamp(3.2rem, 3.6rem + 1vw, 5rem);
      }

    }

  }

  form
  {
    width: 100rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > button
    {
      background-color: ${( { theme } ) => theme.COLORS.TOMATO_400};
      padding:  1.2rem 2.4rem;
      border-radius: 0.5rem;
      width: 17.2rem;
      height: 4.8rem;
      color: ${( { theme } ) => theme.COLORS.LIGHT_100};
      font-family: "Poppins", sem serifa;
      font-size: 1.4rem;
      align-self: flex-end;

    }

    @media ${breakpoints.formsRestaurantsTransitionDesktop}
      {

        align-items: center;
        width: 80vw;
      
        button
        {
          width: 50%;
          align-self: auto;
        }

      }

  }

  .wrappedInputs
  {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    @media ${breakpoints.formsRestaurantsTransitionDesktop}
    {
      flex-direction: column;
      width: 100%;

    }

  }

  @media ${breakpoints.formsRestaurantsTransitionDesktop}
  {
    align-items: center;
  }


`