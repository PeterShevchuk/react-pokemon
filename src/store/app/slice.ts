import { createSlice } from '@reduxjs/toolkit';
import {IStoreAppInitialState} from "../../interfaces/store-app";

const initialState: IStoreAppInitialState = {
  isLoading: false
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
  extraReducers: () => undefined,
});

export const {
  startLoading,
  stopLoading,
} = slice.actions;
export default slice.reducer;
