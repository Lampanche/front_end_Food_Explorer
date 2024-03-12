import { styled } from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`

  position: absolute;
  top: 1.6rem;
  left: ${({ leftPosition }) => leftPosition}

`