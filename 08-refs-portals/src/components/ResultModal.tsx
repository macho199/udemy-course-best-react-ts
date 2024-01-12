import React, { forwardRef, useImperativeHandle, useRef } from "react";

type ResultModalProps = {
    result: string
    targetTime: number
};

export type DialogHandle = {
  open: () => void
}

const ResultModal = forwardRef<DialogHandle, ResultModalProps>(({result, targetTime}: ResultModalProps, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current?.showModal()
      }
    }
  })
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal;
