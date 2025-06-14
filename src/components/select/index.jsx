import { SelectContainer, Label, Select, Option } from './styles';

export function CustomSelect({ value, onChange }) {
  return (
    <SelectContainer>
      <Label htmlFor="dishes">Categoria</Label>
      <Select
        id="dishes"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <Option value="">Selecione...</Option>
        <Option value="pratos">Pratos</Option>
        <Option value="bebidas">Bebidas</Option>
        <Option value="sobremesas">Sobremesas</Option>
      </Select>
    </SelectContainer>
  );
}

