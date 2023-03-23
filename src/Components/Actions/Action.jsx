export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const addToDo = (id, todo) => {
    let task = {
        id: id,
        task: todo
    }
    return {
        type: ADD_TODO,
        payload: task
    }
}

export const removeToDo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}