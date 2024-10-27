import { useReducer } from 'react';
import { toast } from 'react-toastify';
import { ProjectContext } from '../../../Context/ProjectContext';
import { reducer } from '../../../Reduce/ModelReducer';
import Card from './Card/Card';
import Projectify from "./Projectify/Projectify";

const initialState = {
    modal: false,
    form: {
        id: null,
        taskName: "",
        description: "",
        dueDate: "",
        category: "To-Do"
    },
    submittedData: [],
};

export default function ProjectContent() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleModalClick = () => dispatch({ type: 'TOGGLE_MODAL' });

    const onHandleChange = (e) => {
        dispatch({
            type: 'HANDLE_CHANGE',
            payload: { name: e.target.name, value: e.target.value },
        });
    };

    const handleForm = (e) => {
        e.preventDefault();

        if (state.form.id) {
            // Update existing task
            dispatch({ type: 'EDIT_TASK' });
            toast.success('Task Updated', {
                position: "top-center",
                autoClose: 1500,
                theme: "light",
            });
        } else {
            // Add new task
            dispatch({ type: 'ADD_TASK' });
            toast.success('Task Added', {
                position: "top-center",
                autoClose: 1500,
                theme: "light",
            });
        }

        dispatch({ type: 'RESET_FORM' });
        handleModalClick();
    };

    const editTask = (task) => {
        dispatch({ type: 'SET_FORM', payload: task });
        handleModalClick(); // Open the modal
    };

    const deleteTask = (id) => {
        dispatch({ type: 'DELETE_TASK', payload: id });
        toast.success('Task Deleted', {
            position: "top-center",
            autoClose: 1500,
            theme: "light",
        });
    };

    return (
        <ProjectContext.Provider value={{
            modal: state.modal,
            handleModalClick,
            handleForm,
            onHandleChange,
            form: state.form,
            submittedData: state.submittedData,
            editTask,
            deleteTask
        }}>
            <div className="mx-auto max-w-7xl p-6">
                <Projectify />
                {state.modal ? '' : <Card />}
            </div>
        </ProjectContext.Provider>
    );
}
