import { styled } from "styled-components";


export const Container = styled.p`

color: ${( { theme } ) => theme.COLORS.LIGHT_300};
font-size: ${( { size } ) => size};
font-weight: ${( { weight } ) => weight};
font-family: 'Poppins', sem serifa;
text-align: ${( { align } ) => align};

`