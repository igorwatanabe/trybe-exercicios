import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App';
import counterReducer from './redux/reducers/counterReducer';


const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('Testa o clique dos botões', () => {
  test('Com o valor padrão do reducer, os botões devem incrementar os valores corretamente', () => {
    renderWithRedux(<App />);

    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(2);

    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(buttons[0]);
    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.click(buttons[1]);
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  test('Iniciando o estado global com um valor personalizado, os botões devem incrementar os valores corretamente', () => {
    const initialState = {
      counterReducer: {
        count: 5,
      }
    }
    renderWithRedux(<App />, { initialState });

    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(2);

    expect(screen.getByText('5')).toBeInTheDocument();

    userEvent.click(buttons[0]);
    expect(screen.getByText('6')).toBeInTheDocument();

    userEvent.click(buttons[1]);
    expect(screen.getByText('11')).toBeInTheDocument();
  })
})