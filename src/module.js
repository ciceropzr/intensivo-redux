const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'
const PAUSE = 'counter/pause'
const RESUME = 'counter/resume'
const RESTART = 'counter/restart'

const initialState = {
  count: 0,
  paused: false
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: 
      if (state.paused) {
        return state
      }
      else {
        return {
          paused: state.paused,
          count: state.count + 1
        }
      }
    case DECREMENT:
      if (state.paused) {
        return state
      }
      else {
        return {
          paused: state.paused,
          count: state.count - 1
        }
      }
    case PAUSE:
      return {
        count: state.count,
        paused: true
      }
    case RESUME:
      return {
        count: state.count,
        paused: false
      }
    case RESTART:
      return {
        count: 0,
        paused: false
      }
    default: 
      return state
  }
}

export default counterReducer

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const pause = () => {
  return {
    type: PAUSE
  }
}

export const resume = () => {
  return {
    type: RESUME
  }
}

export const restart = () => {
  return {
    type: RESTART
  }
}