import { Route, Routes } from "react-router-dom";

import { Dish } from "../pages/Dish";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { New } from "../pages/New";
import { Update } from "../pages/Update";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/dishes/:id" element={<Dish />} />
      <Route path="/new" element={<New />} />
      <Route path="/dishes/update/:id" element={<Update />} />
    </Routes>
  )
}