import { useState } from "react";
import { CardComponent } from "../components/cards/card";
import { FooterComponent } from "../components/footer/footer";
import { HeaderComponent } from "../components/header/header";
import { Home } from "./styled";
import { IProducts } from "../interfaces/IProduct";
import { fetchProducts } from "../services/api";
import { useQuery } from "react-query";

export const HomePage = () => {
  const [cartItems, setCartItems] = useState<IProducts[]>([]);

  // Fetch products data from API.
  const { data, isLoading, isError } = useQuery("products", fetchProducts, {
    initialData: [], // Dados iniciais vazios
    refetchOnWindowFocus: false, // Evita a recarga automática dos dados quando a janela ganha foco
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const addItemToCart = (product: IProducts) => {
    setCartItems([...cartItems, product]);
  };

  // Função para remover um item do carrinho
  const removeItemFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  console.log(data);
  return (
    <Home>
      <HeaderComponent cartItems={cartItems} />
      <div className="card--container">
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
              addItemToCart={() => addItemToCart(item)}
            />
          ))}
      </div>
      {/* <CartComponent /> */}
      <FooterComponent />
    </Home>
  );
};
