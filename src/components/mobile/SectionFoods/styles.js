import { styled } from "styled-components";


export const Container = styled.section`

  margin-left: 2.4rem;

  h2
  {
    font-family: 'Poppins', sem serifa;
    font-size: 1.8rem;
    font-weight: 500;
    color: ${( { theme } ) => theme.COLORS.LIGHT_300};
    margin-bottom: 2.4rem;
  }

  .wrappedFoodCards
  {
    display: flex;
    gap: 1.6rem;
    overflow-x: auto;
    max-width: 43.6rem;

  }

  ::-webkit-scrollbar
    {
      display: none;
    }


`

