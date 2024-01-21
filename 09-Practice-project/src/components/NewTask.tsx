import React, { useRef, useState } from 'react';
import Modal, { DialogHandle } from './Modal';

type NewTaskProps = {
  onAdd: (task: string) => void;
};

const NewTask = ({ onAdd }: NewTaskProps) => {
  const [enteredTask, setEnteredTask] = useState<string>('');
  const dialog = useRef<DialogHandle>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      dialog.current?.open()
      return;
    }

    onAdd(enteredTask);
    setEnteredTask('');
  };

  return (
    <>
      <Modal ref={dialog} buttonCaption="Okay">
        empty task.
      </Modal>
      <div className="flex items-center gap-4 my-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;
