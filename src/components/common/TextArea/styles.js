import { styled } from "styled-components";


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  label
  {
    font-family: 'Roboto', sem serifa;
    color: ${( { theme } ) => theme.COLORS.LIGHT_400};
  }

  textarea
  {
    height: 20.4rem;
    background-color: ${( { theme } ) => theme.COLORS.DARK_800};
    padding: 1.4rem 1.4rem;
    font-family: 'Roboto', sem serifa;
    color: ${( { theme } ) => theme.COLORS.LIGHT_500};
    border: none;
    border-radius: 0.8rem;
    appearance: none;
    resize: none;

    ::placeholder
    {
      font-family: 'Roboto', sem serifa;
      color: ${( { theme } ) => theme.COLORS.LIGHT_500};
    }

  }

`