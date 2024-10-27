
import { useContext } from 'react';

import { ProjectContext } from "../../../../Context/ProjectContext";
import AddModal from "../AddModal/AddModal";
import { AddBtnSvg } from "./ProjectifySVG";

export default function Projectify() {

    const value = useContext(ProjectContext)

    return (

        value.modal ? <AddModal /> :

            (
                <div className="mt-6 mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Projectify</h2>
                    <div className="flex space-x-2">
                        <button
                            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
                            onClick={value.handleModalClick}
                        >
                            <AddBtnSvg />
                            Add
                        </button>
                    </div>
                </div>
            )

    );
}