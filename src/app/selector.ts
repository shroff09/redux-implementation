import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state:any) => state.taskReducer.tasks;

export const memoizedSelectTasks = createSelector(
  [selectTasks],
  (tasks) => tasks // Memoized selector only returns a new reference if tasks actually change
);
