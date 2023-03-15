import React, { Component } from 'react'
import { connect } from 'react-redux'

    class Counter extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.Counter} </h1>
      </div>
    )
  }
}
function mapStateToProps(state){
    return {Counter:state.counterReducer}
}

export default connect(mapStateToProps)(Counter);
