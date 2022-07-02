import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter.slice';
import episodesReducer from './slices/episodes.slice';
import charactersReducer from './slices/characters.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    episodes: episodesReducer,
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
