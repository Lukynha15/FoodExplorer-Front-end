import { useState } from 'react';
import { SelectContainer, Label, Select, Option } from './styles';

export function CustomSelect() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <SelectContainer>
      <Label htmlFor="dishes">Categoria</Label>
      <Select id="dishes" value={selectedOption} onChange={handleChange}>
        <Option value="">Selecione...</Option>
        <Option value="pratos">Pratos</Option>
        <Option value="bebidas">Bebidas</Option>
        <Option value="sobremesas">Sobremesas</Option>
      </Select>
    </SelectContainer>
  );
}
