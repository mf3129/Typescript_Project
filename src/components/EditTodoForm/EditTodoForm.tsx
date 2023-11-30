import React, {useState, FormEvent} from 'react';
import styles from './EditTodoForm.module.css';
import { toDoItemProp } from '../../utils/types/types.d';


type EditTodoFormProp = {
  editTask: (identifier: string, value: string) => Promise<void>;
  task: toDoItemProp;
}

export const EditTodoForm = ({editTask, task}: EditTodoFormProp) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent default action
      e.preventDefault();
      // edit todo
      editTask(task.identifier, value);
    };

  return (
    <form onSubmit={handleSubmit} className={styles.TodoForm}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.todoInput}
        placeholder='Update task'
        minLength={20}
        maxLength={300}
      />
      <button type="submit" className={styles.todoBtn}>Edit Task</button>
    </form>
  )
}
