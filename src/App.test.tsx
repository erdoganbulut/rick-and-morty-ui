import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

test('renders learn app layout', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
  });
  await waitFor(() => {
    const layoutElement = screen.getByTestId('app-layout-system');
    expect(layoutElement).toBeInTheDocument();
  });
});
