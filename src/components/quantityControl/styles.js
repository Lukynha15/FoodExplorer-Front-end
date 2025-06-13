import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 16px;
  }
`;
