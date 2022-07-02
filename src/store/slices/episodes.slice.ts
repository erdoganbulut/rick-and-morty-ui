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
  detail: IEpisode | null;
  status: ERequestStatus;
  error: string | null;
}

const initialState: IEpisodesState = {
  data: null,
  detail: null,
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

export const fetchEpisodeDetail = createAsyncThunk(
  'episodes/fetchEpisodeDetail',
  async (id: number) => {
    const response = await request.get<IEpisode>(`https://rickandmortyapi.com/api/episode/${id}`);
    return response;
  },
);

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // list
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
      })
      // detail
      .addCase(fetchEpisodeDetail.pending, (state) => {
        const $state = state;
        $state.status = ERequestStatus.LOADING;
      })
      .addCase(fetchEpisodeDetail.fulfilled, (state, action) => {
        const $state = state;
        $state.status = ERequestStatus.SUCCEEDED;
        $state.detail = action.payload;
      })
      .addCase(fetchEpisodeDetail.rejected, (state) => {
        const $state = state;
        $state.status = ERequestStatus.FAILED;
        $state.error = 'Fetch Error'; // FIXME:
      });
  },
});

export const allEpisodes = (_state: RootState) => _state.episodes.data;
export const allEpisodesStatus = (_state: RootState) => _state.episodes.status;
export const episodeDetail = (_state: RootState) => _state.episodes.detail;

export default episodesSlice.reducer;
