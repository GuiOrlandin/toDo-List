import "./global.css";
import styles from "./App.module.css";
import nextId from "react-id-generator";
import { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { CreatedTasks } from "./components/CreatedTasks";

const initialTask = [
  {
    id: nextId(),
    content: "text1",
    publishedAt: new Date("2022-11-20 21:52:00"),
  }
];
interface taskProps {
  id: string;
  content: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Array<taskProps>>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newId = nextId();

    setTasks([...tasks, { id: newId, content: newTaskText, isChecked: false }]);
    setNewTaskText("");
  }

  function handleCompletedTask(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }
  function handleDeleteTask(taskToDelete: taskProps) {
    const taskWithdoutDeleteOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });
    setTasks(taskWithdoutDeleteOne);
  }

  function handleAddTask(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value);
  }
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <AddTask
          handleCreateNewTask={handleCreateNewTask}
          handleAddTask={handleAddTask}
          newTaskText={newTaskText}
          placeHolder="Adicione uma nova tarefa"
        />
        <CreatedTasks
          handleDeleteTask={handleDeleteTask}
          handleCompletedTask={handleCompletedTask}
          taskList={tasks}
        />
      </div>
    </div>
  );
}
