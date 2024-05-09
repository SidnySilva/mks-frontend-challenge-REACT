import { Cart } from "./styled";
import { ReactComponent as CLoseButton } from "../../assets/Close_cart.svg";
import { CartCardComponent } from "../cards/cartCard";
import { productList } from "../../util/products";


interface IProducts {
  id: number;
  name: string;
  photo: string;
  price: string;
}

export const CartComponent = () => {
  return (
    <Cart>
      <div className="cart--topContent--container">
        <span>Carrinho de compras</span>
        <button className="close--button">X</button>
      </div>
      <div className="card--cart--cointainer">
        {productList.map((item: IProducts) => (
          <CartCardComponent
            id={item.id}
            name={item.name}
            photo={item.photo}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
      <div className="cart--total--container">
        <span className="cart--total">Total:</span>
        <span className="cart--price">R$798</span>
      </div>
      <button className="purchase--button">Finalizar Compra</button>
    </Cart>
  );
};
