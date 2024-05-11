import { Button, Header } from "./styled";
import { ReactComponent as Cart } from "../../assets/Vector.svg";
import { IProducts } from "../../interfaces/IProduct";

interface ICartItem {
  cartItems: IProducts[];
  handleToggle: () => void;
}

export const HeaderComponent = ({ cartItems, handleToggle }: ICartItem) => {
  return (
    <Header>
      <div className="header--logo">
        <h3>MKS</h3>
        <span>Sistemas</span>
      </div>
      <Button onClick={handleToggle}>
        <Cart />
        {cartItems.length}
      </Button>
    </Header>
  );
};
