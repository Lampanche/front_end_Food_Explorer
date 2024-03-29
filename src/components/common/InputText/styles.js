import { styled } from "styled-components";


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: ${ ({ gap }) => gap };
  width: ${ ({ width }) => width };

  label
  {
    font-family: "Roboto", sem serifa;
    font-weight: 400;
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
    height: 4.8rem;

    ::placeholder
    {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: "Roboto", sem serifa;
      font-weight: 100;
    }

  }

  input:focus
  {
    outline: ${({ theme }) => theme.COLORS.LIGHT_100} solid 0.2rem;
  }

`