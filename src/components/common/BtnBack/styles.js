import { styled } from "styled-components";

export const Container = styled.button`

  display: flex;
  gap: 0.6rem;
  align-items: center;
  align-self: ${({ alignSelf }) => alignSelf};
  span
  {
    font-family: "Poppins", sem serifa;
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ weightSpan }) => weightSpan};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

`