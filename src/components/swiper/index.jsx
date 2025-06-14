import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from "../card";
import { FiHeart, FiPenTool } from "react-icons/fi";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Container, Content } from './styles';

import { Button } from "../button";
import { QuantityControl } from '../quantityControl';

import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles';
import { TbFilePencil } from 'react-icons/tb';

export function DishSlider({ dishes }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <Content>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {dishes.map(dish => (
          <SwiperSlide key={dish.id}>
            <Container>
                {
                  user.role === USER_ROLE.USER &&
                  <div className="propriety"><FiHeart size={24} /></div>
                }
                {
                  user.role === USER_ROLE.ADMIN &&
                  <div className="propriety"><FiPenTool size={24} /></div>
                }
                <img style={{ cursor: 'pointer' }} onClick={() => navigate(`/dishes/${dish.id}`)} src={`${api.defaults.baseURL}/files/${dish.photo}`} alt={dish.name} />
                <h2>{dish.name}</h2>
                <span className='description'>{dish.description}</span>
                <p>R$ {Number(dish.price).toFixed(2)}</p>
                {
                  user.role === USER_ROLE.USER &&
                  <div className="select">
                    <QuantityControl 
                      quantity={quantity}
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                      className="quantity-control"
                    />
                    <button className='button-add' >Incluir</button>
                  </div>
                }
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Content>
  );
}
