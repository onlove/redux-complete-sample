/**
 * Created by DT274 on 2016/10/20.
 */
export default function todos(state = [], action) {
    switch (action.type){
        case 'ADD_TODO':
            return state.concat([action.type]);
        default:
            return state
    }
}