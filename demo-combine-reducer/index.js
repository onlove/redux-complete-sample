/**
 * Created by DT274 on 2016/10/20.
 */
import { createStore } from 'redux';
import reducer from './reducer';

let store = createStore(reducer, {
    counter: 10,
    todos: ['新增的数据']
});
//store初始的数据
//初始数据的来源
//1. createStore的第二个参数
//2. 定义的reducer

console.log('当前的 state :', store.getState());

store.dispatch({
    type: 'ADD_TODO',
    text: 'Use Redux'
})
store.dispatch({
    type: 'INCREMENT'
})
console.log('改变后的 state :', store.getState())