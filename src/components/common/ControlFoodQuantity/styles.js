import { styled } from "styled-components";


export const Container = styled.div`

  display: flex;
  align-items: center;
  gap:1.6rem;

  button
  {
    display: flex;
  }

  span
  {
    font-family: 'Roboto', sem serifa;
    color: ${( { theme } ) => theme.COLORS.LIGHT_300};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-size: ${({ fontSize }) => fontSize};
  }

`