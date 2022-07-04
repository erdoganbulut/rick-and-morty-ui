import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../store';
import EpisodeList from '.';

test('renders learn episode list', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EpisodeList />
        </MemoryRouter>
      </Provider>,
    );
  });
  await waitFor(() => {
    const layoutElement = screen.getByTestId('episodelistpage-list');
    expect(layoutElement).toBeInTheDocument();
  });
});
