/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { ProjectContext } from '../../../../Context/ProjectContext';
import { DeleteRevisedSvg, EditRevisedSvg } from "./RevisedSvg";

export default function Revised({ data }) {

    const { editTask, deleteTask } = useContext(ProjectContext);

    return (
        <div className="mb-4 w-full">

            <div className="mb-4 rounded-lg bg-gray-800 p-4">
                <div className="flex justify-between items-center">
                    <h4 className="mb-2 font-semibold text-rose-500">{data.taskName}</h4>
                    <div className="flex gap-2">
                        <button onClick={() => deleteTask(data.id)} title="Delete Task">
                            <DeleteRevisedSvg />
                        </button>
                        <button onClick={() => editTask(data)} title="Edit Task">
                            <EditRevisedSvg />
                        </button>
                    </div>
                </div>
                <p className="mb-2 text-sm text-zinc-200">{data.description}</p>
                <p className="mt-6 text-xs text-zinc-400">{data.dueDate}</p>
            </div>

        </div>
    );
}