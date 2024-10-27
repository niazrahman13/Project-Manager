
import { useContext } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProjectContext } from '../../../../Context/ProjectContext';

export default function AddModal() {

    const value = useContext(ProjectContext)

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
            <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
                <div className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-green-400">Create Task</h2>
                    <form onSubmit={value.handleForm}>
                        <div className="mb-4">
                            <label
                                htmlFor="taskName"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >Task Name</label>
                            <input
                                type="text"
                                id="taskName"
                                name="taskName"
                                value={value.form.taskName}
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={value.onHandleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="3"
                                value={value.form.description} // Binding value from state
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={value.onHandleChange}
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="dueDate"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >Due Date</label>
                            <input
                                type="date"
                                id="dueDate"
                                name="dueDate"
                                value={value.form.dueDate} // Binding value from state
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={value.onHandleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="category"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >Category</label>
                            <select
                                id="category"
                                name="category"
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={value.onHandleChange}
                                required
                                value={value.form.category}
                            >
                                <option value="To-Do">To-Do</option>
                                <option value="On Progress">On Progress</option>
                                <option value="Done">Done</option>
                                <option value="Revised">Revised</option>
                            </select>
                        </div>
                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                onClick={value.handleModalClick}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                Create Task
                            </button>
                        </div>
                        <ToastContainer
                            position="top-center"
                            autoClose={1500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
