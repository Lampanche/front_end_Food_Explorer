import { styled } from "styled-components";


export const Container = styled.div`

  display: flex;
  align-items: center;
  gap: 0.6rem;

  span
  {
    font-family: 'Poppins', sem serifa;
    font-size: 2.4rem;
    font-weight: 400;
    color: ${( { theme } ) => theme.COLORS.LIGHT_300};
  }

`