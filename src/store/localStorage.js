// store/localStorage.js

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Load state error:', err)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('tasks', serializedState)
  } catch (err) {
    console.error('Save state error:', err)
  }
}
