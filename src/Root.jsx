import { useState } from 'react';

import Navbar from "./Components/Main Content/Navbar/Navbar";
import ProjectContent from "./Components/Main Content/Project Content/ProjectContent";
import Sidebar from "./Components/Sidebar/Sidebar";
import { NavContext } from './Context/NavContext';

export default function Root() {

    const [navInput, setNavInput] = useState('')

    const onChangeHandler = (e) => {
        setNavInput(e.target.value)
    }

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-y-auto  overflow-x-hidden">
                <div className="mx-auto ">
                    <Navbar onChangeHandler={onChangeHandler} />

                    <NavContext.Provider value={navInput}>
                        <ProjectContent />
                    </NavContext.Provider>

                </div>
            </div>
        </div>
    );
}