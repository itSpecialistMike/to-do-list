// store.js
import { configureStore } from '@reduxjs/toolkit'
import localTasksReducer from './localTasksSlice'
import { loadState, saveState } from './localStorage'

const preloadedState = {
  localTasks: loadState() || [], // Загружаем сохранённые задачи
}

export const store = configureStore({
  reducer: {
    localTasks: localTasksReducer,
  },
  preloadedState,
})

// Подписка на изменения состояния: сохраняем в localStorage
store.subscribe(() => {
  saveState(store.getState().localTasks)
})
