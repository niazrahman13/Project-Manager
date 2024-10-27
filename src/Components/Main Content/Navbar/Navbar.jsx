/* eslint-disable react/prop-types */
import { MessageNavSvg, NotificationNavSvg, ThreeDotNavSvg } from "./NavbarSvg";

export default function Navbar({ onChangeHandler }) {
    return (
        <header className="flex items-center justify-between bg-gray-800 p-4">
            <button className="lg:hidden">
                <ThreeDotNavSvg />
            </button>
            <div className="mx-4 flex-1">
                <input
                    type="text"
                    placeholder="Search here"
                    className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
                    onChange={onChangeHandler}
                />
            </div>
            <div className="flex items-center">
                <button className="relative mr-4">
                    <NotificationNavSvg />
                    <span
                        className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"
                    ></span>
                </button>
                <button className="relative mr-4">
                    <MessageNavSvg />
                    <span
                        className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"
                    ></span>
                </button>
            </div>
        </header>

    );
}