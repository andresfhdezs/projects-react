import React, { Component } from 'react'
import _ from 'lodash'
import { FacebookCounter, FacebookSelector } from 'react-reactions'
import { compose } from 'redux'
import { connect } from 'react-redux'

export class FecebookReactions extends Component {
  state = {
    counters: [],
    user: 'Case Sandberg',
    project: '',
    showSelector: false,
  }

  handleAdd = () => this.setState({ showSelector: true, user: 'pipe' })

  handleSelect = (emoji) => {
    const index = _.findIndex(this.state.counters, { by: this.state.user })
    if (index > -1) {
      this.setState({
        counters: [
          ...this.state.counters.slice(0, index),
          { emoji, by: this.state.user },
          ...this.state.counters.slice(index + 1),
        ],
        showSelector: false,
      })
    } else {
      this.setState({
        counters: [...this.state.counters, { emoji, by: this.state.user }],
        showSelector: false,
      })
    }
  }

  render() {
    const {  auth } = this.props;
    console.log(auth)
    return (
      <div style={{ position: 'relative' }}>
        <FacebookCounter
          counters={ this.state.counters }
          user={ this.state.user }
          onClick={ this.handleAdd }
          bg="#fafafa"
          important={ ['Henry Boldizsar', 'Rob Sandberg'] }
        />

      { this.state.showSelector ? (
        <div style={{ position: 'absolute', bottom: '100%', marginBottom: '10px' }}>
          <FacebookSelector onSelect={ this.handleSelect } />
        </div>
      ) : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        auth: state.firebase.auth,
    }
}

export default compose(connect(mapStateToProps))(FecebookReactions)