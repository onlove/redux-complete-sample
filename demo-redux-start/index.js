/**
 * Created by DT274 on 2016/10/20.
 */
/*import { createStore } from 'redux';

//import * as Redux from 'redux';
//console.log(Redux);

//applyMiddleware
//bindActionCreators
//combineReducers
//compose
//createStore
//createStore(reducer, preloadedState, enhancer)


// 这是一个 reducer，形式为 (state, action) => state 的纯函数。描述了 action 如何把 state 转变成下一个 state。
// state 的形式取决于你，可以是基本类型、数组、对象、
// 甚至是 Immutable.js 生成的数据结构。惟一的要点是
// 当 state 变化时需要返回全新的对象，而不是修改传入的参数。

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state  + 1;
        case  'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
//新的数据仓库
let store = createStore(counter, 8);
console.log(store)
//dispatch  常用
//getState  常用
//subscribe 监听

// 一个单纯渲染页面内容的函数
const PureRender = () => {
    document.body.innerText = store.getState();
}

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(PureRender);
// 执行渲染函数
PureRender();

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
document.addEventListener('click', function(e){
    // store dispatch 调度分发一个 action（fire）
    store.dispatch({type: 'DECREMENT'})
})
/*
*   action: 指定（描述做什么事情）
*   reducer 具体的事情由reducer完成
*   store   数据仓库 唯一的 单一数据源 dispatch 分发action 更新数据
*
*   仓库的数据更新，如何反应view更新 react-redux
*/






//示例
/*import { createStore } from 'redux';

const todos = (state = [''], action) => {
    switch (action.type){
        case 'ADD_TODO':
            console.log(Object.assign([], state, [action.text]));
            return Object.assign([], state, [action.text]);
        default:
            return state;
    }
};

let store = createStore(todos, ['Use Redux']);

function addTodo(text){
    return {
        type: 'ADD_TODO',
        text
    }
}

store.dispatch(addTodo('Read the docs'));
store.dispatch(addTodo('Read about the middleware'));
*/





/*import { createStore } from 'redux';

const todos = (state = [''], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign([], state, [action.text]);
        default:
            return state;
    }
};


let store = createStore(todos, ['User Redux']);

function addTodo(text){
    return {
        type: 'ADD_TODO',
        text
    }
}

const handleChange = () => {
    console.log(store.getState())
};

let unsubscribe = store.subscribe(handleChange);

handleChange();

store.dispatch(addTodo('1'));
store.dispatch(addTodo('2'));
*/




//模拟 createStore，深入了解其原理
/*const counter = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const creatStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener())
    }

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(item => item !==listener)
        }
    }

    dispatch({})

    return { getState, dispatch, subscribe };
};

const store = creatStore(counter);

const PureRender = () => {
    document.body.innerText = store.getState();
}

store.subscribe(PureRender);
PureRender();

document.addEventListener('click', function(){
    store.dispatch({type: 'DECREMENT'})
})
*/

//React 组件里面最顶层的数据从哪里来
//1.ajax setState ui 展示view
//2.redux 管理应用的数据store数据仓库，组件数据的来源仓库怎么和顶层组件建立连接
//3.仓库的数据更新，自动更新view
//4.单向数据自顶向下
//没有react-redux的写法

/*import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { createStore } from 'redux';

const counter = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);

class Counter extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.value}</h1>
                <button onClick={this.props.onIncrement}> 点击加1</button>
                <button onClick={this.props.onDecrement}> 点击减1</button>
            </div>
        )
    }
}

const PureRender = () => {
    render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({type:'INCREMENT'})}
            onDecrement={() => store.dispatch({type:'DECREMENT'})}
        />,
        document.getElementById('app')
    )
}
store.subscribe(PureRender)
PureRender()*/












