import "./global.css";
import styles from "./App.module.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { CreatedTasks } from "./components/CreatedTasks";

const initialTask = [
  {
    id: 1,
    content: "text1",
    publishedAt: new Date("2022-11-20 21:52:00"),
  },
  {
    id: 2,
    content: "text2",
    publishedAt: new Date("2022-11-20 21:55:00"),
  },
];
interface taskProps {
  id: number;
  content: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Array<taskProps>>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newId = tasks.length;

    setTasks([...tasks, { id: newId, content: newTaskText, isChecked: false }]);
    setNewTaskText("");
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
          placeHolder="Adicionar uma nova tarefa"
        />
        <CreatedTasks taskList={tasks} />
      </div>
    </div>
  );
}
