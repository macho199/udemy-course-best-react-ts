import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
import { Product } from '../App';

export type DialogHandle = {
  open: () => void
}

type CartModalProps = {
  cartItems: Product[]
  onUpdateCartItemQuantity: (productId: string, amount: number) => void
  title: string
  actions: React.ReactNode
}

const CartModal = forwardRef<DialogHandle, CartModalProps>(({ cartItems, onUpdateCartItemQuantity, title, actions }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog?.current?.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal') as HTMLElement
  );
});

export default CartModal;
