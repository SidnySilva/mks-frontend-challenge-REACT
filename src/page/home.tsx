import { useState } from "react";
import { CardComponent } from "../components/cards/card";
import { FooterComponent } from "../components/footer/footer";
import { HeaderComponent } from "../components/header/header";
import { Home } from "./styled";
import { CartComponent } from "../components/cart/cart";
import { motion, useAnimation } from "framer-motion";
import { useGet } from "../queries/products";
import { IProducts } from "../interfaces/interfaces";
import { useCart } from "../util/cartFunctions";

interface IProps {
  cart: ReturnType<typeof useCart>;
}

export const HomePage = ({ cart }: IProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  const { data, isLoading } = useGet();

  const handleToggle = async () => {
    if (isVisible) {
      await controls.start({ right: 0, opacity: 1 });
    } else {
      await controls.start({ right: "-100%", opacity: 0 });
    }
    setIsVisible(!isVisible);
  };

  return (
    <Home>
      <HeaderComponent cartItems={cart.cartItems} handleToggle={handleToggle} />
      <div className="card--container">
        {isLoading ? (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`shimmer-${i}`} className="shimmer"></div>
            ))}
          </>
        ) : (
          <>
            {data &&
              data.products.map((item: IProducts) => (
                <CardComponent
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  photo={item.photo}
                  price={item.price}
                  brand={item.brand}
                  cart={cart}
                />
              ))}
          </>
        )}
      </div>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          right: "-100%",
          height: "100vh",
          zIndex: 3,
        }}
        animate={controls}>
        <CartComponent handleToggle={handleToggle} cart={cart} />
      </motion.div>
      <FooterComponent />
    </Home>
  );
};
