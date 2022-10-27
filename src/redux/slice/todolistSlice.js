import { createSlice, current } from '@reduxjs/toolkit'

export const todolistSlice= createSlice({
  name: 'todolist',
  initialState: {
    tasks: [{
      id: 0,
      title: "Task 1",
      status: 0,
    }]
  },
  reducers: {
    addTask: (state, payload) => {
      const cloneTasks = [...state.tasks, payload.payload]
      state.tasks = cloneTasks;
    },
    removeTask: (state, payload) => {
      const cloneTask = [...current(state.tasks)].filter((item) => item.id !== payload.payload)
      state.tasks = cloneTask 
    },
    editTask: (state, payload) => {
      console.log("state:", state, payload)
    },
  }
})

export const { addTask, removeTask, editTask, getTask } = todolistSlice.actions

export const selectTasks = (state) => state.todolist.tasks

export default todolistSlice.reducer