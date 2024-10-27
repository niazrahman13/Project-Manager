import { useContext, useState } from 'react';
import { NavContext } from '../../../../Context/NavContext';
import { ProjectContext } from "../../../../Context/ProjectContext";
import Done from '../Done/Done';
import { DoneDropDownSvg } from '../Done/DoneSvg';
import OnProgress from '../On Progress/OnProgress';
import { OnProgressDropDownSvg } from '../On Progress/OnProgressSvg';
import Revised from '../Revised/Revised';
import { RevisedDropDownSvg } from '../Revised/RevisedSvg';
import Todo from '../Todo/Todo';
import { TodoDropDownSvg } from '../Todo/TodoSvg';

export default function Card() {
    const { submittedData } = useContext(ProjectContext);
    const searchValue = useContext(NavContext)?.toLowerCase() || "";

    // State to manage sort order for each category
    const [sortOrder, setSortOrder] = useState({
        "To-Do": "asc",
        "On Progress": "asc",
        "Done": "asc",
        "Revised": "asc"
    });

    const categories = {
        "To-Do": [],
        "On Progress": [],
        "Done": [],
        "Revised": []
    };

    // Populate categories with filtered data based on search keyword
    submittedData.forEach((task) => {
        if (categories[task.category]) {
            if (searchValue === "" || (task.taskName && task.taskName.toLowerCase().includes(searchValue))) {
                categories[task.category].push(task);
            }
        }
    });

    // Toggle sort order and sort by date
    const toggleSortOrder = (category) => {
        setSortOrder(prevSortOrder => ({
            ...prevSortOrder,
            [category]: prevSortOrder[category] === "asc" ? "desc" : "asc"
        }));
    };

    // Sort tasks based on date and sort order for each category
    const sortedCategories = Object.keys(categories).reduce((acc, category) => {
        acc[category] = categories[category].sort((a, b) => {
            const dateA = new Date(a.dueDate);
            const dateB = new Date(b.dueDate);
            return sortOrder[category] === "asc" ? dateA - dateB : dateB - dateA;
        });
        return acc;
    }, {});

    const isEmpty = Object.values(sortedCategories).every(category => category.length === 0);

    return (
        <div className="flex flex-wrap justify-between space-x-4 p-4">
            {isEmpty ? (
                <div className="w-full text-center p-4">
                    <h2 className="text-xl font-semibold text-gray-500">Task List is empty!</h2>
                </div>
            ) : (
                <>
                    {sortedCategories["To-Do"].length > 0 && (
                        <div className="w-full md:w-1/4 px-4 py-2">
                            <div className="bg-indigo-600 text-white rounded-lg p-4">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">
                                        To-Do ({sortedCategories["To-Do"].length})
                                    </h3>
                                    <button onClick={() => toggleSortOrder("To-Do")}>
                                        <TodoDropDownSvg />
                                    </button>
                                </div>
                                {sortedCategories["To-Do"].map((data) => (
                                    <Todo key={data.id} data={data} />
                                ))}
                            </div>
                        </div>
                    )}

                    {sortedCategories["On Progress"].length > 0 && (
                        <div className="w-full md:w-1/4 py-2 px-4">
                            <div className="bg-yellow-500 text-white rounded-lg p-4">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">
                                        On Progress ({sortedCategories["On Progress"].length})
                                    </h3>
                                    <button onClick={() => toggleSortOrder("On Progress")}>
                                        <OnProgressDropDownSvg />
                                    </button>
                                </div>
                                {sortedCategories["On Progress"].map((data) => (
                                    <OnProgress key={data.id} data={data} />
                                ))}
                            </div>
                        </div>
                    )}

                    {sortedCategories["Done"].length > 0 && (
                        <div className="w-full md:w-1/4 py-2 px-4">
                            <div className="bg-teal-500 text-white rounded-lg p-4">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">
                                        Done ({sortedCategories["Done"].length})
                                    </h3>
                                    <button onClick={() => toggleSortOrder("Done")}>
                                        <DoneDropDownSvg />
                                    </button>
                                </div>
                                {sortedCategories["Done"].map((data) => (
                                    <Done key={data.id} data={data} />
                                ))}
                            </div>
                        </div>
                    )}

                    {sortedCategories["Revised"].length > 0 && (
                        <div className="w-full md:w-1/4 py-2 px-4">
                            <div className="bg-red-500 text-white rounded-lg p-4">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">
                                        Revised ({sortedCategories["Revised"].length})
                                    </h3>
                                    <button onClick={() => toggleSortOrder("Revised")}>
                                        <RevisedDropDownSvg />
                                    </button>
                                </div>
                                {sortedCategories["Revised"].map((data) => (
                                    <Revised key={data.id} data={data} />
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
