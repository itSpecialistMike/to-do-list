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
    uncompleteTask(state, action) {
      const task = state.find(t => t.id === action.payload)
      if (task) task.completed = false
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload
      const task = state.find(t => t.id === id)
      if (task) {
        task.title = title
        task.description = description
      }
    }
  },
})

export const { addTask, deleteTask, completeTask, updateTask } = localTasksSlice.actions
export default localTasksSlice.reducer
