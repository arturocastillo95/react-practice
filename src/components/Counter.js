import React, {Component} from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount
        }
    }
    
    render() {
        return (
            <div>
            <button onClick={() => this.changeCount(-1)}>-</button>
            <span>{this.props.initialCount}</span>
            <button>+</button>
          </div>
        )
    }

    changeCount(amount) {
        this.setState()
    }
}