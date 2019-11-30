// Build middleware here
//all middleware starts the same way

export default (store) => (next) => (action) => {

    //Code goes here
    if(typeof action !== 'function') {
        return next(action);
    }

    return action(store.dispatch, store.getState);

}

//ES5 Example

// export default function (store) {
//     return function (next) {
//         return function (action) {
//             //Code goes here
//         }
//     }
// }

//if you need to write your own currying - store, next function in line , action that was dispatched

//all actions pass through middleware

//customize action before it goes to the reducer.  it has to be an object by the time it reaches the reducer.  use custom middle ware for async actions.

//middleware: logs all actions, clean up api data