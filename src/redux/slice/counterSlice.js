import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => { state.value = state.value + 1 },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => { state.value = state.value - 1 },
    decrementByAmount: (state, action) => {
      void(state.value -= action.payload);
    },
  },
});

export const { increment, incrementByAmount, decrement, decrementByAmount } =
  counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const decrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(decrementByAmount(amount));
  }, 1000)
}

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
