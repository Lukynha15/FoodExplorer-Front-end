import styled from "styled-components";

export const Container = styled.button`
  width: 316px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: ${({ theme }) => theme.FONTS.POPPINS[100].fontFamily};

  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 5px;
  font-weight: 400;

  font-size: 14px;

  &:disabled {
    opacity: 1;
    filter: grayscale(0.7) brightness(1.3);
    cursor: not-allowed;
  }
`;