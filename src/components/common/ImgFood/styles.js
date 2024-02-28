import { styled } from "styled-components";


export const Container = styled.div`


  border-radius: 99%;
  
  img
  {
    width: ${( { width } ) => width};
    height: ${( { height } ) => height};
    object-fit: cover;
  }

`