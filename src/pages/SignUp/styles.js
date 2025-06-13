import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 73px;
  
  > h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.big_bold.fontFamily};
    align-items: center;
    display: flex;
    gap: 10px;
    font-size: 38px;

    > svg {
      color: ${({ theme }) => theme.COLORS.CAKE_100};
      width: 43px;
      height: 43px;
    }
  }	

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    h1 {
      margin: 0 auto;
    }

    display: grid;
    grid-template-columns: 1fr 1fr; 
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 73px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  p {
    display: none;
  }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 621px;
    width: 476px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding: 64px;

    p {
      display: inline;
      font-family: ${({ theme }) => theme.FONTS.POPPINS[400].fontFamily};
      font-size: 32px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
