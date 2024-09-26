'use client'
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from '@reduxjs/toolkit';

interface TaskState {
    tasks: any[];
};

const initialState: TaskState = {
    tasks: [],
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload];
        },
        editTask: (state, action) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }
                return task;
            });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
        }
    },
});


export const selectTasks = (state:any) => state.taskReducer.tasks;

export const memoizedSelectTasks = createSelector(
  [selectTasks], // Input selectors (extract data from state)
  (tasks) => tasks // Result function (process or return the tasks)
);


export const { addTask, deleteTask,editTask } = taskSlice.actions;
export default taskSlice.reducer;