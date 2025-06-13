import { FiPlus, FiMinus } from "react-icons/fi";
import { Container } from "./styles";

export function QuantityControl({ quantity, onIncrease, onDecrease }) {
  return (
    <Container>
      <button onClick={onDecrease}>
        <FiMinus size={18} />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <FiPlus size={18} />
      </button>
    </Container>
  );
}
