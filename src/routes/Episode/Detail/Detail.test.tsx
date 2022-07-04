import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../store';
import EpisodeDetail from '.';


test('renders learn episode detail', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EpisodeDetail />
        </MemoryRouter>
      </Provider>,
    );
  });
  await waitFor(() => {
    const layoutElement = screen.getByTestId('episode-detail');
    expect(layoutElement).toBeInTheDocument();
  });
});
