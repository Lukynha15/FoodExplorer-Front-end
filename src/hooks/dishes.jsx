import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const DishContext = createContext({});

function DishProvider({ children }) {
  const [dishes, setDishes] = useState([]);

  async function fetchDishes() {
    try {
      const response = await api.get("/dishes");
      setDishes(response.data);
    } catch (error) {
      console.error("Erro ao buscar pratos:", error);
    }
  }

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <DishContext.Provider value={{ dishes, fetchDishes }}>
      {children}
    </DishContext.Provider>
  );
}

function useDish() {
  const context = useContext(DishContext);
  return context;
}

export { DishProvider, useDish };
