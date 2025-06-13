import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    display: flex;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.small_regular.fontFamily};
    margin-bottom: 8px;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    width: 316px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 8px;
    padding: 0 14px;
    gap: 8px;
  }

  .input-wrapper svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    flex-shrink: 0;
  }

  input {
    flex: 1;
    height: 100%;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.small_regular.fontFamily};
    font-size: 14px;
    padding: 0;
    outline: none;
  }
`;
