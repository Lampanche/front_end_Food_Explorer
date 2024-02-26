import { styled } from "styled-components";


export const Container = styled.button`

  padding: 1.2rem 3.2rem;
  background-color: ${( { theme } ) => theme.COLORS.TOMATO_100};
  color: ${( { theme } ) => theme.COLORS.LIGHT_100};
  font-family: "Poppins", sem serifa;
  font-weight: 100;
  border-radius: 0.5rem;
`