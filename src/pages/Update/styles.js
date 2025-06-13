import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export const Back = styled.button`
  display: flex;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: ${({ theme }) => theme.FONTS.POPPINS[300].regular.fontFamily};
  font-size: 16px;
  margin-bottom: 35px;
  margin-top: 10px;
  justify-self: start;
  align-items: center;
  margin-left: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;
  width: 364px;

  .input-wrapper {
    width: 100%;
  }

  Input {
    width: 100%;
  }

  textarea {
    width: 100%;
  }

  button {
    width: 100%;
    margin-bottom: 24px;
  }

  .decision {
    display: flex;
    justify-content: space-between;
    gap: 32px;

    .delete {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    width: 1120px;
    margin: 0 auto;
  }
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  input[type="file"] {
    display: none;
  }

  .UploadImage {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 4px;
    font-weight: 500;
    user-select: none;
    transition: background-color 0.3s ease;
    position: absolute;
    height: 48px;
    width: 364px;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_200};
    }
  }
`;

export const Section = styled.div`
  label {
    margin-bottom: 16px;
  }
`;

export const IngredientsTags = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  gap: 16px;
  padding: 8px;
  border-radius: 8px;
  margin-top: 16px;
  width: 364px;

  > div {
    margin: 0;
  }
`;
