import { styled } from "styled-components"

export const Container = styled.div`

  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > div
  {
    width: 90%;

    margin: 0 auto;
    padding: 5.4rem 0 0;

    display: flex;
    gap:1.6rem;
    align-items: center;
    justify-content: center;
    
      a
      {

        width: 27.846rem;

        div
        {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          width: 100%;

            span:nth-child(even)
            {
              color: ${({ theme }) => theme.COLORS.LIGHT_100};
              font-family: 'Roboto', sem serifa;
              font-size: 2.116rem;
              font-weight: 700;
            }

            span:nth-child(odd)
            {
              color: ${({ theme }) => theme.COLORS.CAKE_200};
              font-size: 1.2rem;
              font-family: 'Roboto', sem serifa;
            }

        }

      }

      > div:nth-child(odd)
      {
        position: relative;
      }

      > div button:nth-child(even)
      {
        position: absolute;
        top: -1rem;
        right: -0.9rem;

        font-family: 'Poppins', sem serifa;
        font-size: 1.4rem;

        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        border-radius: 99%;
        width: 2rem;
        height: 2rem;
      }

  } 


  

 

`

