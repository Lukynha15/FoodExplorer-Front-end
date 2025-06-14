import React, { useState } from "react";
import { Button } from "../../components/button";
import { Container, Form } from "./styles";
import { Input } from "../../components/input";
import { ButtonText } from "../../components/buttonText";
import { MdHexagon } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function SignUp() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        console.log( { name, email, password });
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Erro no cadastro!");
        }
    });
  }

  return (
    <Container>
      <h1><MdHexagon />food explorer</h1>
      
      <Form>
        <p>Crie sua conta</p>
        <Input
          type="text"
          placeholder="Exemplo: Maria da Silva"
          label="Seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="No mínimo 6 caracteres"
          label="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <Button title="Cadastrar" onClick={handleSignUp}  />
        <ButtonText title="Já tenho uma conta" onClick={() => navigate("/")} />
      </Form>
    </Container>
  );
}
