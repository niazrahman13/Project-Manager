/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { ProjectContext } from '../../../../Context/ProjectContext';
import { DeleteTodoSvg, EditTodoSvg } from "./TodoSvg";

export default function Todo({ data }) {

    const { editTask, deleteTask } = useContext(ProjectContext);

    return (
        <div className="mb-4 w-full">

            <div className="rounded-lg bg-gray-800 p-4">
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-indigo-500">{data.taskName}</h4>
                    <div className="flex gap-2">
                        <button onClick={() => deleteTask(data.id)} title="Delete Task">
                            <DeleteTodoSvg />
                        </button>
                        <button onClick={() => editTask(data)} title="Edit Task">
                            <EditTodoSvg />
                        </button>
                    </div>
                </div>
                <p className="mt-2 text-sm text-gray-200">{data.description}</p>
                <p className="mt-6 text-xs text-gray-400">{data.dueDate}</p>
            </div>
        </div>
    );
}
