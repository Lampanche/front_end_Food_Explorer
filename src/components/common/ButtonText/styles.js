import { styled } from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`

  font-family: "Poppins", sem serifa;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  text-align: center;

`