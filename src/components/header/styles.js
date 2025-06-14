import styled from "styled-components";

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
    display: flex;
    align-items: center;
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

  .title {
    position: relative;
  }

  a {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    width: 20px;
    height: 20px;
    font-size: 12px;
    cursor: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 50%;
    position: absolute;
    right: 24px;
    top: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DesktopContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  align-items: center;
  justify-content: space-around;
  gap: 32px;

  height: 114px;
  padding: 24px 123px;

  Input {
    width: 570px;
  }

  h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.fontFamily};
    font-weight: 600;
    display: flex;
    align-items: center;
    font-size: 15px;
    gap: 10px;
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

  ${({ isAdmin, theme }) => isAdmin && `
    .title {
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: center;
      
    }

    span {
      color: ${theme.COLORS.CAKE_200};
      font-family: ${theme.FONTS.ROBOTO.smallest_regular.fontFamily};
      font-size: 12px;
      font-weight: 400; 
    }
  `}

  input {
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 8px;
    padding: 0 40px;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.small_regular.fontFamily};
  }
`;
