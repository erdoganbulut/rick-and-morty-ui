import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request, { ERequestStatus } from '../../common/request';
import type { RootState } from '../index';

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface IEpisodeList {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: IEpisode[];
}

interface IEpisodesState {
  data: IEpisodeList | null;
  status: ERequestStatus;
  error: string | null;
}

const initialState: IEpisodesState = {
  data: null,
  status: ERequestStatus.IDLE,
  error: null,
};

export const fetchEpisodeList = createAsyncThunk(
  'episodes/fetchEpisodeList',
  async (page: number = 1) => {
    const response = await request.get<IEpisodeList>(
      `https://rickandmortyapi.com/api/episode?page=${page}`,
    );
    return response;
  },
);

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEpisodeList.pending, (state) => {
        const $state = state;
        $state.status = ERequestStatus.LOADING;
      })
      .addCase(fetchEpisodeList.fulfilled, (state, action) => {
        const $state = state;
        $state.status = ERequestStatus.SUCCEEDED;
        $state.data = action.payload;
      })
      .addCase(fetchEpisodeList.rejected, (state) => {
        const $state = state;
        $state.status = ERequestStatus.FAILED;
        $state.error = 'Fetch Error'; // FIXME:
      });
  },
});

export const allEpisodes = (_state: RootState) => _state.episodes.data;
export const allEpisodesStatus = (_state: RootState) => _state.episodes.status;

export default episodesSlice.reducer;
