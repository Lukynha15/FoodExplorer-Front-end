import { FiX, FiSearch } from "react-icons/fi";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { Container, Header, Content } from "./styles";
import { ButtonText } from "../../components/buttonText";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Menu() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  useEffect(() => {
    async function fetchDishes() {
      if (search.trim() !== "") {
        try {
          const response = await api.get(`/dishes?search=${search}`);
          setDishes(response.data);
        } catch (error) {
          console.error("Erro ao buscar pratos:", error);
        }
      } else {
        setDishes([]);
      }
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Header>
        <FiX onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
        <p>Menu</p>
      </Header>

      <Content>
        <div style={{ position: 'relative', width: '100%' }}>
          <Input
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {dishes.length > 0 && (
            <ul style={{
              position: 'absolute',
              top: '40px',
              backgroundColor: '#fff',
              width: '100%',
              maxHeight: '200px',
              overflowY: 'auto',
              borderRadius: '4px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              zIndex: 1000,
              padding: '10px',
              margin: 0,
              listStyle: 'none',
              color: '#000',
            }}>
              {dishes.map(dish => (
                <li
                  key={dish.id}
                  style={{ padding: '5px 10px', cursor: 'pointer' }}
                  onClick={() => navigate(`/dishes/${dish.id}`)}
                >
                  {dish.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="options">
          {user.role === USER_ROLE.ADMIN && (
            <ButtonText title="Novo prato" onClick={() => navigate("/new")} />
          )}
          <ButtonText title="Sair" onClick={handleSignOut} />
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
