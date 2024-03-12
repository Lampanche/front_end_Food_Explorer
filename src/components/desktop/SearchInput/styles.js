import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`

  display: flex;
  align-items: center;
  gap: 1.4rem;

  justify-content: ${({ isadmin }) => isadmin ? `center` : ` `}; 

  width: ${({ isadmin }) => isadmin ? `58.1rem` : `40.9rem`};

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  img
  {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1.35rem;
  }

  > div
  {
    height:100%;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    width: 25.4rem;
  }

  input
  {
    width: 100%;
    height: 100%; 
    background: none;
    border: none;
    color:${({ theme }) => theme.COLORS.LIGHT_100};
  }

  input::placeholder
  {
    color:${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: 'Roboto', sem serifa;
  }

  @media ${breakpoints.headerDesktopAdmTransition}
  {
    width: 50rem;
  }


`