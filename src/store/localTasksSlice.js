import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = []

const localTasksSlice = createSlice({
  name: 'localTasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, description) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            completed: false,
          },
        }
      },
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload)
    },
    completeTask(state, action) {
      const task = state.find(t => t.id === action.payload)
      if (task) task.completed = true
    },
  },
})

export const { addTask, deleteTask, completeTask } = localTasksSlice.actions
export default localTasksSlice.reducer
