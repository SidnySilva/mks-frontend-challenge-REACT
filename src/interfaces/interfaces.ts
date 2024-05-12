export interface IProducts {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICart {
  cartItems: IProducts[];
  clearCart: () => void;
  itemQtd: (productId: number) => number;
  addItemToCart: (product: IProducts) => void;
  removeItemFromCart: (productId: number) => void;
  removeOneItemFromCart: (productId: number) => void;
}
