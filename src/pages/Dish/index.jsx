import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Ingredients } from "../../components/ingredients";
import { Button } from "../../components/button";
import { FiClipboard, FiPlus, FiMinus, FiArrowLeft } from "react-icons/fi";

import { 
  Back, 
  Container, 
  Section, 
  Content, 
  IngredientsSection, 
  Details, 
  QuantityControl 
} from "./styles";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function Dish() {
  const [quantity, setQuantity] = useState(1);
  const [dish, setDish] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`);
        setDish(response.data);
      } catch (error) {
        console.error("Erro ao buscar prato:", error);
      }
    }

    fetchDish();
  }, [id]);

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const { user } = useAuth();

  return (
    <Container>
      <Header />
      <Section>
        <Back onClick={() => navigate("/")} ><FiArrowLeft size={24} style={{ marginRight: 8 }} /> voltar</Back>
        
        {dish && (
          <Content>
            <div className="image">
              <img src={`${api.defaults.baseURL}/files/${dish.photo}`} alt={dish.name} />
            </div>

            <div className="informations">
              <h2>{dish.name}</h2>
              <p>{dish.description}</p>

              <IngredientsSection>
                {dish?.ingredients?.map(ingredient => (
                  <span key={ingredient.id}>{ingredient.name}</span>
                ))}
              </IngredientsSection>

              {
                user.role === USER_ROLE.USER &&
                <Details>
                  <QuantityControl>
                    <button onClick={handleDecrease}>
                      <FiMinus size={18} />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrease}>
                      <FiPlus size={18} />
                    </button>
                  </QuantityControl>

                  <Button 
                    className="mobile"
                    icon={FiClipboard} 
                    title={`pedir ∙ R$ ${(dish.price * quantity).toFixed(2)}`} 
                  />
                  <Button 
                    className="desktop"
                    title={`incluir ∙ R$ ${(dish.price * quantity).toFixed(2)}`} 
                  />
                </Details>
              }
              {
                user.role === USER_ROLE.ADMIN &&
                <Button 
                  onClick={() => navigate(`/dishes/${dish.id}`)}
                  title={"Editar Prato"} 
                  className="edit"
                />
              }
            </div>
          </Content>
        )}
      </Section>
      <Footer />
    </Container>
  );
}
