import { FiMinus, FiPlus } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { Container } from "./styles";

export function QuantityControl({ quantity, onIncrease, onDecrease }) {
  const { user } = useAuth();

  return (
    <Container>
      {
        user.role === USER_ROLE.USER &&
        <>
          <button onClick={onDecrease}>
            <FiMinus size={18} />
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={onIncrease}>
            <FiPlus size={18} />
          </button>
        </>
      }
    </Container>
  );
}
