import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import { Todo } from '../components/Todo/Todo';

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe('Todo Component', () =>  {
    test('renders component', () => {
        render(<Todo />);
    });

    // To do component renders
    test('Todo rendering', () => {

        expect(todo)
    })
})