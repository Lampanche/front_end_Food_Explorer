import { styled } from "styled-components";


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: ${( { width } ) => width};
  
  label
  {
    font-family: 'Roboto', sem serifa;
    color: ${( { theme } ) => theme.COLORS.LIGHT_400};
  }

  select
  {
    font-family: 'Roboto', sem serifa;
    color: ${( { theme } ) => theme.COLORS.LIGHT_400};
    font-size: 1.4rem;
    border-radius: 0.8rem;
    background-color: ${( { theme } ) => theme.COLORS.DARK_800};
    padding: 1.2rem 3.2rem;
    border: none;
    appearance: none;
  }


`