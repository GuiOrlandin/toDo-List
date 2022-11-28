import styles from "./DeleteTaskModal.module.css";
import Modal from "react-modal";

interface task {
  id: number;
  content: string;
  isChecked: boolean;
}

interface deleteTaskModalProps {
  deleteTask: () => void;
  handleCloseModal: () => void;
  modalIsOpen: boolean;
}

export function DeleteTaskModal({
  deleteTask,
  handleCloseModal,
  modalIsOpen,
}: deleteTaskModalProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      overlayClassName="reactModalOverlay"
      className={styles.deleteModal} 
      contentLabel="Example Modal"
    >
      <div >
        <h1>Excluir tarefa</h1>
        <p>Você tem certeza que gostaria de excluir esta tarefa?</p>

        <div>
          <button onClick={handleCloseModal}>Cancelar</button>
          <button onClick={deleteTask}>Sim, excluir</button>
        </div>
      </div>
    </Modal>
  );
}
