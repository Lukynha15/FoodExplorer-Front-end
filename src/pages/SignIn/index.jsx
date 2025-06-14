import { MdHexagon } from "react-icons/md";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Container, Form } from "./styles";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../../components/buttonText";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const navigate = useNavigate();

  function handleSignIn() {
    signIn({ email, password });
  }


  return (
    <Container>
      <h1><MdHexagon />food explorer</h1>
      
      <Form>
        <p>Faça Login</p>
        <Input
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          label="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="No mínimo 6 caracteres"
          label="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />
        <ButtonText title="Criar uma conta" onClick={() => navigate("/register")} />
      </Form>
    </Container>
  );
}
