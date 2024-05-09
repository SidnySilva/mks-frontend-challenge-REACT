import { CartCard } from "./styledCartCard";

interface IProducts {
  id: number;
  name: string;
  photo: string;
  price: string;
}

export const CartCardComponent = ({ id, name, photo, price }: IProducts) => {
  return (
    <CartCard>
      <img src={photo} alt="#" />
      <button className="cart--delete--button">X</button>
      <span className="title">{name}</span>
      <div className="qtd--container">
        <div className="qtd--counter">
          <button className="change--qtd--button">-</button>
          <span className="stick" id="left">
            |
          </span>
          <span className="qtd--value">0</span>
          <span className="stick" id="right">
            |
          </span>
          <button className="change--qtd--button">+</button>
        </div>
        <span className="qtd--price">R${Number(price)}</span>
      </div>
    </CartCard>
  );
};
