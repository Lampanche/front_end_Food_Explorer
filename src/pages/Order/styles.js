import { styled } from "styled-components";


export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-areas: 
  
  "header"
  "main"
  "footer"
  
  ;
  grid-template-rows: max-content;

  header
  {
    grid-area: header;
  }

  main
  {
    padding-top: 3.4rem;
    display: flex;
    gap: 7.5rem;
    justify-content: center;
    grid-area: main;
  }

  .contentTabletAndMobile
  {

    display: flex;
    flex-direction: column;
    gap: 3.1rem;
    margin-bottom: 5.8rem;

    > button
    {
      align-self: flex-end;
      width: 21.6rem;
      height: 4.8rem;
      padding: 1.2rem 3.2rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      font-family: "Poppins", sem serifa;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

    }
  }

  .contentOrder
  {
    display: flex;
    gap: 7.5rem;
  }

  footer
  {
    grid-area: footer;
    align-self: end;
  }

`