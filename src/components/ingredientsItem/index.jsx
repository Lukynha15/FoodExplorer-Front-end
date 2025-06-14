import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function IngredientsItem({ isNew, value, onClick, onRemove, ...rest }) {
  return (
    <Container isNew={isNew} {...rest}>
      <input 
        type="text" 
        value={value} 
        readOnly={!isNew}
        {...rest}
      />

      <button 
        onClick={isNew ? onClick : onRemove} // 👈 Aqui é a chave!
        type="button"
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
