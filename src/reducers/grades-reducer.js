import types from '../actions/types';

const DEFAULT_STATE = {
    average: 0,
    edit: null,
    list: []
};

export default (state = DEFAULT_STATE, action) => {
    console.log('grade reducer action:',action);
    switch(action.type){
        case 'GET_GRADE_DATA':
            return {...state, list: action.grades }
        default:
            return state;
    }
}
