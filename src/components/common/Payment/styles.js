import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.section`

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 53rem;

  h2
  {
    font-family: "Poppins", sem serifa;
    font-weight: 400;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media ${breakpoints.myOrderTransitionDesktop}
  {
    width: 35rem;
  }

`