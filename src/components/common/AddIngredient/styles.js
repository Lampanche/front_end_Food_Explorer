import { styled } from "styled-components";



export const Container = styled.div`

  width: 11.6rem;
  padding: 1rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  border: 0.1rem dashed ${( { theme } ) => theme.COLORS.LIGHT_500};

  input
  {
    background: none;
    border: none;
    font-family: 'Roboto', sem serifa;
    color: ${( { theme } ) => theme.COLORS.LIGHT_500};
    width: 6.8rem;
    height: 1.6rem;
    text-align: center;


    ::placeholder
    {
      color: ${( { theme } ) => theme.COLORS.LIGHT_500};
    }
  }

`