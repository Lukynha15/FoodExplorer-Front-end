import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Content = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 40px;
    height: 40px;
  }
`;

export const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  text-align: center;
  padding: 24px;
  height: 292px;
  width: 210px;
  justify-content: space-around;
  align-items: center;

  span {
    display: none;
  }

  Button {
    width: 162px;
    height: 32px;
    margin-top: 12px;
  }

  h2 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS[100].fontFamily};
    font-size: 16px;
    font-weight: 400;
    margin-top: 12px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.small_regular.fontFamily};
    margin-top: 12px;
  }

  img {
    width: 88px;
    height: 88px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 24px;
    height: 24px;
  }

  .propriety {
    position: relative;

    svg {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 304px;
    height: 462px;

    img {
    width: 176px;
    height: 176px;
    }

    h2 {
      font-size: 24px;
      font-weight: bold;
    }

    p {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO.biggest_regular.fontFamily};
      font-size: 32px;
      font-weight: 400;
    }

    span {
      display: block;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO.smaller_regular.fontFamily};
      font-size: 14px;
      font-weight: 400;
    }

    .select {
      
    }
    
  }

`;