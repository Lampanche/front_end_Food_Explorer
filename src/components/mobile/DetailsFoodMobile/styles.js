import { styled } from "styled-components";



export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  max-width: 31.6rem;
  margin: 1.6rem 0 3.357rem;

  .wrappedBtnBack
  {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    align-self: flex-start;
    margin-top: 2.057rem;

    span
    {
      font-family: 'Poppins', sem serifa;
      font-size: 2.4rem;
      font-weight: 400;
      color: ${( { theme } ) => theme.COLORS.LIGHT_300};
    }
  }

  .wrappedInfosAndBtns
  {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
  }

  .wrappedInfos
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

  .wrappedTags
  {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
    padding: 0 2.5rem;
    justify-content: center;
  }


  .wrappedBtnsInclude
  {
    display: flex;
    gap: 1.6rem;
    align-items: center;

    > button
    {
      padding: 0.811rem 1.622rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.541rem;
      background-color: ${( { theme } ) => theme.COLORS.TOMATO_100};
      border-radius: 0.338rem;
      width: 18.8rem;
      height: 3.786rem;

      span
      {
        font-family: 'Poppins', sem serifa;
        font-size: 0.946rem;
        font-weight: 100;
        color: ${( { theme } ) => theme.COLORS.LIGHT_100};
      }
    }

  }

  .wrappedBtnMinusAndPlus
  {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    span
    {
      font-family: 'Roboto', sem serifa;
      font-size: 2.263rem;
      font-weight: 700;
      color: ${( { theme } ) => theme.COLORS.LIGHT_300};
    }

  }

`