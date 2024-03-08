import { styled } from "styled-components";


export const Container = styled.section`

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
    display: flex;
    gap: 2.7rem;

    
  }

  ::-webkit-scrollbar
  {
    display: none;
  }
  
`