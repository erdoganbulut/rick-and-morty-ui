import { configureStore } from '@reduxjs/toolkit';
import episodesReducer from './slices/episodes.slice';
import charactersReducer from './slices/characters.slice';

export const store = configureStore({
  reducer: {
    episodes: episodesReducer,
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
