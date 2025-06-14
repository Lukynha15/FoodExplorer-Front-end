import { useState } from "react";
import { FiArrowLeft, FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textArea";
import { Button } from "../../components/button";
import { CustomSelect } from "../../components/select";
import { IngredientsItem } from "../../components/ingredientsItem";

import { Container, Back, Form, Photo, Section, IngredientsTags } from "./styles";

export function New() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const categoryMap = {
    pratos: 1,
    bebidas: 2,
    sobremesas: 3,
  };

  function handleAddIngredient() {
    const trimmed = newIngredient.trim();
    if (trimmed && !ingredients.includes(trimmed)) {
      setIngredients([...ingredients, trimmed]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredient(ingredientToRemove) {
    setIngredients(ingredients.filter(ing => ing !== ingredientToRemove));
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    setImageFile(file);
    console.log("Arquivo selecionado:", file);
  }

  async function handleCreate() {
    if (!name || !price || !category || ingredients.length === 0) {
      return alert("Preencha todos os campos.");
    }

    if (!imageFile) {
      return alert("Selecione uma imagem.");
    }

    try {
      const formData = new FormData();

      formData.append("photo", imageFile);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category_id", categoryMap[category]);
      ingredients.forEach(ingredient => formData.append("ingredients[]", ingredient));

      await api.post("/dishes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Prato criado com sucesso!");
      navigate("/menu"); // redirecionar para a lista/menu

    } catch (error) {
      alert("Erro ao criar prato.");
      console.error(error);
    }
  }

  return (
    <Container>
      <Header />
      <Back onClick={() => navigate(-1)}>
        <FiArrowLeft size={24} style={{ marginRight: 8 }} />
        voltar
      </Back>

      <Form>
        <h1>Novo prato</h1>

        <div className="line-one">
          <Photo>
            <label htmlFor="file" className="UploadImage" style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <FiUpload size={20} />
              Selecione imagem
            </label>

            <Input
              id="file"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              accept="image/*"
            />
          </Photo>

          <Input
            type="text"
            placeholder="Ex.: Salada Ceasar"
            label="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <CustomSelect
            value={category}
            onChange={setCategory}
          />
        </div>

        <div className="line-two">
          <Section>
            <label htmlFor="ingredients">Ingredientes</label>
            <IngredientsTags>
              {ingredients.map((ingredient, index) => (
                <IngredientsItem
                  key={index}
                  value={ingredient}
                  onRemove={() => handleRemoveIngredient(ingredient)}
                />
              ))}

              <IngredientsItem
                isNew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </IngredientsTags>
          </Section>

          <Input
            type="number"
            id="price"
            placeholder="R$ 00,00"
            label="Preço"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </div>

        <Textarea
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          label="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <div id="conclusion-button">
          <Button title="Criar prato" onClick={handleCreate} className="button-add"/>
        </div>
      </Form>

      <Footer />
    </Container>
  );
}
