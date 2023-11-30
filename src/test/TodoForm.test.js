import { TodoForm } from "../components/TodoForm/TodoForm";
import { Todo } from "../components/Todo/Todo";
import '@testing-library/jest-dom';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import { mount, shallow } from 'enzyme';

afterEach(() => {
    cleanup();
})

describe('Todo Form Component', () => {
    const todoProps = {
        item: {
            identifier: "111",
            task: "Testing here",
            completed: false,
            isEditing: false,
            important: false,
        },
        deleteTodo: jest.fn(),
        toggleTaskEditing: jest.fn(),
        toggleComplete: jest.fn(),
        toggleTaskImportance: jest.fn()
    }

    test('it renders the TodoForm Component', () => {
        render(<TodoForm addTodo={<Todo {...todoProps} />} />);

        const inputElement = screen.getByTestId("todoFormInput");

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).not.toBeDisabled();
        expect(inputElement).toHaveAttribute('type', 'text');
        expect(inputElement).toHaveAttribute('placeholder', 'What is the task today?');
    })
})




// npm test src/test/TodoForm.test.js