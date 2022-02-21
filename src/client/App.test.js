import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('App tests', () => {
    const initialState = { output: 0 };
    const mockStore = configureStore();
    let store;
    it('renders a message', () => {
        store = mockStore(initialState);
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        render(getByText)
        expect(screen.getByText('0 items')).toBeInTheDocument()
    })
})
