import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.form`

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 36.4rem;
  margin: 1.992rem auto 5.308rem;

  .wrappedBtns
  {
    display: flex;
    justify-content: space-between;
  }

  @media ${breakpoints.newMobileTransition}
  {
    width: 60rem;
  }

`