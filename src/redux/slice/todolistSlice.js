import { createSlice } from '@reduxjs/toolkit'

export const todolistSlice= createSlice({
  name: 'todolist',
  initialState: {
    task: ["one"]
  },
  reducers: {
  }
})

export const selectTask = (state) => state.todolist.task

export default todolistSlice.reducer