import { Container, Banner, Content, DishSliderWrapper, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Banner_img  from "../../assets/banner.svg";
import { DishSlider } from "../../components/swiper";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get("/dishes");
        setDishes(response.data);
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
      }
    }

    fetchDishes();
  }, []);

  const category1 = dishes.filter(dish => dish.category_id === 1);
  const category2 = dishes.filter(dish => dish.category_id === 2);
  const category3 = dishes.filter(dish => dish.category_id === 3);

  return (
    <Container>
      <Header />

      <Main>
        <Banner>
          <img src={Banner_img} alt="banner" />
          <Content>
            <strong>Sabores inigualáveis</strong>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </Content>
        </Banner>
  
        <DishSliderWrapper>
          <h2>Refeições</h2>
          <DishSlider dishes={category1} />
        </DishSliderWrapper>
        
        <DishSliderWrapper>
          <h2>Pratos Principais</h2>
          <DishSlider dishes={category2} />
        </DishSliderWrapper>

        <DishSliderWrapper>
          <h2>Bebidas</h2>
          <DishSlider dishes={category3} />
        </DishSliderWrapper>
      </Main>

      <Footer />
    </Container>
  );
}