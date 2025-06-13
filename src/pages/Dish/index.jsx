import { useState } from "react";
import dishImage from "../../assets/dish.png";
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

export function Dish() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Container>
      <Header />

      <Section>
        <Back><FiArrowLeft size={24} style={{ marginRight: 8 }} /> voltar</Back>
        <Content>
          <div className="image">
            <img src={dishImage} alt="Imagem do prato" />
          </div>

          <div className="informations">
          <h2>Salada Ravanello</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

          <IngredientsSection>
            <Ingredients title="alface"/>
            <Ingredients title="cebola"/>
            <Ingredients title="pão naan"/>
            <Ingredients title="pepino"/>
            <Ingredients title="rabanete"/>
            <Ingredients title="tomate"/>
          </IngredientsSection>

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
              title={`pedir ∙ R$ ${(25 * quantity).toFixed(2)}`} 
            />
            <Button 
              className="desktop"
              title={`incluir ∙ R$ ${(25 * quantity).toFixed(2)}`} 
            />
          </Details>
          </div>
        </Content>
      </Section>

      <Footer />
    </Container>
  )
}
