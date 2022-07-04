import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../store';
import CharacterDetail from '.';


test('renders learn character detail', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CharacterDetail />
        </MemoryRouter>
      </Provider>,
    );
  });
  await waitFor(() => {
    const layoutElement = screen.getByTestId('character-detail');
    expect(layoutElement).toBeInTheDocument();
  });
});
