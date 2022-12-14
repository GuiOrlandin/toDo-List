import styles from "./Task.module.css";
import checkicon from "../assets/checkicon.svg";
import checkedicon from "../assets/checkedicon.svg";
import Modal from "react-modal";
import { Trash } from "phosphor-react";
import { useState } from "react";
import { DeleteTaskModal } from "./DeleteTaskModal";

interface task {
  id: string;
  content: string;
  isChecked: boolean;
}

interface taskProps {
  task: task;
  taskList: Array<task>;
  handleDeleteTask: (taskToDelete: task) => void;
  handleCompletedTask: (taskId: string) => void;
}

Modal.setAppElement("#root");

export function Task({
  task,
  taskList,
  handleDeleteTask,
  handleCompletedTask,
}: taskProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function deleteTask() {
    handleDeleteTask(task);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.wrapperTask}>
      {task.isChecked ? (
        <label className={styles.riskText} htmlFor={task.id}>
          <img src={checkedicon} alt="" />
          {task.content}
        </label>
      ) : (
        <label htmlFor={task.id}>
          <img src={checkicon} alt="" />
          {task.content}
        </label>
      )}
      <input
        onChange={() => handleCompletedTask(task.id)}
        type="checkbox"
        id={task.id}
        value="on"
      />
      <button onClick={handleOpenModal} className={styles.trash}>
        <Trash size={24} />
      </button>
      <DeleteTaskModal
        handleCloseModal={handleCloseModal}
        deleteTask={deleteTask}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
}
