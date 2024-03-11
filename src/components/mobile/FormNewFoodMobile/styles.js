import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.form`

  width: 36.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin: 1.092rem 0 5.308rem;

  @media ${breakpoints.newMobileTransition}
  {
    width: 60rem;
  }

`