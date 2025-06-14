import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Section = styled.div`
  place-items: center; 
  padding: 0rem 3.5rem 2rem;
`;


export const Back = styled.button`
  display: flex;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: ${({ theme }) => theme.FONTS.POPPINS[300].regular.fontFamily};
  margin-top: 36px;
  font-size: 24px;
  margin-bottom: 16px;
  justify-self: start;
  align-items: center;
`;


export const Content = styled.div`
  text-align: center;
  max-width: 1368px;

  .edit {
    margin-top: 24px; 
    margin: 24px auto;
  }

  h2 {
    margin-top: 16px;
    font-family: ${({ theme }) => theme.FONTS.POPPINS[300].regular.fontFamily};
    font-weight: 400;
    font-size: 27px;
  }

  p {
    margin-top: 16px;
    font-weight: 300;
    width: 100%;
  }

  img {
    width: 264px;
    height: 264px;
    margin: 0 auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    height: 390px;
    gap: 47px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 42px;

    .edit {
      margin: 24px 0 0 0;
    }

    img {
      width: 390px;
      height: 390px;
    }

    h2 {
      text-align: left;
      font-size: 40px;
    }

    p {
      text-align: left;
      font-size: 24px;
    }
  }
`;

export const IngredientsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;

  span {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    font-family: ${({ theme }) => theme.FONTS.POPPINS[100].fontFamily};
    border-radius: 5px;
    padding: 4px 8px;
    font-size: 14px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;

    height: 32px;
    text-align: center;
  }
`;

export const Details = styled.div`
  display: flex;
  margin-top: 48px;
  height: 38px;
  align-items: center;
  width: 100%;

  justify-content: space-around;

  Button {
    height: 38px;
    max-width: 188px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: start;
    gap: 30px;
    
    .mobile {
      display: none;
    }
    .desktop {
      display: flex;
      height: 48px;
      width: 162px;
    }
  }
`;


export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  justify-content: space-between;
  width: 112px;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
    transition: transform 0.2s;
    width: 27px;
    height: 27px;

    &:hover {
      transform: scale(1.1);
    }
  }

  span {
    font-size: 22px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
    font-family: ${({ theme }) => theme.FONTS.POPPINS[300].regular.fontFamily};
  }
`;