import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { orderBy } from 'lodash';
import request, { ERequestStatus } from '../../common/request';
import type { RootState } from '../index';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ICharacterState {
  character: ICharacter | null;
  characters: ICharacter[];
  filter: {
    status: string | null;
    gender: string | null;
    sort: string | null;
  };
  status: ERequestStatus;
  error: string | null;
}

const initialState: ICharacterState = {
  character: null,
  characters: [],
  filter: {
    status: null,
    gender: null,
    sort: null,
  },
  status: ERequestStatus.IDLE,
  error: null,
};

export const fetchMultipleCharacters = createAsyncThunk(
  'characters/fetchMultipleCharacters',
  async (charactersUrlList: string[]) => {
    let response: ICharacter[] = [];
    await Promise.all(charactersUrlList.map((c) => request.get<ICharacter>(c))).then((values) => {
      response = values;
    });
    return response;
  },
);

export const fetchCharacterDetail = createAsyncThunk(
  'characters/fetchCharacterDetail',
  async (id: number) => {
    const response = await request.get<ICharacter>(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    return response;
  },
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    changeStatusFilter: (_state, _action: PayloadAction<string | null>) => {
      const state = _state;
      state.filter = { ...state.filter, status: _action.payload };
    },
    changeGenderFilter: (_state, _action: PayloadAction<string | null>) => {
      const state = _state;
      state.filter = { ...state.filter, gender: _action.payload };
    },
    changeSort: (_state, _action: PayloadAction<string | null>) => {
      const state = _state;
      state.filter = { ...state.filter, sort: _action.payload };
    },
    resetFilter: (_state) => {
      const state = _state;
      state.filter = initialState.filter;
    },
  },
  extraReducers(builder) {
    builder
      // multiple
      .addCase(fetchMultipleCharacters.pending, (state) => {
        const $state = state;
        $state.status = ERequestStatus.LOADING;
      })
      .addCase(fetchMultipleCharacters.fulfilled, (state, action) => {
        const $state = state;
        $state.status = ERequestStatus.SUCCEEDED;
        $state.characters = action.payload;
      })
      .addCase(fetchMultipleCharacters.rejected, (state) => {
        const $state = state;
        $state.status = ERequestStatus.FAILED;
        $state.error = 'Fetch Error'; // FIXME:
      })
      // detail
      .addCase(fetchCharacterDetail.pending, (state) => {
        const $state = state;
        $state.status = ERequestStatus.LOADING;
      })
      .addCase(fetchCharacterDetail.fulfilled, (state, action) => {
        const $state = state;
        $state.status = ERequestStatus.SUCCEEDED;
        $state.character = action.payload;
      })
      .addCase(fetchCharacterDetail.rejected, (state) => {
        const $state = state;
        $state.status = ERequestStatus.FAILED;
        $state.error = 'Fetch Error'; // FIXME:
      });
  },
});

export const { changeStatusFilter, changeGenderFilter, changeSort, resetFilter } =
  charactersSlice.actions;

export const characters = (_state: RootState) => {
  let $characters: ICharacter[] = JSON.parse(JSON.stringify(_state.characters.characters));
  if (_state.characters.filter.status) {
    $characters = $characters.filter((o) => o.status === _state.characters.filter.status);
  }
  if (_state.characters.filter.gender) {
    $characters = $characters.filter((o) => o.gender === _state.characters.filter.gender);
  }
  switch (_state.characters.filter.sort) {
    case null:
      break;
    case 'idAsc':
      $characters = orderBy($characters, 'id', 'asc');
      break;
    case 'idDesc':
      $characters = orderBy($characters, 'id', 'desc');
      break;
    case 'nameAsc':
      $characters = orderBy($characters, 'name', 'asc');
      break;
    case 'nameDesc':
      $characters = orderBy($characters, 'name', 'desc');
      break;

    default:
      break;
  }
  return $characters;
};
export const charactersStatus = (_state: RootState) => _state.characters.status;

export default charactersSlice.reducer;
