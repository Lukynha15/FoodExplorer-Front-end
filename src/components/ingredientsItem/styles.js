import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 10px;
  margin: 0;

  > button {
    border: none;
    background: none;
    margin: 0 !important;
    padding-right: 8px ;
    margin-top: 3px 
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    width: 90px !important;
    height: 32px !important;
    padding: 8px 0px 8px 16px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;