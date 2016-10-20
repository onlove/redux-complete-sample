/**
 * Created by DT274 on 2016/10/20.
 */
import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';

//合并之后的reducer
export default combineReducers({
    todos,
    counter
})