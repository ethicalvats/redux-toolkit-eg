export const defaultMdl = store => next => action => {
    console.log('=============  MDL ===========')
    console.log(store)
    console.log(next)
    console.log(action)

    if(action.type === 'fetch'){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                store.dispatch({ // dispatch an action
                    type: 'update',
                    payload: json
                })
            })
    }

    return next(action)
}