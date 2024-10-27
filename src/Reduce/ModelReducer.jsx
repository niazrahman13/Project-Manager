export const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return { ...state, modal: !state.modal };
        case 'HANDLE_CHANGE':
            return {
                ...state,
                form: { ...state.form, [action.payload.name]: action.payload.value },
            };
        case 'ADD_TASK': {
            const newTask = { ...state.form, id: state.submittedData.length + 1 };
            return {
                ...state,
                submittedData: [...state.submittedData, newTask],
            };
        }

        case 'EDIT_TASK':
            return {
                ...state,
                submittedData: state.submittedData.map(task =>
                    task.id === state.form.id ? state.form : task
                ),
            };
        case 'SET_FORM':
            return { ...state, form: action.payload };
        case 'DELETE_TASK':
            return {
                ...state,
                submittedData: state.submittedData.filter(task => task.id !== action.payload),
            };
        case 'RESET_FORM':
            return {
                ...state,
                form: {
                    id: null,
                    taskName: "",
                    description: "",
                    dueDate: "",
                    category: "To-Do"
                },
            };
        default:
            return state;
    }
};