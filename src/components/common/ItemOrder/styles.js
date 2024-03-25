import { styled } from "styled-components";


export const Container = styled.div`

  display: flex;
  align-items: center;
  gap: 1.05rem;

  .wrapped
  {
    display: flex;
    flex-direction: column;

    > button
    {
      font-family: "Roboto", sem serifa;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
      align-self: flex-start;
    }

  }

  .infos
  {
    display: flex;
    align-items: center;
    gap: 1rem;

    :first-child
    {
      font-family: "Poppins", sem serifa;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    :last-child
    {
      font-family: "Roboto", sem serifa;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

  }

  

`