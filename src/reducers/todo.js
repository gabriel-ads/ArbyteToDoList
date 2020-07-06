const todo = (store = { user: {} }, action) => {
    switch (action.type) {
        case "TODO_USER":
            return { ...store, user: action.user };
        default:
            return store;
    }
};
export default todo;