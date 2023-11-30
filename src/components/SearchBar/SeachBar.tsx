import React, { ChangeEvent } from 'react';
import styles from './SearchBar.module.css';

type SearchBarProps = {
    todoListEmpty: boolean;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({onChangeHandler, todoListEmpty}: SearchBarProps) => {
    const searchText = (todoListEmpty: boolean) => {
        let text = todoListEmpty ? "Add 1 task minimum to search" : "Search A Task";
        return text;
    }

    return (
        <input 
            className={styles.todoInput}
            type="search"
            placeholder={searchText(todoListEmpty)}
            onChange={onChangeHandler}
            disabled={todoListEmpty}
            data-testid="searchBarInput"
        />
    )
}

export default SearchBar;