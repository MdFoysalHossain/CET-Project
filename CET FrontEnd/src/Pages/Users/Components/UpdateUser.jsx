import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../../Context/SettingsProvidor';
import { AuthContext } from '../../../Context/AccountProvidor';
import Swal from 'sweetalert2';

const rolesList = ["PM", "Developer", "Designer", "QA", "Client"];

const UpdateUser = ({ closeModal, users, setUsers, selectedUser }) => {
    const { backEndUrl } = useContext(SettingsContext);
    const { accountDetails } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [selectedRole, setSelectedRole] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.fullName.value.trim();
        const username = form.username.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (!name || !username || !password) {
            alert("Please fill all required fields");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const details = {
            name,
            username,
            role: form.role.value || "Not selected",
            status: form.status.value,
            password,
            createdBy: accountDetails.email,
            projectHas: [],
            taskHas: [],
            createdAt: new Date() // UTC timestamp
        };


        const token = await accountDetails.getIdToken();

        fetch(`${backEndUrl}/updateUser?email=${accountDetails.email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(details)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("This is the response:", data);
                if (data.message === "Username already exists") {
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
                                                Could Not Create User!
                                            </h2>
                                            <!-- Text -->
                                            <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                                                Username already exists, please choose a different one.
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
                } else if (data.insertedId) {
                    closeModal();
                    setUsers(prev => [...prev, { ...details }])
                    Swal.fire({
                        html: `
                                            <div class="flex flex-col items-center text-center w-full">
                    
                                                <!-- Success Icon -->
                                                <div class="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-500/10 mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                                        class="w-6 h-6 text-emerald-500" 
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                            d="M5 13l4 4L19 7"/>
                                                    </svg>
                                                </div>
                    
                                                <!-- Title -->
                                                <h2 class="text-xl font-semibold text-gray-800 font-rubik">
                                                    User Created!
                                                </h2>
                    
                                                <!-- Text -->
                                                <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                                                    User has been created successfully.
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
            })
            .catch((error) => {
                console.error("Error creating user:", error);

            });
    };

    return (
        <div className="flex items-center justify-center w-md px-4 font-jukarta z-1000">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Update User
                    </h2>

                    <button
                        onClick={closeModal}
                        className="text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form className="space-y-4 text-left" onSubmit={handleSubmit}>

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            defaultValue={selectedUser?.name || "Full Name"}
                            name='fullName'
                            required
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            username
                        </label>
                        <input
                            type="text"
                            name='username'
                            defaultValue={selectedUser?.username || "username"}
                            placeholder="username"
                            required
                            className="w-full lowercase px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Role Dropdown */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Role
                        </label>
                        <select
                            value={selectedRole}
                            name="role"
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                            <option value="">Select Role</option>
                            {rolesList.map((role) => (
                                <option key={role} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            name='status'
                            required
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                            <option key="active" value="active">
                                active
                            </option>
                            <option key="deactive" value="deactive">
                                deactive
                            </option>
                        </select>
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            name='password'
                            defaultValue={selectedUser?.password || "••••••••"}
                            placeholder="••••••••"
                            className="w-full px-4 py-2 pr-12 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-9 text-sm text-blue-600 hover:text-blue-800"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            name='confirmPassword'
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            placeholder="••••••••"
                            defaultValue={selectedUser?.password || "••••••••"}
                            className="w-full px-4 py-2 pr-12 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-9 text-sm text-blue-600 hover:text-blue-800"
                        >
                            {showConfirmPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 cursor-pointer transition duration-200"
                    >
                        Update User
                    </button>

                </form>
            </div>
        </div>
    );
};

export default UpdateUser;