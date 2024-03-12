import { styled } from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`

color: ${( { theme } ) => theme.COLORS.LIGHT_300};
font-size: ${( { size } ) => size};
font-weight: ${( { weight } ) => weight};
font-family: 'Poppins', sem serifa;
`