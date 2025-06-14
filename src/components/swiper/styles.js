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

  .button-add {
    width: 162px ;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.POPPINS[100].fontFamily};

    height: 32px ;
    border: 0;
    padding: 16px ; 
    border-radius: 5px;
    font-weight: 400;
    align-items: center ;
    display: flex ;
    justify-content: center;
    font-size: 14px;
  }

  .description {
    display: none;
    height: 50px;
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

  .select {
    margin-top: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 304px ;
    height: 462px ;

    img {
    width: 176px;
    height: 176px;
    }

    .description {
      display: flex;
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
      display: flex ;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO.smaller_regular.fontFamily};
      font-size: 14px;
      font-weight: 400;
    }

    .select {
      display: flex ;
      align-items: center;
      justify-content: center;
    }

    .button-add {
      width: 92px ;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: ${({ theme }) => theme.FONTS.POPPINS[100].fontFamily};

      height: 48px ;
      border: 0;
      padding: 16px ; 
      border-radius: 5px;
      font-weight: 400;
      align-items: center ;
      display: flex ;
      justify-content: center;
      font-size: 14px;
    }
}
`;