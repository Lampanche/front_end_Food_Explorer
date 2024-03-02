import { styled } from "styled-components";


export const Container = styled.button`

  width: 17.2rem;
  padding: 1.2rem 2.4rem;
  background-color: ${( { theme } ) => theme.COLORS.TOMATO_400};
  border-radius: 0.5rem;

  color: ${( { theme } ) => theme.COLORS.LIGHT_100};
  font-family: "Poppins", sem serifa;
  font-size: 1.4rem;

`