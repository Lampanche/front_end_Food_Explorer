import { styled } from "styled-components";


export const Container = styled.button`

  width: ${( { width } ) => width};
  background-color: ${( { theme } ) => theme.COLORS.TOMATO_400};
  padding:  ${( { padV } ) => padV}  ${( { padH } ) => padH};
  border-radius: 0.5rem;
  height: 4.8rem;
  color: ${( { theme } ) => theme.COLORS.LIGHT_100};
  font-family: "Poppins", sem serifa;
  font-size: 1.4rem;

`




