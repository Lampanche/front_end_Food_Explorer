import { styled } from "styled-components";


export const Container = styled.div`

  width: ${( { width } ) => width};
  height: ${( { height } ) => height};

  border-radius: 99%;
  
  img
  {
    object-fit: cover;
  }

`