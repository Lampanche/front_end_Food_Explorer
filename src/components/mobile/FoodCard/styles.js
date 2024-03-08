import { styled } from "styled-components";


export const Container = styled.div`

background-color: ${( { theme } ) => theme.COLORS.DARK_300};
border-radius: 0.8rem;
width: 21rem;
height: 29.2rem;
flex: none;
position: relative;

display: flex;
flex-direction: column;
justify-content: center;

.wrappedMainContent
{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  
}

  .wrappedBtnsUser
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }

  .btnAddFood
  {

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins', sem serifa;
    color: ${( { theme } ) => theme.COLORS.LIGHT_300};
    
    background-color: ${( { theme } ) => theme.COLORS.TOMATO_100};
    padding: 1.2rem 2.4rem;
    width: 16.2rem;
    height: 3.2rem;
    border-radius: 0.5rem;
  }

`