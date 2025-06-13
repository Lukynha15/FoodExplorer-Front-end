import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  padding: 56px 28px 24px;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  font-size: 21px;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 24px;
    height: 24px;
    margin-top: 2px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 372px;
  margin: 0 auto;
  margin-top: 36px;

  .input-wrapper {
    width: 100%;
  }

  Button {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    font-size: 24px;
    text-align: start;
    padding: 10px;
  }

  .options {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 36px;
  }
`;