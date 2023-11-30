import React, { useState, useEffect, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "../Todo/Todo";
import { TodoForm } from "../TodoForm/TodoForm";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";
import SearchBar from "../SearchBar/SeachBar";
import { addTask } from "../../utils/requests/request";
import { deleteTask } from "../../utils/requests/request";
import { updateTask } from "../../utils/requests/request";
import styles from './TodoWrapperLocalStorage.module.css';
import { toDoItemProp } from "../../utils/types/types.d";

uuidv4();

export const TodoWrapperLocalStorage = () => {
    const [todos, setTodos] = useState< [] | Array<toDoItemProp>>([]);
    const [filteredTasks, setFilteredTask] = useState(todos);
    const [searchField, setSearchField] = useState('');
    const [requestError, setErrors] = useState('');

    useEffect(() => {
        const savedTodos: Array<toDoItemProp> | [] = JSON.parse(localStorage.getItem('todos')!) || []; // take a look here
        setTodos(savedTodos);
    }, []);

    useEffect(() => {
        const newFilteredTasks: Array<toDoItemProp> | [] = todos?.filter((currentTask: toDoItemProp) => {
          return currentTask.task.toLocaleLowerCase().includes(searchField);
        });
    
        setFilteredTask(newFilteredTasks);
      }, [todos, searchField]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>)=> {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };
    
    //Async Request to Server
    const addTodo = async (todo: string) => {
        try {
            let fullTasks = {
                todos, 
                newTask: {identifier: uuidv4(), task: todo, completed: false, isEditing: false, important: false}
            };
            
            let newToDos = await addTask(fullTasks);

            setTodos(newToDos);
            localStorage.setItem('todos', JSON.stringify(newToDos));
        } catch(error) {
            setErrors(error as string);
        }

    }

    const deleteTodo = async (id: string) => {
        try {
            let newToDos = await deleteTask(todos, id);
            setTodos(newToDos);
            localStorage.setItem('todos', JSON.stringify(newToDos));
        } catch (error) {
            setErrors(error as string);
        }
    }

    const editTask = async (id: string, newTaskName: string) => {    
        try {
            let task = todos.find((todo) => todo.identifier === id);
            let newToDos = await updateTask(todos, task, newTaskName);

            setTodos(newToDos);
            localStorage.setItem('todos', JSON.stringify(newToDos));
        } catch(error) {
            setErrors(error as string);
        }
    }

    //Toggling events
    const toggleComplete = (id: string) => {    
        let newToDos = filteredTasks?.map(todo => todo.identifier === id ? {...todo, completed: !todo.completed} : todo);   
        setTodos(newToDos);
        localStorage.setItem('todos', JSON.stringify(newToDos));
    }

    const toggleTaskImportance = (id: string) => {
        let newToDos = filteredTasks?.map(todo => todo.identifier === id ? {...todo, important: !todo.important} : todo)
        setTodos(newToDos);
        localStorage.setItem('todos', JSON.stringify(newToDos));
    }

    const toggleTaskEditing = (id: string) => {
        let newToDos = filteredTasks?.map(todo => todo.identifier === id ? {...todo, isEditing: !todo.isEditing} : todo);
        setTodos(newToDos);
    }

    return (
        <div className={styles.TodoWrapper} data-testid="todoWrapper">
            <h1>TO DO LIST</h1>
            <SearchBar onChangeHandler={onSearchChange} todoListEmpty={todos?.length === 0} />
            <TodoForm addTodo={addTodo} />
            <p className={styles.requestError}> {requestError && requestError} </p>
            {filteredTasks?.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTask={editTask} task={todo} key={index} />
                ) : (
                    <Todo
                        item={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        toggleTaskImportance={toggleTaskImportance}
                        toggleTaskEditing={toggleTaskEditing}
                        deleteTodo={deleteTodo}
                    />
                )
            ))}
        </div>
    )
}
