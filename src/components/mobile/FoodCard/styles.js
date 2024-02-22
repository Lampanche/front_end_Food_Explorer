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

.btnHigher
{

  position: absolute;
  top: 1.6rem;
  left: 17rem;

  img
  {
    width: 2.4rem;
    height: ${( { isadmin } ) => isadmin ? `2.4rem` : `2.2rem`};
  }

}

.wrappedMainContent
{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  
  > span
  {
    font-family: 'Roboto', sem serifa;
    color: ${( { theme } ) => theme.COLORS.CAKE_200};
  }
  
}

  .wrappedImgFood
  {
    img
    {
      width: 8.8rem;
      height: 8.8rem;
      border-radius: 99%;
    }
  }

  .btnDetailsFood
  {
    font-family: 'Poppins', sem serifa;
    color: ${( { theme } ) => theme.COLORS.LIGHT_300};
  }

  .wrappedBtnsUser
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }

  .wrappedMinusAndPlus
  {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > span
    {
      text-align: center;
      font-family: 'Roboto', sem serifa;
      color: ${( { theme } ) => theme.COLORS.LIGHT_300};
    }

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