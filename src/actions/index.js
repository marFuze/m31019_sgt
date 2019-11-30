import types from './types';
import axios from 'axios';

// export async function getGradeData() {
//     const resp = await axios.get('/api/grades');

//     console.log('Get Data Response:', resp);

//     return {
//         type: 'GET_GRADE_DATA'
//     }
// }

//return promise instead of object
//middleware intercept actions that are dispatched
//checks for promise then do something with the promise

export function getGradeData(){
    return async  function (dispatch) {
        const resp = await axios.get('/api/grades');

        console.log('Get Grade Data REsponse', resp);

        dispatch({
            type: types.getGradeData,
            grades: resp.data
        });
    }
}

//dispatch send action to reducer
//middleware catch function pass in dispatch 
//middleware will call the return function