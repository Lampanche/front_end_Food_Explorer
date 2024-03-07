import { styled } from "styled-components";


export const Container = styled.span`
  
  font-family: 'Roboto', sem serifa;
  color: ${( { theme } ) => theme.COLORS.CAKE_200};
  font-size: ${({ fontSize }) => fontSize};

`