import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const CalendarPage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [tempMonth, setTempMonth] = useState(new Date().getMonth());
    const [tempYear, setTempYear] = useState(new Date().getFullYear());
    const [events, setEvents] = useState({
        "2026-04-05": [
            {
                header: "Meeting with Canvi",
                details: "Discuss UI changes",
                date: "2026-04-05"
            },
            {
                header: "Meeting with Jane",
                details: "Project planning",
                date: "2026-04-05"
            }
        ],
        "2026-04-10": [
            {
                header: "Project deadline",
                details: "Submit final version",
                date: "2026-04-10"
            }
        ]
    });

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newEvent, setNewEvent] = useState({
        date: "",
        header: "",
        details: ""
    });



    const [selectedDate, setSelectedDate] = useState(null);
    const [showEventModal, setShowEventModal] = useState(false);




    const handleCreateEvent = () => {
        if (!newEvent.date || !newEvent.header) return;

        setEvents((prev) => {
            const updated = { ...prev };

            if (!updated[newEvent.date]) {
                updated[newEvent.date] = [];
            }

            updated[newEvent.date].push({
                header: newEvent.header,
                details: newEvent.details,
                date: newEvent.date
            });

            return updated;
        });

        // reset form
        setNewEvent({ date: "", header: "", details: "" });
        setShowCreateModal(false);
    };

    const formatDateKey = (year, month, day) => {
        return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    };

    const daysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const startDayOfMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1).getDay();
    };

    const changeMonth = (offset) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + offset);
        setCurrentDate(newDate);
    };



    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const handleApplyDate = () => {
        const newDate = new Date(tempYear, tempMonth, 1);
        setCurrentDate(newDate);
        setShowPicker(false);
    };

    const renderCalendar = () => {
        const totalDays = daysInMonth(currentDate);
        const startDay = startDayOfMonth(currentDate);

        const cells = [];

        for (let i = 0; i < startDay; i++) {
            cells.push(<div key={`empty-${i}`} className="border border-gray-200 bg-gray-50"></div>);
        }

        for (let day = 1; day <= totalDays; day++) {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();

            const dateKey = formatDateKey(year, month, day);
            const dayEvents = events[dateKey] || [];

            const isToday =
                day === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear();

            cells.push(
                <div
                    key={day}
                    onClick={() => {
                        setSelectedDate(dateKey);
                        setShowEventModal(true);
                    }}
                    className={`border border-gray-200 p-2 h-30 flex flex-col cursor-pointer ${isToday ? "bg-indigo-100/50" : "bg-white"
                        } hover:bg-indigo-100 transition`}
                >
                    <span
                        className={`text-md font-jukarta ${isToday
                            ? "text-indigo-800 font-semibold"
                            : "text-gray-700 font-medium"
                            }`}
                    >
                        {day}
                    </span>

                    <div className="mt-1 text-xs text-gray-400 flex flex-col gap-1"  >
                        {dayEvents.map((event, idx) => (
                            <div key={idx} className="badge line-clamp-1" >
                                <span className="font-medium">{event.header}</span>
                                {/* optional details */}
                                <span className="text-[10px] text-gray-400 block">
                                    {event.details}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return cells;
    };

    return (
        <div className="">

            <title>TrackLio - Calendar</title>
            {showEventModal && (
                <div className="fixed inset-0  items-center justify-center z-50 font-jukarta hidden">
                    <div className="bg-white w-[500px] rounded-2xl shadow-2xl relative z-50 max-h-[85vh] flex flex-col overflow-hidden">

                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-red border-b border-gray-200 text-left">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    {new Date(selectedDate).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric"
                                    })}
                                </h2>
                                <p className="text-xs text-gray-600">
                                    {events[selectedDate]?.length || 0} events scheduled
                                </p>
                            </div>

                            <button
                                onClick={() => setShowEventModal(false)}
                                className="text-gray-400 hover:text-black text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3">

                            {(events[selectedDate] && events[selectedDate].length > 0) ? (
                                events[selectedDate].map((event, idx) => (
                                    <div
                                        key={idx}
                                        className="group border text-left bg-gray-100 border-gray-200 rounded-xl p-4 hover:shadow-md transition flex flex-col gap-2 "
                                    >
                                        {/* Top Row */}
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold text-gray-800">
                                                {event.header}
                                            </p>

                                            {/* Actions */}
                                            <div className="opacity-0 group-hover:opacity-100 flex gap-2 transition">
                                                <button className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
                                                    Edit
                                                </button>
                                                <button className="text-xs px-2 py-1 bg-red-50 text-red-500 rounded hover:bg-red-100">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>

                                        {/* Details */}
                                        <p className="text-sm text-gray-500">
                                            {event.details || "No description"}
                                        </p>

                                        {/* Footer Meta */}
                                        <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                                            <span>📅 {event.date}</span>
                                            {/* <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
                                                Task
                                            </span> */}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center py-10 text-center">
                                    <p className="text-gray-400 text-sm">No events for this day :(</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="border-t px-6 py-3 flex justify-between items-center">
                            <button
                                onClick={() => setShowEventModal(false)}
                                className="text-sm text-gray-500 hover:text-black"
                            >
                                Close
                            </button>

                            {/* <button className="px-4 py-2 bg-black text-white text-sm rounded-md hover:scale-105 transition">
                                + New Event
                            </button> */}
                        </div>
                    </div>

                    {/* Overlay */}
                    <div
                        onClick={() => setShowEventModal(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                    />
                </div>
            )}
            <div className="">
                <div className="flex items-center justify-between px-6 border-b border-gray-200 h-[65px]">
                    <div className="max-w-[1330px] mx-auto w-full flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <p className="text-2xl font-semibold font-jukarta">Calendar</p>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => changeMonth(-1)}
                                    className="px-3 py-1 rounded-md hover:bg-gray-100 cursor-pointer"
                                >
                                    <ChevronLeft />
                                </button>

                                <h2
                                    onClick={() => {
                                        setTempMonth(currentDate.getMonth());
                                        setTempYear(currentDate.getFullYear());
                                        setShowPicker(true);
                                    }}
                                    className="text-lg font-medium font-jukarta cursor-pointer hover:underline"
                                >
                                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                                </h2>

                                <button
                                    onClick={() => changeMonth(1)}
                                    className="px-3 py-1 rounded-md hover:bg-gray-100 cursor-pointer"
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowCreateModal(true)}
                            className="px-4 py-2 bg-black text-white rounded-md cursor-pointer hover:scale-105 transition"
                        >
                            + Create
                        </button>
                    </div>
                </div>
            </div>


            <div className="max-w-[1330px] mt-10  mx-auto w-full flex flex-col bg-white relative">
                {/* Top Bar */}


                {/* Picker Modal */}
                {showPicker && (
                    <div className="absolute -top-10 left-40 bg-white shadow-xl border rounded-xl p-5 z-50 w-72">
                        <h3 className="text-lg font-semibold mb-4">Select Month & Year</h3>

                        <div className="flex flex-col gap-3">
                            <select
                                value={tempMonth}
                                onChange={(e) => setTempMonth(parseInt(e.target.value))}
                                className="border p-2 rounded-md"
                            >
                                {monthNames.map((m, i) => (
                                    <option key={i} value={i}>{m}</option>
                                ))}
                            </select>

                            <input
                                type="number"
                                value={tempYear}
                                onChange={(e) => setTempYear(parseInt(e.target.value))}
                                className="border p-2 rounded-md"
                                placeholder="Year"
                            />
                        </div>

                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                onClick={() => setShowPicker(false)}
                                className="px-3 py-1 rounded-md bg-gray-200 cursor-pointer hover:scale-105 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleApplyDate}
                                className="px-3 py-1 rounded-md bg-black text-white cursor-pointer hover:scale-105 transition"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                )}

                {/* Overlay */}
                {showPicker && (
                    <div
                        onClick={() => setShowPicker(false)}
                        className="fixed inset-0 bg-black/20 z-40"
                    />
                )}



                {/* Calendar Grid */}
                <div className="flex">
                    {/* LEFT SIDE (Calendar + Header together) */}
                    <div
                        className={`transition-all duration-300 ${showEventModal ? "w-[70%]" : "w-full"
                            }`}
                    >
                        {/* Week Days Header */}
                        <div className="grid grid-cols-7 border-b text-sm text-gray-500 border border-gray-200">
                            {weekDays.map((day) => (
                                <div
                                    key={day}
                                    className="p-3 font-jukarta font-semibold text-black/70 border-r border-gray-200 last:border-r-0 text-center"
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 grid-rows-5 text-black">
                            {renderCalendar()}
                        </div>
                    </div>

                    {/* RIGHT SIDE PANEL */}
                    <div
                        className={`transition-all duration-300 border border-l-0 border-gray-200 ${showEventModal ? "w-[30%] min-w-[350px]" : "w-0"
                            } overflow-hidden`}
                    >
                        {showEventModal && (
                            <div className="h-full font-jukarta border-l border-gray-200 bg-white flex flex-col">

                                {/* Header */}
                                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 text-left">
                                    <div>
                                        <h2 className="text-lg font-semibold">
                                            {new Date(selectedDate).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric"
                                            })}
                                        </h2>
                                        <p className="text-xs text-gray-600">
                                            {events[selectedDate]?.length || 0} events scheduled
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setShowEventModal(false)}
                                        className="text-gray-400 hover:text-black text-xl"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 max-h-[560px] overflow-y-scroll"  >
                                    {(events[selectedDate] && events[selectedDate].length > 0) ? (
                                        events[selectedDate].map((event, idx) => (
                                            <div
                                                key={idx}
                                                className="group border text-left bg-gray-100/10 border-gray-200 rounded-sm p-2 px-3 hover:shadow-sm transition flex flex-col gap-2"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <p className="font-semibold text-gray-800">
                                                        {event.header}
                                                    </p>

                                                    <div className="opacity-0 group-hover:opacity-100 flex gap-2 transition">
                                                        <button className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">
                                                            Edit
                                                        </button>
                                                        <button className="text-xs px-2 py-1 bg-red-50 text-red-500 rounded hover:bg-red-100">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>

                                                <p className="text-sm text-gray-500">
                                                    {event.details || "No description"}
                                                </p>

                                                <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                                                    <span>📅 {event.date}</span>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-10 text-center">
                                            <p className="text-gray-600 text-md">
                                                No event scheduled for this day :(
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>



            {showCreateModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* Overlay */}
                    <div
                        onClick={() => setShowCreateModal(false)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                    />

                    {/* Modal */}
                    <div className="relative z-10 w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transition-all duration-300 scale-100">

                        {/* Header */}
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Create Event
                            </h2>
                            <button
                                onClick={() => setShowCreateModal(false)}
                                className="text-gray-400 hover:text-black transition"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Inputs */}
                        <div className="flex flex-col gap-4">

                            <input
                                type="date"
                                value={newEvent.date}
                                onChange={(e) =>
                                    setNewEvent({ ...newEvent, date: e.target.value })
                                }
                                className="border border-gray-200  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none p-2.5 rounded-lg text-sm transition"
                            />

                            <input
                                type="text"
                                placeholder="Event title"
                                value={newEvent.header}
                                onChange={(e) =>
                                    setNewEvent({ ...newEvent, header: e.target.value })
                                }
                                className="border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none p-2.5 rounded-lg text-sm transition"
                            />

                            <textarea
                                placeholder="Add details..."
                                value={newEvent.details}
                                onChange={(e) =>
                                    setNewEvent({ ...newEvent, details: e.target.value })
                                }
                                className="border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none p-2.5 rounded-lg text-sm transition resize-none"
                                rows={3}
                            />

                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-3 mt-6">

                            <button
                                onClick={() => setShowCreateModal(false)}
                                className="px-4 py-2 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleCreateEvent}
                                className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm"
                            >
                                Add Event
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CalendarPage;
