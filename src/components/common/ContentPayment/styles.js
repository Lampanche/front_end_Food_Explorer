import { styled } from "styled-components";

import { breakpoints } from "../../../styles/breakpoints";

export const Container = styled.div`


  border: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 0.8rem;

  .wrappedTypePayment
  {
    display: flex;
    width: 100%;
    height: 8.8rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};

  }

  .wrappedTypePayment button:nth-child(odd)
  {
    border-right: 0.1rem solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }

  .wrappedTypePayment button:nth-child(even)
  {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }

  .btnTypePayment
  {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    justify-content: center;

    span
    {
      font-family: "Roboto", sem serifa;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

  }

  .content
  {
    padding: 4.7rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

  }

`

export const QrCode = styled.img`

  width: 27rem;
  height: 27rem;

  object-fit: cover;

  @media ${breakpoints.qrCodeTransitionMobile}
  {
    width: 18rem;
    height: 18rem;
  }

`

export const Form = styled.form`

  width: 34.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.7rem;

  .contentWrappeds
  {
    display: flex;
    align-items: center;
    gap: 1.7rem;

    div
    {
      width: calc(50% - 0.85rem);
    }

  }

  @media ${breakpoints.myOrderTransitionDesktop}
  {
    width: 25rem;
  }

`

export const WrappedInput = styled.div`

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label
  {
    font-family: "Roboto", sem serifa;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input
  {
    background: none;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 0.5rem;
    padding: 1.2rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  input:focus
  {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

`

export const BtnPayment = styled.button`

  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.2rem 3.2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  span
  {
    font-family: "Poppins", sem serifa;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
  }

`
