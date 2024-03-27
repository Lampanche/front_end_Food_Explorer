import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.header`

  width: 100%;
  height: 10.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;

    > div
    {
      width: 100%;
      display: flex;
      gap: 3.2rem;
      align-items: center;
      justify-content: center;

      > a
      {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .wrappedLogo
      {
        display: flex;
        flex-direction: column;

        div
        {
          display: flex;
          align-items: center;
          gap: 0.8rem;

          span
          {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-family: 'Roboto', sem serifa;
            font-size: 2.4rem;
            font-weight: 700;
            white-space: nowrap;
          }

        }

        > span
        {
          align-self: flex-end;
          color: ${({ theme }) => theme.COLORS.CAKE_200};
          font-size: 1.2rem;
          font-family: 'Roboto', sem serifa;
        }

      }

      .wrappedBtnAndLink
      {

        display: flex;
        align-items: center;
        gap: 3.2rem;

          a
          {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-family: 'Roboto', sem serifa;
            white-space: nowrap;

            @media ${breakpoints.headerBtnTransitionDesktop}
            {
              font-size: 1.4rem;
            }

          }

          .btnUser
          {
            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

            height: 5.6rem;
            border-radius: 0.5rem;

            display: flex;
            align-items: center;
            gap: 0.8rem;

            padding: 1.2rem 3.2rem;

            color:${({ theme }) => theme.COLORS.LIGHT_100};
            font-family: 'Poppins', sem serifa;
            font-size: 1.4rem;
            font-weight: 400;

            @media ${breakpoints.headerBtnTransitionDesktop}
            {
              
                padding: 1rem 2rem;
                height: 4.5rem;

                img
                {
                  height: 1.8rem;
                  width: 2rem;
                }

                span
                {
                  font-size: 1rem;

                  > span
                  {
                    font-size: 1rem;
                  }

                }
 
            }

          }

      }

      .btnAdmin
      {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        width: 21.6rem;
        border-radius: 0.5rem;

        padding: 1.2rem 3.2rem;

        
        color:${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sem serifa;
        font-size: clamp(0.8rem, 1vw, 1.4rem);
        font-weight: 400;

        @media ${breakpoints.headerBtnTransitionDesktop}
        {
          width: 18rem;
        }

      }
      

    }


`
