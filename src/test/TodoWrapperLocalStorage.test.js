import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { TodoWrapperLocalStorage } from '../components/TodoWrapperLocalStorage/TodoWrapperLocalStorage';

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe('TodoWrapperLocalStorage Component', () =>  {
    test('renders the landing page', () => {
        render(<TodoWrapperLocalStorage />);

        expect(screen.getByTestId("todoWrapper")).toBeInTheDocument();
        expect(screen.getByText('TO DO LIST')).toBeInTheDocument();
        expect(screen.getByText('In order to toggle the shorten mode for long task, it must be greater than 60 characters.')).toBeInTheDocument();
    });
})



// npm test src/test/TodoWrapperLocalStorage.test.js
