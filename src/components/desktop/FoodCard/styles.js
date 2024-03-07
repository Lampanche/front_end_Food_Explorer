import { styled } from "styled-components";


export const Container = styled.div`

  max-width: 30.4rem;
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


`