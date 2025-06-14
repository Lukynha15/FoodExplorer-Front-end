import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiArrowLeft, FiUpload } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textArea";
import { Button } from "../../components/button";
import { CustomSelect } from "../../components/select";
import { IngredientsItem } from "../../components/ingredientsItem";
import { useNavigate } from "react-router-dom";

import { Container, Back, Form, Photo, Section, IngredientsTags } from "./styles";

export function Update() {
  const { id } = useParams();

  const { navigate } = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const categoryMap = {
    pratos: 1,
    bebidas: 2,
    sobremesas: 3,
  };

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`);
        const dish = response.data;

        setName(dish.name);
        setPrice(dish.price);
        setDescription(dish.description);
        setCategory(dish.category_id);

        const ingredientNames = dish.ingredients.map(ing => ing.name);
        setIngredients(ingredientNames);

        if (dish.photo) {
          setPhotoPreview(`${api.defaults.baseURL}/files/${dish.photo}`);
        }
      } catch (error) {
        console.error("Erro ao buscar prato:", error);
      }
    }

    fetchDish();
  }, [id]);

  function handleAddIngredient() {
    const trimmed = newIngredient.trim();
    if (trimmed && !ingredients.includes(trimmed)) {
      setIngredients([...ingredients, trimmed]);
      setNewIngredient("");
    }
  }

  async function handleDelete(dishId) {
  const confirmDelete = window.confirm("Tem certeza que deseja excluir este prato?");
  if (!confirmDelete) return;

  try {
    await api.delete(`/dishes/${dishId}`);
    alert("Prato excluído com sucesso!");
    navigate("/");
  } catch (error) {
    console.log(error)
  }
  }


  function handleRemoveIngredient(ingredientToRemove) {
    setIngredients(ingredients.filter(ing => ing !== ingredientToRemove));
  }

  function handlePhotoChange(event) {
    const file = event.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  }

  async function handleUpdate() {
    if (!name || !price || !category || ingredients.length === 0) {
      return alert("Preencha todos os campos.");
    }

    try {
      const updatedDish = {
        name,
        price,
        description,
        category_id: categoryMap[category],
        ingredients,
      };

      await api.put(`/dishes/${id}`, updatedDish);

      if (photoFile) {
        const formData = new FormData();
        formData.append("photo", photoFile);

        await api.patch(`/dishes/photo/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      alert("Prato atualizado com sucesso!");
    } catch (error) {
      alert("Erro ao atualizar prato.");
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
        <h1>Editar prato</h1>

        <div className="line-one">
          <Photo>
            <label htmlFor="photo-upload" className="label-file">
              Imagem do prato
            </label>
            <div>
              {photoPreview && <img src={photoPreview} alt="Preview do prato" style={{ maxWidth: 150, borderRadius: 8, display: "none" }} />}
              <label htmlFor="photo-upload" className="UploadImage">
                <FiUpload size={20} />
                Selecione imagem
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
            </div>
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
          <Button title="Exluir prato" onClick={() => handleDelete(id)} className="delete" />
          <Button title="Salvar alterações" onClick={handleUpdate} className="save" />
        </div>
      </Form>

      <Footer />
    </Container>
  );
}
