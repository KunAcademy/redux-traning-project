import { createSlice, current } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: {
    tasks: [
      {
        id: '0',
        title: "Task 1",
        description: "Task decription",
        status: 0,
      },
      {
        id: 'aaa',
        title: "Task 2",
        description: "Task 2 decription",
        status: 1,
      },
    ],
  },
  reducers: {
    addTask: (state, payload) => {
      const cloneTasks = [...state.tasks, payload.payload];
      state.tasks = cloneTasks;
    },
    removeTask: (state, payload) => {
      const cloneTask = [...current(state.tasks)].filter(
        (item) => item.id !== payload.payload
      );
      state.tasks = cloneTask;
    },
    editTask: (state, payload) => {
      const currentTask = [...current(state.tasks)];
      const idTaskEdit = currentTask.findIndex(
        (item) => String(item.id) === String(payload.payload.id)
      );
      const resultTasks = currentTask.map((item) =>
        item.id === payload.payload.id ? payload.payload : item
      );
      state.tasks = resultTasks;
    },
    updateAllTaskOrder: (state, payload) => {
      state.tasks = payload.payload
    }
  },
});

export const { addTask, removeTask, editTask, getTask, updateAllTaskOrder } = todolistSlice.actions;

export const selectTasks = (state) => state.todolist.tasks;

export default todolistSlice.reducer;
