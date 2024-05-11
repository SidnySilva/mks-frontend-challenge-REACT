import { Cart } from "./styled";
import { CartCardComponent } from "../cards/cartCard";
import { ICart, IProducts } from "../../interfaces/IProduct";
import { useState } from "react";
import { formatNumber } from "../../util/formatNumber";
import OverlayComponent from "../animation/purchaseAnim";

interface ITeste {
  handleToggle: () => void;
  cart: ICart;
}

export const CartComponent = ({ handleToggle, cart }: ITeste) => {
  const renderedItemIds: Record<number, boolean> = {};

  const [isOpen, setIsOpen] = useState(false);

  const [showText, setShowText] = useState(false);

  const finishPurchase = () => {
    setTimeout(() => {
      setShowText(true);
    }, 500);

    setTimeout(() => {
      setIsOpen(false);
      cart.clearCart();
      handleToggle();
    }, 3000);
  };

  return (
    <Cart>
      <div className="cart--topContent--container">
        <span>Carrinho de compras</span>
        <button className="close--button" onClick={handleToggle}>
          X
        </button>
      </div>
      <div className="card--cart--cointainer">
        {cart.cartItems.length === 0 ? (
          <p className="empty--cart">Carrinho vazio!</p>
        ) : (
          cart.cartItems
            .filter((item) => {
              if (renderedItemIds[item.id]) {
                return false;
              }
              renderedItemIds[item.id] = true;
              return true;
            })
            .map((item: IProducts) => (
              <CartCardComponent
                id={item.id}
                name={item.name}
                photo={item.photo}
                price={item.price}
                key={item.id}
                quantity={cart.itemQtd(item.id)}
                cart={cart}
              />
            ))
        )}
      </div>
      {cart.cartItems.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="cart--total--container">
            <span className="cart--total">Total:</span>
            <span className="cart--price">
              R$
              {formatNumber(
                cart.cartItems.reduce((a, b) => a + Number(b.price), 0)
              )}
            </span>
          </div>
          <button
            className="purchase--button"
            onClick={() => {
              setIsOpen(true);
              finishPurchase();
            }}>
            Finalizar Compra
          </button>
        </>
      )}
      <OverlayComponent isOpen={isOpen} showText={showText} />
    </Cart>
  );
};
