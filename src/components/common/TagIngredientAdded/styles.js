import { styled } from "styled-components";


export const Container = styled.div`

  background-color: ${( { theme } ) => theme.COLORS.LIGHT_600};
  padding: 0.5rem 1.6rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  span
  {
    font-family: 'Roboto', sem serifa;
    color: ${( { theme } ) => theme.COLORS.LIGHT_100};
  }

`