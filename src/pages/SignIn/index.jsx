import { MdHexagon } from "react-icons/md";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Container, Form } from "./styles";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  async function handleSignIn() {
  try {
    await signIn({ email, password });
      console.log('Login sucesso, navegando...');
      alert("Login efetuado com sucesso!");
      navigate("/");
    } catch (error) {
      alert(error.message || "Erro no login");
    }
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
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
