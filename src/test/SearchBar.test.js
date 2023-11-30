import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import SearchBar from '../components/SearchBar/SeachBar';

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe('SearchBar Component', () =>  {
    const onChangeHandler = jest.fn();
    const getSearchBar = () => screen.getByTestId('searchBarInput');

    test('it renders the SearchBar Component with todolistEmpty set to true', () => {
        render(<SearchBar onChangeHandler={onChangeHandler()} todoListEmpty={true} />);

        const input = getSearchBar();

        expect(input).toBeInTheDocument();
        expect(input).toHaveDisplayValue("");
        expect(input).toHaveAttribute('type', 'search');
        expect(input).toHaveAttribute('placeholder', "Add 1 task minimum to search");
        expect(input).toBeDisabled()
    });


    test('it renders the SearchBar Component with todolistEmpty set to false', () => {
        render(<SearchBar onChangeHandler={onChangeHandler} todoListEmpty={false} />);

        const input = getSearchBar();

        expect(input).toBeInTheDocument();
        expect(input).toHaveDisplayValue("");
        expect(input).toHaveAttribute('type', 'search');
        expect(input).toHaveAttribute('placeholder', "Search A Task");
        expect(input).not.toBeDisabled();
    })
})




// npm test src/test/SearchBar.test.js
