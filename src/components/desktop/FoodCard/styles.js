import { styled } from "styled-components";


export const Container = styled.div`

  min-width: 30.4rem;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  padding: 2.4rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  .wrappedBtns
  {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .btnInclude
  {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins', sem serifa;
    color: ${( { theme } ) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    
    background-color: ${( { theme } ) => theme.COLORS.TOMATO_100};
    padding: 1.2rem 2.4rem;
    width: 9.2rem;
    height: 4.8rem;
    border-radius: 0.5rem;
  }


`