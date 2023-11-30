export const addTask = async (taskInfo) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_TODO_API}/v1/add-task`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(taskInfo)
            }
        );

        if (!response.ok) {
            const text = await response.text();
            throw Error(text);
        }

        let data = await response.json();

        return data;

    } catch(error) {
        return `Error Adding The Task. Error Here: ${error}`;
    }
}

export const updateTask = async (toDoList, taskInfo, newTaskName) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_TODO_API}/v1/tasks/task/update-task/${taskInfo.identifier}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({
                    toDoList,
                    taskInfo,
                    newTaskName
                })
            }
        );

        if (!response.ok) {
            const text = await response.text();
            throw Error(text);
        }

        let data = await response.json();

        return data

    } catch(error) {
        return `Error Updating The Task. Error Here: ${error}`;
    }
}

export const deleteTask = async (todoList, taskId) => {
    try {
        let response = await fetch(`${process.env.REACT_APP_TODO_API}/v1/tasks/task/delete-task/${taskId}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    todoList
                })
            }
        );

        if (!response.ok) {
            const text = await response.text();
            throw Error(text);
        }

        let data = await response.json();

        return data;

    } catch(error) {
        return `Error Deleting The Task. Error Here: ${error}`;
    }
}
