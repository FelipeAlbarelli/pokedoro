import React from 'react';


export default class Counter extends React.Component{

    state = {
        counter : 0
    }

    handlePlus = () => {
        this.setState( prevState => ({
            counter : prevState.counter + 1
        }) )
    }

    handleMinus = () => {
        this.setState(prevState => ({
            counter : prevState.counter - 1
        }))
    }

    handleReset = () => {
        this.setState( () => ({
            counter : 0
        }))
    }

    componentWillMount(){
        let c = localStorage.c;
        if (c == undefined){
            c = 0
        } else {
            c = parseInt(c, 10)
        }
        this.setState( () => ({
            counter : c
        }) )
    }

    componentDidUpdate(){
        localStorage.c = this.state.counter
    }

    render(){
        return (
        <div>
            <h1>Counter : {this.state.counter}</h1>
            <button onClick={this.handlePlus} >+1</button>
            <button onClick={this.handleMinus}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>)
    }
}