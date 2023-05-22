import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe("The counter", () => {
    it('starts with 0', () => {
        render(<App/>);
        const counter = screen.getByText(/[0-9]+/i);
        expect(counter).toBeInTheDocument();
        expect(counter.textContent).toBe('Counter: 0');
    });

    it('increments on button click', () => {
        render(<App/>);
        const counter = screen.getByText(/[0-9]+/i);
        expect(counter).toBeInTheDocument();
        fireEvent.click(screen.getByText(/INCREMENT/));
        expect(counter.textContent).toBe('Counter: 1');
    });
});
