import { ReactComponent as Bag } from "../../assets/shopping-bag.svg";
import { IProducts } from "../../interfaces/IProduct";
import { Card } from "./styledCard";

interface Iteste {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  addItemToCart: () => void;
}

export const CardComponent = ({
  id,
  name,
  brand,
  description,
  photo,
  price,
  addItemToCart,
}: Iteste) => {
  return (
    <Card>
      <img src={photo} alt="#" />
      <div className="topContent--container">
        <h2 className="topContent--title">{name}</h2>
        <span className="topContent--price">R${Number(price)}</span>
      </div>
      <span className="card--description">{description}</span>
      <button className="card--button" onClick={addItemToCart}>
        <Bag />
        COMPRAR
      </button>
    </Card>
  );
};
