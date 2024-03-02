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

  .wrappedTagAndInput
  {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;
    border-radius: 0.8rem;
    width: ${( { width } ) => width};

    padding: 0.4rem 0.8rem;

    background-color: ${( { theme } ) => theme.COLORS.DARK_800};
  }

`