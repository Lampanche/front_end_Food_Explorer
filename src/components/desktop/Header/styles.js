import { styled } from "styled-components"

import { breakpoints } from "../../../styles/breakpoints"

export const Container = styled.div`

  width: 100%;
  height: 10.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 2.4rem 2.4rem 0;

    > div
    {
      width: 100%;
      display: flex;
      gap: 3.2rem;
      justify-content: center;

      > a
      {
        display: flex;
        align-items: center;
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
          }

          .btnUser
          {
            background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

            border-radius: 0.5rem;

            display: flex;
            align-items: center;
            gap: 0.8rem;

            padding: 1.2rem 3.2rem;

            color:${({ theme }) => theme.COLORS.LIGHT_100};
            font-family: 'Poppins', sem serifa;
            font-size: 1.4rem;
            font-weight: 400;
          }

      }

      .btnAdmin
      {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

        border-radius: 0.5rem;

        padding: 1.2rem 3.2rem;

        color:${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sem serifa;
        font-size: clamp(0.8rem, 1vw, 1.4rem);
        font-weight: 400;
      }    

      @media ${breakpoints.headerBtn}
      {
        .btnAdmin
        {
          padding: 0.4rem 1.5rem;
        }

        .wrappedBtnAndLink
        {
            .btnUser
            {

              padding: 0.8rem 1.8rem;


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

      @media ${breakpoints.headerBtnReset} 
      {
        .btnAdmin
        {
          padding: 1.2rem 3.2rem;
        }

        .wrappedBtnAndLink
        {
            .btnUser
            {

              padding: 1.6rem 3.2rem;


              img
              {
                height: 2.2rem;
                width: 2.7rem;
              }

              span
              {
                font-size: 1.4rem;

                > span
                {
                  font-size: 1.4rem;
                }

              }

            }
        }
        
      }

    }

`
