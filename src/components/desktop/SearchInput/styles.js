import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`

  display: flex;
  align-items: center;
  gap: 1.4rem;

  height: 4.8rem;

  justify-content: ${({ isadmin }) => isadmin ? `center` : ` `}; 

  width: ${({ isadmin }) => isadmin ? `58.1rem` : `30rem`};

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
    color:${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: 'Roboto', sem serifa;
  }
  
  input:focus
  {
    outline: none;
  }

  input::placeholder
  {
    color:${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: 'Roboto', sem serifa;
  }

  @media ${breakpoints.headerDesktopTransition}
  {
    width: ${({ isadmin }) => isadmin ? `50rem` : `26rem`};
  }


`