import React, {useState, FormEvent, ChangeEvent} from 'react'
import styles from "./TodoForm.module.css";

type TodoFormProp = {
  addTodo: (value: string) => void;
}

export const TodoForm = ({addTodo}: TodoFormProp) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } =  event.target;

      setValue(value);
    }

    return (
      <>
        <form onSubmit={handleSubmit} className={styles.TodoForm} data-testid="todoForm">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            className={styles.todoInput}
            placeholder='What is the task today?'
            minLength={20}
            maxLength={300}
            data-testid="todoFormInput"
          />
          <button type="submit" className={styles.todoBtn}>Add Task</button>
        </form>
        <p className={styles.p}>In order to toggle the shorten mode for long task, it must be greater than 60 characters.</p>
      </>
    )
}
