import types from '../actions/types';

const DEFAULT_STATE = {
    average: 0,
    edit: null,
    list: []
};

export default (state = DEFAULT_STATE, action) => {
    //console.log('grade reducer action:',action);
    switch(action.type){
        case types.GET_GRADE_DATA:
            return {...state, list: action.grades }
        case types.ADD_GRADE_RECORD:
            return {...state, list: [...state.list,action.grade]};
        default:
            return state;
    }
}
