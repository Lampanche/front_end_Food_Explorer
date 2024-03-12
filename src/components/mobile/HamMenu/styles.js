import { styled } from "styled-components";

export const Container = styled.div`

  margin: 3.6rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  width: 37.2rem;


  .wrappedInput
    {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      background-color: ${( { theme } ) => theme.COLORS.DARK_900};
      width: 37.2rem;
      height: 4.8rem;
      border-radius: 0.5rem;

      img
      {
        margin-left: 1.4rem;
      }

      input
      {
        background: none;
        padding: 1.2rem 1.4rem;
        border: none;
        width: 100%;
        color:${({ theme }) => theme.COLORS.LIGHT_100};

        ::placeholder
        {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
          font-family: "Roboto", sem serifa;
        }

      }

    }

    .wrappedHamMenuOptions
    {
      display: flex;
      flex-direction: column;

    }

    .wrappedBtnOptions
    {
      padding: 1rem 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      a
      {
        font-family: "Poppins", sem serifa;
        font-size: 2.4rem;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

      }

    }

    .wrappedBtnOptionsUser
    {

      padding: 1rem 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      span
      {
        font-family: "Poppins", sem serifa;
        font-size: 2.4rem;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

      }

    }


`