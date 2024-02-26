import { styled } from "styled-components";


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: ${ ({ gap }) => gap };

  label
  {
    font-family: "Roboto", sem serifa;
    font-weight: 100;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input
  {
    background: none;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 1.2rem 1.4rem;
    border: none;
    color:${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 0.8rem;

    ::placeholder
    {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: "Roboto", sem serifa;
      font-weight: 100;
    }

  }

`