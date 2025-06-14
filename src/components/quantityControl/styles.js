import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  width: 100px;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
    width: 24px;
    height: 24px;
  }

  .quantity {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 20px;
    align-items: center;
  }
`;
