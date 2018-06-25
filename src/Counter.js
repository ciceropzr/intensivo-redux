import React from 'react'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  pause,
  resume,
  restart
} from './module'

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    pause: () => {
      dispatch(pause())
    },
    resume: () => {
      dispatch(resume())
    },
    restart: () => {
      dispatch(restart())
    }
  }
}

class Counter extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.props.increment}>+</button>
        </div>
        <button onClick={this.props.pause}>Pause</button>
        <button onClick={this.props.resume}>Resume</button>
        <button onClick={this.props.restart}>Restart</button>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 200
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)