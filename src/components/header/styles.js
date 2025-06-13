import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const MobileContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  align-items: center;
  justify-content: space-between;

  height: 114px;
  width: 100%;
  padding: 56px 28px 24px;

  h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.fontFamily};
    font-weight: 600;
    align-items: center;
    display: flex;
    gap: 10px;
    font-size: 21px;
  }

  h1 > svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    width: 24px;
    height: 24px;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 24px;
    height: 24px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 0 auto;
  }

`;

export const DesktopContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  align-items: center;


  height: 114px;
  width: 100%;
  padding: 24px 123px;
  justify-content: space-around;

  h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.fontFamily};
    font-weight: 600;
    align-items: center;
    display: flex;
    gap: 10px;
    font-size: 21px;
  }

  h1 > svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    width: 24px;
    height: 24px;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 24px;
    height: 24px;
  }
`;