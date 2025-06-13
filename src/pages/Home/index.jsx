import { Container, Banner, Content, DishSliderWrapper, Main } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import Banner_img  from "../../assets/banner.svg";
import { dishes, DishSlider, mainDishes } from "../../components/swiper";

export function Home() {
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
          <DishSlider dishes={dishes} />
        </DishSliderWrapper>
        
        <DishSliderWrapper>
          <h2>Pratos Principais</h2>
          <DishSlider dishes={mainDishes} />
        </DishSliderWrapper>

        <DishSliderWrapper>
          <h2>Bebidas</h2>
          <DishSlider dishes={dishes} />
        </DishSliderWrapper>
      </Main>

      <Footer />
    </Container>
  );
}