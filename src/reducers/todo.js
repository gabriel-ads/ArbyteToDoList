const todo = (store = { tasklist: [] }, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return { ...store, tasklist: [...store.tasklist, action.task] };
        case "TODO_TASKLIST":
            return { ...store, tasklist: [...action.tasklist] };
        default:
            return store;
    }
};

export default todo;