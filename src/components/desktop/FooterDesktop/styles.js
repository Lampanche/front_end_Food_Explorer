import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.footer`

  width: 100%;
  height: 7.7rem;
  background-color: ${( { theme } ) => theme.COLORS.DARK_600};
  display: flex;
  justify-content: center;

  > div
  {
    display: flex;
    gap: 69.4rem;
    align-items: center;

    span
    {
      font-family: 'Roboto', sem serifa;
      font-size: 1.4rem;
      color: ${( { theme } ) => theme.COLORS.LIGHT_200};
    }

  }

  .wrappedLogoApp
  {
    display: flex;
    gap: 1rem;
    align-items: center;

    > span
    {
      font-family: 'Roboto', sem serifa;
      font-size: 2.4rem;
      font-weight: 700;
      color: ${( { theme } ) => theme.COLORS.LIGHT_700};
    }

  }

  @media ${breakpoints.homeDesktopTransition}
  {
    > div
    {
      gap: 50rem;
    }
  }

`