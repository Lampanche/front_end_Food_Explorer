import styled from "styled-components"

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  > .wrappedMainText
  {
    background-color: ${( { theme } ) => theme.COLORS.GRADIENT_200};
    width: 37.6rem;
    height: 12rem;
    margin: 4.4rem 1.6rem 0 3.6rem ;
    border-radius: 0.292rem;
    
    display: grid;
    grid-template-areas: 
    "img textLine"
    ;
    grid-template-columns: 15rem 1fr;

    img
    {
      position: relative;
      grid-area: img;
      top: -2.9rem;
      left: -3rem;
      width: 19.1rem;
      height: 14.9rem;
    }
    
    .wrappedText
    { 
      margin-right: 3rem;
      grid-area: textLine;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      h1
      {
        font-family: 'Poppins', sem serifa;
        font-size: 1.8rem;
        font-weight: 700;
        color: ${( { theme } ) => theme.COLORS.LIGHT_300};
        margin-top: 3.6rem;
      }

      p
      {
        font-family: 'Poppins', sem serifa;
        font-size: 1.2rem;
        font-weight: 400;
        color: ${( { theme } ) => theme.COLORS.LIGHT_300};
      }
    }

  }


`