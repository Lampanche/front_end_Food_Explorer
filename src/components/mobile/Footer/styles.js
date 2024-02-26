import { styled } from "styled-components";


export const Container = styled.footer`

  width: 100%;
  height: 7.7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${( { theme } ) => theme.COLORS.DARK_600};

  div
  {
    display: flex;
    gap: 0.647rem;
    align-items: center;

    > span
    {
      font-family: 'Roboto', sem serifa;
      font-size: 1.526rem;
      font-weight: 700;
      color: ${( { theme } ) => theme.COLORS.LIGHT_700};
    }

  }

  span
  {
    font-family: 'DM Sans', sem serifa;
    font-size: 1.2rem;
    color: ${( { theme } ) => theme.COLORS.LIGHT_200};
  }

`