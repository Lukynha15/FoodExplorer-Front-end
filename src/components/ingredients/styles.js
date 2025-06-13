import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  font-family: ${({ theme }) => theme.FONTS.POPPINS[100].fontFamily};
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 14px;

`;