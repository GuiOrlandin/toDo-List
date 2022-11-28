import { ChangeEvent, FormEvent } from "react";
import addincon from "../assets/addicon.svg";
import styles from "./AddTask.module.css";

interface addTaskProps {
  handleCreateNewTask: (event: FormEvent) => void;
  handleAddTask: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  newTaskText: string;
  placeHolder: string;
}

export function AddTask({
  handleCreateNewTask,
  handleAddTask,
  newTaskText,
  placeHolder,
}: addTaskProps) {
  return (
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.addTask}>
        <textarea
          onChange={handleAddTask}
          value={newTaskText}
          placeholder={placeHolder}
        />
        <button type="submit">
          Criar <img src={addincon} />
        </button>
      </form>
    </div>
  );
}
