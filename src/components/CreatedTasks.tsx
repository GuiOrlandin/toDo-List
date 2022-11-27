import styles from "./CreatedTasks.module.css";
import tasksicon from "../assets/tasksicon.svg";
import { Task } from "./Task";
import { ChangeEvent } from "react";

interface cratedTasksProps {
  taskList: Array<taskProps>;
}

interface taskProps {
  id: number;
  content: string;
  isChecked: boolean;
}

export function CreatedTasks({ taskList }: cratedTasksProps) {
  const contentLength = taskList.length;
  return (
    <div>
      <div className={styles.countertasks}>
        <div className={styles.createdTasks}>
          <p>{`Tarefas criadas`}</p>
          <p>{contentLength}</p>
        </div>
        <div className={styles.completedTasks}>
          <p>{`Concluídas`}</p>
          <p>{`1`}</p>
        </div>
      </div>
      {contentLength === 0 ? (
        <div className={styles.tasksBox}>
          <img src={tasksicon} alt="" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> Crie tarefas
            e organize seus itens a fazer
          </p>
        </div>
      ) : (
        <div className={styles.tasksBox}>
          {taskList.map((task) => {
            return <Task taskList={taskList}  key={task.id} task={task} />;
          })}
        </div>
      )}

      {/* (taskLengh = 0 && (
          <div className={styles.tasksBox}>
            <img src={tasksicon} alt="" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong> Crie
              tarefas e organize seus itens a fazer
            </p>
          </div>
        ))
      
        {taskLengh > 0 && (
        <div className={styles.tasksBox}>
          <Task />
        </div>
      ) */}
    </div>
  );
}
