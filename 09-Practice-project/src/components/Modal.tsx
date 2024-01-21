import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

type ModalProps = {
  children: React.ReactNode
  buttonCaption: string
};

export type DialogHandle = {
  open: () => void;
};

const Modal = forwardRef<DialogHandle, ModalProps>(({ children, buttonCaption }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right"><Button>{buttonCaption}</Button></form>
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  );
});

export default Modal;
