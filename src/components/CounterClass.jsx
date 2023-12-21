import React from "react";

class CounterClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({score: this.state.score + 1})
    }
    
    decrement() {
        this.setState({score: this.state.score - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.score}</h1>
                <button onClick={this.increment}>INCREMENT</button>
                <button onClick={this.decrement}>DECREMENT</button>
            </div>
        )
    }
}
export default CounterClass;