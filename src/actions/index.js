import types from './types';
import axios from 'axios';

// export const addGradeRecord = (gradeData) => async (dispatch) => {

// }

export function addGradeRecord(gradeData) {
    return async function (dispatch) {
        const resp = await axios.post('/api/grades', gradeData);

        console.log('add response:', resp);
        dispatch({
            type: types.ADD_GRADE_RECORD,
            grade: resp.data
        });
    }
}

export function deleteGradeRecord(id, index) {
    return async function (dispatch, getState) {
        //const resp = 
        await axios.delete(`/api/grades/${id}`);
        const {grades}= getState();
        const list = [...grades.list];
        list.splice(index, 1);

        console.log('state',grades);

        dispatch({
            type: types.DELETE_GRADE_RECORD,
            list: list
        });
    }
}

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
            type: types.GET_GRADE_DATA,
            grades: resp.data
        });
    }
}



//dispatch send action to reducer
//middleware catch function pass in dispatch 
//middleware will call the return function