// src/app/store.ts
'use client'
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/task";

export const store = configureStore({
    reducer: {
        taskReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
