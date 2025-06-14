import { CiMenuBurger, CiReceipt } from "react-icons/ci";
import { MdHexagon } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';
import { DesktopContainer, MobileContainer } from "./styles";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { Button } from "../button";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

function MobileHeader() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <CiMenuBurger onClick={() => navigate("/menu")} cursor={"pointer"} />
      <h1 onClick={() => navigate("/")}><MdHexagon />food explorer</h1>
      <div className="receipt">
        <a href="#">0</a>
        <CiReceipt size={30} cursor={"pointer"} />
      </div>
    </MobileContainer>
  );
}

function DesktopHeader() {
  const { user } = useAuth();
  const { signOut } = useAuth();
  const navigate = useNavigate();

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
    <DesktopContainer isAdmin={user.role === USER_ROLE.ADMIN}>
      {user.role === USER_ROLE.ADMIN && (
        <div className="title">
          <h1 onClick={() => navigate("/menu")}  cursor={"pointer"}><MdHexagon /> food explorer</h1>
          <span>Admin</span>
        </div>
      )}

      {user.role === USER_ROLE.USER && (
        <h1><MdHexagon />food explorer</h1>
      )}

      <div style={{ position: 'relative' }}>
        <FiSearch style={{ position: 'absolute', top: '15px', left: '10px' }}  />
        <input
          type="text"
          placeholder="Buscar por pratos ou ingredientes"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {dishes.length > 0 && (
          <ul style={{
            position: 'absolute', 
            backgroundColor: '#fff',
            width: '581px',
            zIndex: 1000,
            padding: '10px',
            marginTop: '5px',
            borderRadius: '4px',
            maxHeight: '200px',
            overflowY: 'auto',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}>
            {dishes.map(dish => (
              <li 
                key={dish.id} 
                style={{ padding: '5px 0', color: '#000', cursor: 'pointer' }}
                onClick={() => navigate(`/dishes/${dish.id}`)}
              >
                {dish.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {user.role === USER_ROLE.ADMIN && (
        <Button title="Novo prato" onClick={() => navigate("/new")} />
      )}

      {user.role === USER_ROLE.USER && (
        <Button title="(0) Pedidos" icon={CiReceipt} />
      )}

      <FiLogOut onClick={handleSignOut} cursor={"pointer"} />
    </DesktopContainer>
  );
}

export function Header() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
    </>
  );
}
