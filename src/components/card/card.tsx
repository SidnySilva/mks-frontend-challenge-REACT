import Image from "next/image";
import { Card } from "./styled";

export const CardComponent = ({}) => {
  return (
    <Card>
      <Image src="#" alt="#" />
      <div>
        <h2 className="card--title">Apple Watch Series 4 GPS</h2>
        <span className="card--price">R$399</span>
      </div>
      <span className="card--description">
        Redesigned from scratch and completely revised.
      </span>
      <button className="card--button">Comprar</button>
    </Card>
  );
};
