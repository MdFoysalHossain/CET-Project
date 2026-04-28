import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import CreateUser from "./Components/CreateUser";
import { SettingsContext } from "../../Context/SettingsProvidor";
import { AuthContext } from "../../Context/AccountProvidor";
import UpdateUser from "./Components/UpdateUser";

const rolesList = ["PM", "Developer", "QA", "Client"];



export default function Allusers() {
    const { backEndUrl } = useContext(SettingsContext);
    const { accountDetails } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [selectedRole, setSelectedRole] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [usersCount, setUsersCount] = useState(0);



    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setShowModal(false);
            if (e.key === "Escape") setShowUpdateModal(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = await accountDetails.getIdToken();

                const response = await fetch(
                    `${backEndUrl}/getUsers?email=${accountDetails.email}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                    }
                );

                const data = await response.json();

                console.log("Fetched users:", data);
                setUsers(data);
                setUsersCount(data)

            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        if (accountDetails?.email) {
            fetchUsers();
        }
    }, [backEndUrl, accountDetails]);


    return (
        <div className="w-full overflow-x-hidden">
            <Helmet>
                <title>TrackLio - Users</title>
            </Helmet>



            {/* HEADER */}
            <div className="flex items-center justify-start px-6 border-b border-gray-200 h-[65px] text-left">
                <div className="max-w-[1330px] mx-auto w-full flex items-center justify-between">
                    <h2 className="text-2xl font-semibold font-jukarta">
                        Users
                    </h2>

                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
                    >
                        Create User
                    </button>
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center">

                    {/* Overlay */}
                    <div
                        // className="absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-300"
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setShowModal(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative z-50 animate-modal">
                        <CreateUser setUsers={setUsers} users={users} closeModal={() => setShowModal(false)} />
                    </div>
                </div>
            )}

            {showUpdateModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center">

                    {/* Overlay */}
                    <div
                        // className="absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-300"
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setShowUpdateModal(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative z-50 animate-modal">
                        <UpdateUser selectedUser={selectedUser} setUsers={setUsers} users={users} closeModal={() => setShowUpdateModal(false)} />
                    </div>
                </div>
            )}

            {/* CONTENT */}
            <div className="max-w-[1330px] w-full mx-auto px-4 py-6 font-jukarta text-black">

                <div className=" p-6 bg-white shadow-md rounded-xl border border-gray-100">
                    <div className="">

                        {/* Title */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">All Users ({usersCount?.length} / 10)</h2>
                            <span className="text-sm text-gray-400">{users?.length} users</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table w-full border-separate border-spacing-y-0.5 border overflow-hidden border-gray-200 ">

                                {/* HEADER */}
                                <thead className="bg-gray-100  border-gray-200  ">
                                    <tr className="text-gray-500 text-sm">
                                        <th className="py-3">No.</th>
                                        <th>User </th>
                                        <th>Status</th>
                                        <th>Projects</th>
                                        <th>Tasks</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                {/* BODY */}
                                <tbody className="">
                                    {users?.map((user, index) => (
                                        <tr key={user.id} className={`transition bg-gray-100`}>

                                            {/* INDEX */}
                                            <td className="bg-white  border-gray-200 py-4 ">
                                                #{index + 1}
                                            </td>

                                            {/* USER */}
                                            <td className="bg-white  border-gray-200">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                                                        {user.name.charAt(0)}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs">{user.name}</span>
                                                        <span className=" text-md -mt-0">@{user.username}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* STATUS */}
                                            <td className="bg-white  border-gray-200">
                                                <span
                                                    className={`badge text-xs capitalize ${user.status === "active"
                                                        ? "badge-success"
                                                        : "badge-ghost"
                                                        }`}
                                                >
                                                    {user.status}
                                                </span>
                                            </td>

                                            {/* PROJECT */}
                                            <td className="bg-white  border-gray-200">
                                                <span className="badge badge-outline">
                                                    {user.projectHas.length}
                                                </span>
                                            </td>

                                            {/* TASK */}
                                            <td className="bg-white  border-gray-200">
                                                <span className="badge badge-outline">
                                                    {user.taskHas.length}
                                                </span>
                                            </td>

                                            <td className="bg-white border-gray-200">
                                                <span className="px-4 border border-gray-200 w-full py-1.75 text-sm bg-gray-100 rounded-lg inline-block">
                                                    {user.role || "Not assigned"}
                                                </span>
                                            </td>

                                            {/* ACTION */}
                                            <td className="bg-white  border-gray-200 ">
                                                <button 
                                                    className="bg-indigo-500 text-white font-medium px-4 py-1.5 rounded-md hover:bg-indigo-600 transition"
                                                    onClick={() => {
                                                        setShowUpdateModal(true)
                                                        setSelectedUser(user);}}
                                                >
                                                    Update
                                                </button>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    );
}