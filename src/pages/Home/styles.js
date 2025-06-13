import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const Banner = styled.div`
  display: flex;
  position: relative;
  width: 376px;
  margin: 0 auto;
  margin-top: 44px;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  height: 120px;
  margin-bottom: 62px;

  border-radius: 3px;

  > img {
    width: 191px;
    height: 149px;
    margin-bottom: 50px;
    position: absolute;
    top: -30px;
    left: -30px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 1120px;
    height: 260px;
    margin-top: 164px;

    > img {
      width: 656px;
      height: 412px;
      position: absolute;
      top: -150px;
      left: -100px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 40%;
  align-items: center;
  gap: 3px;

  strong {
    font-size: 18px;
    font-weight: 600;
    margin-right: 33px;
  }

  p {
    font-size: 12px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-left: 50%;

    strong {
      font-size: 40px;
    }

    p {
      font-size: 16px;
      font-weight: 200;
    }
  }
`;

export const DishSliderWrapper = styled.div`
  width: 376px;
  margin: 0 auto;
  margin-bottom: 25px;

  h2 {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: ${({ theme }) => theme.FONTS.POPPINS[400].fontFamily};
    font-size: 22px;
    font-weight: 400;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 1120px;
  }
`;

export const Main = styled.main`
  width: 100%;
  margin: 0 auto;
`;