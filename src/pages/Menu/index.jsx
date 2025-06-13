import { FiX, FiSearch } from "react-icons/fi";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { Container, Header, Content } from "./styles";
import { ButtonText } from "../../components/buttonText";

export function Menu() {
  return (
    <Container>
      <Header>
        <a href="#"><FiX /></a>
        <p>Menu</p>
      </Header>

      <Content>
        <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />

        <div className="options">
          <ButtonText title="Novo prato" />
          <ButtonText title="Sair" />
        </div>
      </Content>
      <Footer />
    </Container>
  );
}