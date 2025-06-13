import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: flex;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.small_regular.fontFamily};
    margin-bottom: 8px;
  }

  textarea {
    display: flex;
    align-items: center;
    width: 316px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 8px;
    padding: 14px 14px 0 14px;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 172px;
    resize: none;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO.small_regular.fontFamily};
    font-size: 14px;
  }
`;
