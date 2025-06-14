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

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {

    margin-left: 200px;
  }
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

  }

  textarea {
    width: 100%;
  }

  button {
    width: 100%;
    margin-bottom: 24px;
  }
  
  .label-file {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    width: 1120px;
    
    button {
      width: 348px;
    }

    .line-one {
      display: flex;
      height: 80px;
      align-items: center;
      justify-content: space-between;
    }

    .line-two {
      display: flex;
      height: 80px;
      align-items: center;
      justify-content: space-between;

      #price {
        width: 222px !important;
      }
    }

    input {
      height: 48px;
      border: none;
      border-radius: 8px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: ${({ theme }) => theme.FONTS.ROBOTO.small_regular.fontFamily};
      width: 463px;
    }

    .label-file {
      margin-bottom: 20px;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO.small_regular.fontFamily};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      align-items: start;
      justify-content: start;
      text-align: start;
      display: flex;
    }

    #conclusion-button {
      display: flex;
      align-items: center !important;
      justify-content: end !important;
      width: 1120px;
    }

    #save-changes {
      width: 172px;
    }
  }
`;

export const Photo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  margin-bottom: 24px;

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

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 48px;
    width: 229px;
    align-items: center;
    justify-content: center;
    
    .UploadImage {
      width: 229px;
      position: absolute;
      left: 0px;
      top: 25px;
    }

    .input-wrapper {
      width: 100%;
      display: none;
    }
  }
`;

export const Section = styled.div`
  label {
    margin-bottom: 16px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 837px;

    label {
      margin-bottom: -5px;
    }
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

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 837px;
    margin-bottom: 10px;
    height: 48px;
  }
`;
