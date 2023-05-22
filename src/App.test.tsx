import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe("The counter", () => {
    it('starts with 0', () => {
        render(<App/>);
        const counter = screen.getByText(/[0-9]+/i);
        expect(counter).toBeInTheDocument();
        expect(counter.textContent).toBe('Counter: 0');
    });
});
