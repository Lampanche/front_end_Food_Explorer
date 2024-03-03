import { styled } from "styled-components";


export const Container = styled.button`

  width: 13.5rem;
  height: 4.8rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.5rem;
  background-color: ${( { theme } ) => theme.COLORS.DARK_800};

  color: ${( { theme } ) => theme.COLORS.LIGHT_100};
  font-family: "Poppins", sem serifa;
  font-size: 1.4rem;


`