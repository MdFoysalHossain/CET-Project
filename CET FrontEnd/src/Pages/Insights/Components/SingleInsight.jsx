import React from 'react';
import { Clock, User as UserIcon } from 'lucide-react';

const SingleInsight = ({ insight }) => {
    // Formatting the ISO string to: 14 May 2026, 10:15:00 AM
    const formatUTC = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZone: 'UTC'
        });
    };

    const getStatusStyle = (status) => {
        switch(status) {
            case 'Delete': return 'bg-red-50 text-red-600 border-red-100';
            case 'Update': return 'bg-amber-50 text-amber-600 border-amber-100';
            case 'Create': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
            default: return 'bg-indigo-50 text-indigo-600 border-indigo-100';
        }
    };

    return (
        <tr className="hover:bg-slate-50/80 transition-colors font-jukarta">
            {/* Timestamp with Seconds */}
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2 text-gray-700">
                    <Clock size={18} className="text-gray-400" />
                    <span className="text-sm font-medium tracking-tight">
                        {formatUTC(insight.timestamp)}
                    </span>
                </div>
            </td>

            {/* Identity Details */}
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-indigo-100 border border-indigo-200 text-indigo-500 flex items-center justify-center text-md font-semibold shadow-sm">
                        {insight.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">@{insight.username}</span>
                        {insight.username !== insight.loggedTo && (
                            <span className="text-[10px] text-gray-400 font-medium ">
                                Action on: @{insight.loggedTo}
                            </span>
                        )}
                    </div>
                </div>
            </td>

            {/* Event Description & Badge */}
            <td className="px-6 py-4">
                <div className="flex flex-col gap-1.5">
                    <div className={`inline-flex w-fit px-2 py-0.5 rounded border text-[10px] font-bold uppercase ${getStatusStyle(insight.status)}`}>
                        {insight.status}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                        {insight.event}
                    </p>
                </div>
            </td>

            {/* Project Scope */}
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                    {insight.project}
                </span>
            </td>
        </tr>
    );
};

export default SingleInsight;