import { Routes, Route } from "react-router-dom";

import { HomePage } from "../page/home";
import { useCart } from "../util/cartFunctions";

export const Router = () => {
  const cart = useCart();
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
    </Routes>
  );
};
