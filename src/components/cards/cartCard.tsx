import { CartCard } from "./styledCartCard";
import { ICart } from "../../interfaces/IProduct";
import { formatNumber } from "../../util/formatNumber";

interface IProducts {
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity: number;
  cart: ICart;
}

export const CartCardComponent = ({
  id,
  name,
  photo,
  price,
  quantity,
  cart,
}: IProducts) => {
  return (
    <CartCard>
      <img src={photo} alt="#" />
      <button
        className="cart--delete--button"
        onClick={() => cart.removeItemFromCart(id)}>
        X
      </button>
      <span className="title">{name}</span>
      <div className="qtd--container">
        <div className="qtd--counter">
          <span className="qtd--text">Qtd:</span>
          <div className="qtd--controller">
            <button
              className="change--qtd--button"
              onClick={() => cart.removeOneItemFromCart(id)}>
              -
            </button>
            <span className="stick" id="left">
              |
            </span>
            <span className="qtd--value">{quantity}</span>
            <span className="stick" id="right">
              |
            </span>
            <button
              className="change--qtd--button"
              onClick={() =>
                cart.cartItems.find((item) =>
                  item.id === id ? cart.addItemToCart(item) : null
                )
              }>
              +
            </button>
          </div>
        </div>
        <span className="qtd--price">R${formatNumber(Number(price))}</span>
      </div>
    </CartCard>
  );
};
