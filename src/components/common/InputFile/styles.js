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

  .wrappedInputContent
  {
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: ${( { align } ) => align};
    gap: 0.8rem;
    border-radius: 0.8rem;
    background-color: ${( { theme } ) => theme.COLORS.DARK_800};
    padding: 1.2rem 2.6rem;

    span
    {
      font-family: 'Poppins', sem serifa;
      color: ${( { theme } ) => theme.COLORS.LIGHT_100};
      font-size: 1.4rem;
    }

  }

  .wrappedInput
  {
    width: 2.4rem;
    height: 2.5rem;

    input
    {
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

  }


`