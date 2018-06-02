import React from 'react'
import { resolveSource, bindCreators } from './utils'

export const { Provider, Consumer } = React.createContext(null)

export class Store {
  constructor({ state, mutations, actions }) {
    this.state = state
    this.mutations = mutations
    this.subscribers = []
    this.actions = actions
    this.dispatch = this.dispatch.bind(this)
    this.commit = this.commit.bind(this)
  }
  subscribe(sub) {
    return this.subscribers.push(sub)
  }

  dispatch(type, payload) {
    const action = resolveSource(this.actions, type)
    const ctx = {
      commit: this.commit,
      dispatch: this.dispatch
    }
    return Promise.resolve(action(ctx, payload))
  }

  commit(type, payload) {
    const mutation = resolveSource(this.mutations, type)
    this.state = mutation(this.state, payload)
    this.subscribers.forEach(v => v())
  }
}

export const withStore = Component => {
  return class WrapComp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        props: {}
      }
    }
    componentWillMount() {
      this._isMounted = true
    }

    componentWillUnmount() {
      this._isMounted = false
    }

    componentDidMount() {
      this.store.subscribe(() => this.update())
      this.update()
    }

    update() {
      const store = this.store
      const stateProps = store.state
      const commitProps = bindCreators(store.mutations, store.commit)
      const dispatchProps = bindCreators(store.actions, store.dispatch)
      if (this._isMounted) {
        this.setState({
          props: {
            ...this.state.props,
            ...stateProps,
            ...commitProps,
            ...dispatchProps
          }
        })
      }
    }

    render() {
      return (
        <Consumer>
          {store => {
            this.store = store
            return <Component {...this.state.props} />
          }}
        </Consumer>
      )
    }
  }
}
