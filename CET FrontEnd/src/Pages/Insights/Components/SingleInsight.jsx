import React from 'react';

const SingleInsight = ({ insight }) => {
    return (
        <tr className={`transition bg-gray-100`}>

            {/* INDEX */}
            <td className="bg-white  border-gray-200 py-4 font-rubik text-sm bg-amber-200">
                <p>{insight?.date}</p>
            </td>

            {/* USER */}
            <td className="bg-white  border-gray-200 font-rubik ">
                <div className="flex items-center gap-1">
                    {/* <div className="h-10 w-10 rounded-sm bg-indigo-100 text-indigo-500 text-md flex items-center justify-center">
                        <span>{insight?.name[0]}</span>
                    </div> */}
                    <div className="flex flex-col  font-rubik text-md">
                        {/* <span className="text-md">{insight?.name}</span> */}

                        {
                            insight?.username === insight?.loggedTo ? <span className="text-md">By: @{insight?.username}</span> :
                                <div className="flex flex-col">
                                    <span className="text-md">By: @{insight?.username}</span>
                                    <span className="text-md">To: @{insight?.loggedTo}</span>
                                </div>

                        }
                    </div>
                </div>
            </td>

            {/* STATUS */}
            <td className="bg-white  border-gray-200 text-sm font-rubik " >
                <span>
                    {insight?.event}
                </span>
            </td>

            {/* PROJECT */}
            <td className="bg-white  border-gray-200 text-sm font-rubik ">
                <span className="line-clamp-2">
                    {insight.project}
                </span>
            </td>
        </tr>

    );
};

export default SingleInsight;