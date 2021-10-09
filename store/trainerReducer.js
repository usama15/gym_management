import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  trainerData: [],
};

const trainerReducer = createSlice({
  name: 'trainer',
  initialState: {initialState},
  reducers: {
    loginTrainer: (state, {payload}) => {
      state.initialState = payload;
    },
  },
});

export default trainerReducer.reducer;
export const {loginTrainer} = trainerReducer.actions;
