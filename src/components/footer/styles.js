import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 77px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  flex: 1;
`;

export const Main = styled.div`
  align-items: center;
  display: flex;
  padding: 29px 27px;
  gap: 40px;

  span {
    align-items: center;
    display: flex;
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-weight: 600;
  }

  p {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 29px 0px;
    width: 100%;
  }
`;

