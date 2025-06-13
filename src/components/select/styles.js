import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px 0;
`;

export const Label = styled.label`
  display: flex;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-family: ${({ theme }) => theme.FONTS.ROBOTO.small_regular.fontFamily};
  margin-bottom: 8px;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  font-size: 14px;
  height: 48px;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  cursor: pointer;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Option = styled.option`
  padding: 8px;
`;
