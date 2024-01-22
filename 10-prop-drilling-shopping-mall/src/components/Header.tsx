import React, { useRef } from 'react';

import CartModal, { DialogHandle } from './CartModal';
import { Cart } from '../App';
import logo from '../assets/logo.png'

type HeaderProps = {
  cart: Cart
  onUpdateCartItemQuantity: (productId: string, amount: number) => void
}

const Header = ({ cart, onUpdateCartItemQuantity }: HeaderProps) => {
  const modal = useRef<DialogHandle>(null);

  const cartQuantity = cart.items.length;

  function handleOpenCartClick() {
    modal?.current?.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src={logo} alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}

export default Header