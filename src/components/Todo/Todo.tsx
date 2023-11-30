import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare, faStar, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import { condenseString } from '../utils/utils';
import styles from './Todo.module.css';
import { toDoItemProp } from '../../utils/types/types.d';

type TodoProps = {
  item: toDoItemProp;
  deleteTodo: (identifier: string) => void;
  toggleTaskEditing: (identifier: string) => void;
  toggleComplete: (identifier: string) => void;
  toggleTaskImportance: (identifier: string) => void;
}

export const Todo = ({item, deleteTodo, toggleTaskEditing, toggleComplete, toggleTaskImportance}: TodoProps) => {
  const { identifier, important, completed, task } = item;
  let isLargeText = task.length > 60;

  const [shortenString, setShortenString] = useState(false);

  const toggleShortenString = () => {
    setShortenString(!shortenString)
  }

  return (
    <div className={`${styles.Todo} ${important && styles.important}`}>
      <div className={`${styles.todoText}`}>
        <Tooltip id="my-tooltip" />
        <p 
          className={`${completed && styles.completed}`}
          onClick={() => toggleComplete(identifier)}
          data-tooltip-id="my-tooltip" data-tooltip-content={isLargeText ? 'Click last button to toggle view' : 'Toggle Inactive For Item'}
        >
            {shortenString ? condenseString(task, 60) : task}
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => toggleTaskEditing(identifier)} />
        <FontAwesomeIcon className={styles.faTrash} icon={faTrash} onClick={() => deleteTodo(identifier)} />
        <FontAwesomeIcon className={styles.faStar} icon={faStar} onClick={() => toggleTaskImportance(identifier)} />
        {isLargeText ? <FontAwesomeIcon className={styles.faArrowDownShortWide} icon={faArrowDownShortWide} onClick={() => toggleShortenString()} /> : <></>}
      </div>
    </div>
  )
}
