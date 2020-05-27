import React from 'react';

export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
        this.handlePlus = this.handlePlus.bind(this)

    }

    handlePlus(){
        this.setState(prevState => ({
            counter : prevState.counter + 1
        }))
    }
    render(){
        return (<div>
            <h1>teste : {this.state.counter}</h1>
            <button onClick={this.handlePlus} >+1</button>
        </div>)
    }
}