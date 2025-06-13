import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: ${({ theme }) => theme.FONTS.POPPINS[100].fontFamily};
  border: none;
`;