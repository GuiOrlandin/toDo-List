import styles from "./Task.module.css";
import checkicon from "../assets/checkicon.svg";
import checkedicon from "../assets/checkedicon.svg";
import { CheckCircle, Circle, Divide, Trash } from "phosphor-react";
import { ChangeEvent, cloneElement, useState } from "react";

interface task {
  id: number;
  content: string;
  isChecked: boolean;
}

interface taskProps {
  task: task;
  taskList: Array<task>;
}

export function Task({ task, taskList }: taskProps) {
  const [checked, setChecked] = useState(false);
  console.log(task)

  function checkTask() {
    const taskChecked = taskList.filter((listedTask) => {
      return task.id === listedTask.id;
    });
    const newValue = { ...taskChecked, isChecked: true };
    console.log(task.id);
  }

  function handleChangeCheck() {
    setChecked(!checked);
    checkTask();
  }

  return (
    <div className={styles.wrapperTask}>
      {checked ? (
        <label className={styles.riskText} htmlFor="chktask">
          <img src={checkedicon} alt="" />
          {task.content}
        </label>
      ) : (
        <label htmlFor="chktask">
          <img src={checkicon} alt="" />
          {task.content}
        </label>
      )}
      <input
        onChange={handleChangeCheck}
        checked={checked}
        type="checkbox"
        id="chktask"
        value="on"
      />
      <Trash size={24} className={styles.trash} />
    </div>
  );
}
