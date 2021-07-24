import React, { useState } from "react";
export default function tabButton() {
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <div className="mx-auto container py-6 px-4 flex items-center justify-center w-full">
            <ul className="w-full hidden md:flex items-center mx-6 pb-2 border-b border-white">
                <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded font-bold  text-2xl  leading-none text-center text-gray-700 " : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-white ease-in duration-150 rounded text-2xl leading-none text-gray-500"}>
                    All Coins 📢
                </li>
                <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-2xl  leading-none font-bold  text-center text-gray-700" : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-white ease-in duration-150 rounded text-2xl  leading-none text-gray-500"}>
                    Today's Best 🔥
                </li>
                <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-2xl  leading-none font-bold  text-center text-gray-700" : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-white ease-in duration-150 rounded text-2xl  leading-none text-gray-500"}>
                    Added Today 🆕
                </li>
                
            </ul>
            <div className="md:hidden relative w-1/2 mx-auto bg-white rounded">
               
                <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                    <option selected className="text-sm text-gray-600">
                        All Coins
                    </option>
                    <option className="text-sm text-gray-300">Today's Best </option>
                    <option className="text-sm text-gray-300">Added Today </option>
                </select>
            </div>
        </div>
    );
}
