import { Container, Main } from "./styles";
import { MdHexagon } from "react-icons/md";

export function Footer() {
  return (
    <Container>
      <Main>
        <span><MdHexagon />food explorer</span>
        <p>© 2023 - Todos os direitos reservados</p>
      </Main>
    </Container>
  );
}