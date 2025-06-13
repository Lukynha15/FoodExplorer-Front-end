import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from "../card";
import { FiHeart } from "react-icons/fi";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Container, Content } from './styles';

import { Button } from "../button";
import { QuantityControl } from '../quantityControl';

import { useState } from "react";

import salada_ravanello from "../../assets/dish.png";
import spaghetti from "../../assets/Spaguetti.png";

export const dishes = [
  {
    id: 1,
    title: "Salada Ravanello",
    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
    image: salada_ravanello,
    price: `R$ ${49.97}`
  },
  {
    id: 2,
    title: "Torrada de Parma",
    description: "Presunto de parma e rúcula em um pão com fermentação natural.",
    image: spaghetti,
    price: 24.50
  },
  {
    id: 3,
    title: "Spaghetti Gambe",
    description: "Massa fresca com camarões e pesto de manjericão.",
    image: "/images/spaghetti-gambe.png",
    price: 39.90
  },
  {
    id: 4,
    title: "Suco de Maracujá",
    description: "Suco natural de maracujá gelado.",
    image: "/images/suco-maracuja.png",
    price: 8.00
  },
  {
    id: 5,
    title: "Prato Vegano",
    description: "Mix de vegetais salteados com especiarias.",
    image: "/images/prato-vegano.png",
    price: 22.00
  }
];

export const mainDishes = [
  {
    id: 1,
    title: "Filé Mignon ao Molho Madeira",
    description: "Suculento filé mignon servido com molho madeira e champignon.",
    image: "/images/prato-vegano.png",
    price: `R$ ${79.90}`
  },
  {
    id: 2,
    title: "Frango Grelhado com Legumes",
    description: "Peito de frango grelhado acompanhado de legumes salteados na manteiga.",
    image: "/images/prato-vegano.png",
    price: `R$ ${42.50}`
  },
  {
    id: 3,
    title: "Risoto de Camarão",
    description: "Risoto cremoso com camarões frescos e toque de limão siciliano.",
    image: "/images/prato-vegano.png",
    price: `R$ ${68.00}`
  },
  {
    id: 4,
    title: "Lasanha à Bolonhesa",
    description: "Tradicional lasanha italiana com molho bolonhesa e queijo gratinado.",
    image: "/images/prato-vegano.png",
    price: `R$ ${54.90}`
  },
  {
    id: 5,
    title: "Peixe Assado com Ervas",
    description: "Filé de peixe assado com ervas finas e arroz de brócolis.",
    image: "/images/prato-vegano.png",
    price: `R$ ${63.70}`
  }
];

export function DishSlider({ dishes }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Content style={{ width: '100%', margin: '0 auto' }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { 
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: false
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {dishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <Container>
                <div className="propriety">
                  <FiHeart size={24}/>
                </div>
                <img src={dish.image} alt={`Imagem de ${dish.title}`} />
                <h2>{dish.title}</h2>
                <span>{dish.description}</span>
                <p>{dish.price}</p>
                <div className="select">
                  <QuantityControl             
                    quantity={quantity}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease} 
                  />
                  <Button title="Incluir"/>
                </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Content>
  );
}
