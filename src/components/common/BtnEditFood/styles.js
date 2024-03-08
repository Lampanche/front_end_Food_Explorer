import { styled } from "styled-components";


export const Container = styled.button`

  position: absolute;
  top: 1.6rem;
  left: ${({ leftPosition }) => leftPosition}

`