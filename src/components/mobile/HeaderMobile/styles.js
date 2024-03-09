import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`

  width: 100%;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 5.6rem 0 0;

  > .wrappedHeader
  {
    display: flex;
    gap:1.6rem;
    align-items: center;
    justify-content: center;

    .btnActiveHamMenu
    {
      width: 2.4rem;
      height: 1.8rem;
    }
    
      a
      {
        width: 27.874rem;

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

      @media ${breakpoints.homeMobileHeader}
      {
    
        a
        {
          width: 22rem;
        }


      }

      > div:nth-child(odd)
      {
        position: relative;
        width: 2.7rem;
        height: 2.2rem;
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

  .wrappedHamMenuActive
  {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    button
    {
      margin-left: 2.8rem;
    }

    span
    {
      font-family: "Roboto", sem serifa;
      font-size: 2.16rem;
      color: ${ ( { theme } ) => theme.COLORS.LIGHT_100 };
    }

  }
  
 

`

