import { Button, Header } from "./styled";
import { ReactComponent as Cart } from "../../assets/Vector.svg";
import { IProducts } from "../../interfaces/IProduct";

interface ICartItem {
  cartItems: IProducts[];
}

export const HeaderComponent = ({ cartItems }: ICartItem) => {
  return (
    <Header>
      <div className="header--logo">
        <h3>MKS</h3>
        <span>Sistemas</span>
      </div>
      <Button>
        <Cart />
        {cartItems.length}
      </Button>
    </Header>
  );
};
