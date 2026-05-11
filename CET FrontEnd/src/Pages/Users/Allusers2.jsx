import { CircleX, University } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const rolesList = [
    "PM",
    "Client",
    "Manager",
    "Task Handler",
    "QA",
    "Developer",
];

const mockUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
    { id: 4, name: "David Lee", email: "david@example.com" },
    { id: 5, name: "Emma Stone", email: "emma@example.com" },
    { id: 6, name: "Frank Ocean", email: "frank@example.com" },
];

export default function Allusers2() {
    const [users] = useState(mockUsers);
    const [search, setSearch] = useState("");

    const [selectedTeam, setSelectedTeam] = useState({});
    const [selectedRole, setSelectedRole] = useState({});

    // Teams: { id, name, members: [{userId, role}] }
    const [teams, setTeams] = useState([]);
    const [teamName, setTeamName] = useState("");
    const [activeTeamId, setActiveTeamId] = useState(null);

    const activeTeam = teams.find((t) => t.id === activeTeamId);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    const createTeam = () => {
        if (!teamName.trim()) return;
        const newTeam = {
            id: Date.now(),
            name: teamName,
            members: [],
        };
        setTeams([...teams, newTeam]);
        setTeamName("");
        setActiveTeamId(newTeam.id);
    };

    const addToTeam = (user) => {
        if (!activeTeam) return;

        const alreadyExists = activeTeam.members.find(
            (m) => m.userId === user.id
        );
        if (alreadyExists) return;

        const updatedTeams = teams.map((team) =>
            team.id === activeTeam.id
                ? {
                    ...team,
                    members: [...team.members, { userId: user.id, role: "" }],
                }
                : team
        );

        setTeams(updatedTeams);
    };

    const assignRole = (userId, role, teamId = activeTeamId) => {
        const updatedTeams = teams.map((team) => {
            if (team.id !== teamId) return team;

            return {
                ...team,
                members: team.members.map((m) =>
                    m.userId === userId ? { ...m, role } : m
                ),
            };
        });

        setTeams(updatedTeams);
    };

    const removeFromTeam = (teamId, userId) => {
        const updatedTeams = teams.map((team) => {
            if (team.id !== teamId) return team;
            return {
                ...team,
                members: team.members.filter((m) => m.userId !== userId),
            };
        });

        setTeams(updatedTeams);
    };

    const getUser = (id) => users.find((u) => u.id === id);

    const assignUserToTeam = (userId, teamId, role) => {
        if (!teamId || !role) return;

        console.log("Assigning:", { userId, teamId, role });

        // Your actual backend / state update logic here
    };

    return (
        <div className="w-full overflow-x-hidden">
            <Helmet>
                <title>ProjectNext - Users & Teams</title>
            </Helmet>
            <div className="flex items-center justify-start px-6 border-b border-gray-200 h-[65px] text-left">
                <div className="max-w-[1330px] mx-auto w-full flex items-center justify-start gap-4">
                    <h2 className="text-2xl font-semibold font-jukarta">Users & Teams</h2>
                </div>
            </div>
            <div className="max-w-[1330px] w-full mx-auto px-4 py-6 space-y-6 font-jukarta text-left text-black">
                

                {/* Create Team */}
                <div className=" bg-white shadow rounded-sm">
                    <div className="p-4 flex flex-col md:flex-row gap-3 items-center justify-between">
                        <div className="flex gap-5">
                            <input
                                type="text"
                                placeholder="New team name..."
                                className="input bg-gray-100 input-bordered w-full md:w-80"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                            />
                            <button className="btn btn-primary" onClick={createTeam}>
                                Create Team
                            </button>
                        </div>

                        <select
                            className="select bg-gray-100 select-bordered w-full md:w-60"
                            value={activeTeamId || ""}
                            onChange={(e) => setActiveTeamId(Number(e.target.value))}
                        >
                            <option value="">Select Team</option>
                            {teams.map((team) => (
                                <option key={team.id} value={team.id}>
                                    {team.name}
                                </option>
                            ))}
                        </select>

                        {
                            console.log("Active Team:", activeTeam)
                        }
                    </div>
                </div>

                <div className={` flex flex-col md:flex-row gap-6  ${activeTeam === undefined ? "hidden" : "block"}`}>
                    {/* Search Users */}
                    <div className="card bg-white shadow flex-1">
                        <div className="card-body">
                            <h2 className="card-title">Add Members</h2>

                            <input
                                type="text"
                                placeholder="Search users..."
                                className="input bg-gray-100 input-bordered w-full"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <div className="mt-4 space-y-2 max-h-56 overflow-y-auto">
                                {filteredUsers.map((user) => (
                                    <div
                                        key={user.id}
                                        className="flex justify-between items-center p-2 bg-white rounded"
                                    >
                                        <div>
                                            <p className="font-medium">{user.name}</p>
                                            <p className="text-sm opacity-70 break-all">
                                                {user.email}
                                            </p>
                                        </div>
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={() => addToTeam(user)}
                                            disabled={!activeTeam}
                                        >
                                            Add
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Team Members */}
                    <div className="card bg-white shadow flex-1">
                        <div className="card-body max-h-[350px] overflow-y-auto">
                            <h2 className="card-title">Team Members</h2>

                            {!activeTeam ? (
                                <p className="opacity-70">Select or create a team.</p>
                            ) : activeTeam.members.length === 0 ? (
                                <p className="opacity-70">No members yet.</p>
                            ) : (
                                <div className="space-y-3">
                                    {activeTeam.members.map((m) => {
                                        const user = getUser(m.userId);
                                        return (
                                            <div
                                                key={m.userId}
                                                className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-white rounded gap-2"
                                            >
                                                <div>
                                                    <p className="font-semibold">{user.name}</p>
                                                    <p className="text-sm opacity-70 break-all">
                                                        {user.email}
                                                    </p>
                                                </div>

                                                <div className="flex gap-2 items-center">
                                                    <select
                                                        className="select bg-gray-100 select-bordered w-full md:w-48"
                                                        value={m.role}
                                                        onChange={(e) =>
                                                            assignRole(m.userId, e.target.value)
                                                        }
                                                    >
                                                        <option value="">Assign Role</option>
                                                        {rolesList.map((role) => (
                                                            <option key={role} value={role}>
                                                                {role}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    <button
                                                        className="btn btn-sm btn-error"
                                                        onClick={() => removeFromTeam(activeTeam.id, m.userId)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Teams Overview */}
                <div className="card bg-white shadow">
                    <div className="card-body">
                        <h2 className="card-title">All Teams</h2>

                        {teams.length === 0 ? (
                            <p className="opacity-70">No teams created.</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                {teams.map((team) => (
                                    <div key={team.id} className="shadow-sm bg-gray-100 rounded p-3">
                                        <p className="font-semibold">{team.name}</p>
                                        <p className="text-sm opacity-60">
                                            Members: {team.members.length}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* All Users Table */}
                <div className="card bg-white shadow">
                    <div className="card-body">
                        <h2 className="card-title">All Users</h2>

                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr className="text-gray-600">
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Team</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users.map((user) => {
                                        const userTeams = teams.filter((t) =>
                                            t.members.find((m) => m.userId === user.id)
                                        );

                                        // If user has no team
                                        if (userTeams.length === 0) {
                                            return (
                                                <tr key={user.id}>
                                                    <td className="truncate max-w-[180px] align-middle">
                                                        {user.name}
                                                    </td>

                                                    <td className="truncate max-w-[250px] align-middle">
                                                        {user.email}
                                                    </td>

                                                    {/* Team Select */}
                                                    <td>
                                                        {/* <select
                                                        className="select bg-gray-200 select-bordered select-sm w-full max-w-[160px]"
                                                        defaultValue=""
                                                        onChange={(e) =>
                                                            setSelectedTeam((prev) => ({
                                                                ...prev,
                                                                [user.id]: e.target.value,
                                                            }))
                                                        }
                                                    >
                                                        <option value="">Assign Team</option>
                                                        {teams.map((team) => (
                                                            <option key={team.id} value={team.id}>
                                                                {team.name}
                                                            </option>
                                                        ))}
                                                    </select> */}

                                                        <span className="badge">No Team</span>
                                                    </td>

                                                    {/* Role Select */}
                                                    <td>
                                                        <select
                                                            className="select bg-gray-200 select-bordered select-sm w-full max-w-[160px]"
                                                            defaultValue=""
                                                            onChange={(e) =>
                                                                setSelectedRole((prev) => ({
                                                                    ...prev,
                                                                    [user.id]: e.target.value,
                                                                }))
                                                            }
                                                        >
                                                            <option value="">Assign Role</option>
                                                            {rolesList.map((role) => (
                                                                <option key={role} value={role}>
                                                                    {role}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </td>

                                                    {/* Assign Button */}
                                                    <td>
                                                        <button
                                                            className="btn btn-sm btn-success"
                                                            onClick={() =>
                                                                assignUserToTeam(
                                                                    user.id,
                                                                    selectedTeam[user.id],
                                                                    selectedRole[user.id]
                                                                )
                                                            }
                                                            disabled={!selectedTeam[user.id] || !selectedRole[user.id]}
                                                        >
                                                            Assign
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        }

                                        return userTeams.map((team, idx) => {
                                            const member = team.members.find((m) => m.userId === user.id);

                                            return (
                                                <tr key={`${user.id}-${team.id}`}>
                                                    {idx === 0 && (
                                                        <>
                                                            <td
                                                                rowSpan={userTeams.length}
                                                                className="truncate max-w-[180px] align-middle"
                                                            >
                                                                {user.name}
                                                            </td>
                                                            <td
                                                                rowSpan={userTeams.length}
                                                                className="truncate max-w-[250px] align-middle"
                                                            >
                                                                {user.email}
                                                            </td>
                                                        </>
                                                    )}

                                                    <td>
                                                        <span className="badge badge-primary badge-outline">
                                                            {team.name}
                                                        </span>
                                                    </td>

                                                    <td>
                                                        <select
                                                            className="select bg-gray-200 select-bordered select-sm w-full max-w-[160px]"
                                                            value={member.role || ""}
                                                            onChange={(e) =>
                                                                assignRole(user.id, e.target.value, team.id)
                                                            }
                                                        >
                                                            <option value="">Assign Role</option>
                                                            {rolesList.map((role) => (
                                                                <option key={role} value={role}>
                                                                    {role}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </td>

                                                    <td>
                                                        <button
                                                            className="btn btn-sm btn-error"
                                                            onClick={() => removeFromTeam(team.id, user.id)}
                                                        >
                                                            <CircleX size={16} /> Role & Team
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        });
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}






















