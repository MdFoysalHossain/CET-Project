import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import CreateUser from "./Components/CreateUser";
import { SettingsContext } from "../../Context/SettingsProvidor";
import { AuthContext } from "../../Context/AccountProvidor";
import UpdateUser from "./Components/UpdateUser";
import Swal from "sweetalert2";
import SingleUser from "./Components/SingleUser";

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
    const [realUser, setRealUser] = useState(null);
    const usersLimit = realUser?.accountType === "Free" ? 5 : realUser?.accountType === "Premium" ? 15 : realUser?.accountType === "Enterprise" ? 25 : 0;
    const [buttonPressed, setButtonPressed] = useState(0);



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



        const fetchRealUser = async () => {
            try {
                const token = await accountDetails.getIdToken();

                const response = await fetch(
                    `${backEndUrl}/getRealUser?email=${accountDetails.email}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                    }
                );

                const data = await response.json();

                console.log("Fetched real user:", data);
                setRealUser(data);

                console.log("This is Real User:", realUser)

            } catch (error) {
                console.error("Error fetching real user:", error);
            }
        };

        if (accountDetails?.email) {
            fetchUsers();
            fetchRealUser();
        }
    }, [backEndUrl, accountDetails, accountDetails?.email,]);


    return (
        <div className="w-full overflow-x-hidden">
            <Helmet>
                <title>ProjectNext - Users</title>
            </Helmet>



            {/* HEADER */}
            <div className="flex items-center justify-start px-6 border-b border-gray-200 h-[65px] text-left">
                <div className="max-w-[1330px] mx-auto w-full flex items-center justify-between">
                    <h2 className="text-2xl font-semibold font-jukarta">
                        Users
                    </h2>

                    <button
                        onClick={() => {
                            setButtonPressed(prev => prev + 1);
                            if ((users?.length ?? 0) < (usersLimit ?? 0)) {
                                console.log("User Count:", users?.length, "Users Limit:", usersLimit)
                                setShowModal(true);
                            } else {
                                // alert("User limit reached for your account type. Please upgrade to add more users.")
                                setShowModal(false)
                                Swal.fire({
                                    html: `
                                            <div class="flex flex-col items-center text-center w-full">
                        
                                                <!-- Success Icon -->
                                                <div class="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/10 mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                                        class="w-6 h-6 text-red-500" 
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                            d="M6 18L18 6M6 6l12 12"/>
                                                    </svg>
                                                </div>
                        
                                                <!-- Title -->
                                                <h2 class="text-xl font-semibold text-gray-800 font-rubik">
                                                    Limit Reached!
                                                </h2>
                                                <!-- Text -->
                                                <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                                                    User Limit Has Been Reached. Please upgrade your account to add more users.
                                                </p>
                        
                                            </div>
                                        `,

                                    width: "400px",
                                    showConfirmButton: false,
                                    timer: 3000,
                                    timerProgressBar: true,

                                    customClass: {
                                        popup: "rounded-2xl p-8"
                                    }
                                });
                            }
                        }}
                        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
                    >
                        Create User
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setShowModal(false)}
                    ></div>

                    <div className="relative z-50 animate-modal">
                        <CreateUser setUsers={setUsers} users={users} closeModal={() => setShowModal(false)} />
                    </div>
                </div>
            )}

            {showUpdateModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center">

                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
                        onClick={() => setShowUpdateModal(false)}
                    ></div>

                    <div className="relative z-50 animate-modal">
                        <UpdateUser selectedUser={selectedUser} setUsers={setUsers} users={users} closeModal={() => setShowUpdateModal(false)} />
                    </div>
                </div>
            )}

            {/* CONTENT */}
            <div className="max-w-[1330px] w-full mx-auto px-4 py-6 font-jukarta text-black">

                <div className=" p-6 rounded-xl  ">
                    <div className="">

                        {/* Title */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">All Users ({users?.length} / {usersLimit})</h2>
                            <span className="text-sm text-gray-400">{users?.length} users</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table w-full border-separate border-spacing-y-0.5 border overflow-hidden border-gray-200 ">

                                {/* HEADER */}
                                <thead className="bg-gray-50  border-b  border-gray-200">
                                    <tr className="text-gray-500 text-[12px] uppercase tracking-wider font-bold ">
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
                                <tbody className="divide-y divide-gray-100">
                                    <SingleUser users={users} setShowUpdateModal={setShowUpdateModal} setSelectedUser={setSelectedUser} />
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    );
}