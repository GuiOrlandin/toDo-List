import styles from "./CreatedTasks.module.css";
import tasksicon from "../assets/tasksicon.svg";
import { Task } from "./Task";

interface cratedTasksProps {
  taskList: Array<taskProps>;
  handleDeleteTask: (taskToDelete: taskProps) => void;
  handleCompletedTask: (taskId: string) => void;
}

interface taskProps {
  id: string;
  content: string;
  isChecked: boolean;
}

export function CreatedTasks({ taskList, handleDeleteTask, handleCompletedTask }: cratedTasksProps) {
  const tasksLength = taskList.length;
  const completedTasksLengh = taskList.filter((task) => task.isChecked).length

  return (
    <div>
      <div className={styles.countertasks}>
        <div className={styles.createdTasks}>
          <p>{`Tarefas criadas`}</p>
          <p>{tasksLength}</p>
        </div>
        <div className={styles.completedTasks}>
          <p>{`Concluídas`}</p>
          <p>{` ${completedTasksLengh} de ${tasksLength} `}</p>
        </div>
      </div>
      {tasksLength === 0 ? (
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
            return (
              <Task
                handleDeleteTask={handleDeleteTask}
                taskList={taskList}
                key={task.id}
                task={task}
                handleCompletedTask={handleCompletedTask}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
