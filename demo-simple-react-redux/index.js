/**
 * Created by DT274 on 2016/10/20.
 */
import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class Counter extends Component {
    render(){
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>戳我加1</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}

const increaseAction = { type: 'increase' };

function counter(state = {count: 0}, action) {
    let count = state.count;
    switch (action.type){
        case 'increase':
            return { count: count + 1 };
        default:
            return state
    }
}

let store = createStore(counter);

function mapStateToProps(state) {
    // 这里拿到的state就是store里面给的state
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

class App extends Component {
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>学习使用react-redux</h1>
                <Counter {...this.props} />
            </div>
        )
    }
}

let RootApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

render(
    <Provider store={store}>
        <RootApp />
    </Provider>,
    document.getElementById("app")
)
