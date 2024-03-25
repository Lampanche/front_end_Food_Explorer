import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.section`

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 44rem;

  h2
  {
    font-family: "Poppins", sem serifa;
    font-weight: 400;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .content
  {
    display: flex;
    flex-direction: column;
  }

  .wrappedItensOrder
  { 
    max-height: 53rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .sumPriceOrder
  {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1.6rem 0;

    span
    {
      font-family: "Poppins", sem serifa;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

  }

  @media ${breakpoints.myOrderTransitionDesktop}
  {
    width: 37rem;
  }

`