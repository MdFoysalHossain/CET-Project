import React from "react";
import { Star, CheckCircle } from "lucide-react";

const NotificationCard = ({ notification, onToggleRead, onToggleFav }) => {
  const {
    time,
    event,
    status,
    marked,
    triggeredBy,
    for: recipients,
  } = notification;

  const isUnread = status === "unread";

  return (
    <div
      className={`group relative p-4 pt-0 border-b transition-all duration-200 mb-3 bg-white border-gray-200 custom-scrollbar`}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start relative">
        <div className="mt-5">
          <h3 className="font-semibold text-gray-800">{event}</h3>
          <p className="text-xs text-gray-500 mt-1">
            Triggered by <span className="font-medium">{triggeredBy}</span>
          </p>
        </div>

        <span className="text-xs text-gray-400 absolute top-0 right-0">{time}</span>
      </div>

      {/* Recipients */}
      {/* <div className="mt-2 text-xs text-gray-500">
        For: {recipients.join(", ")}
      </div> */}

      {/* Bottom Actions */}
      <div className="mt-4 flex justify-between items-center">
        {/* Status Badge */}
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium
          ${isUnread ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}`}
        >
          {isUnread ? "Unread" : "Read"}
        </span>

        {/* Actions */}
        <div className="flex items-center gap-3 opacity-100 group-hover:opacity-100 transition">
          {/* Mark as Read */}
          <button
            onClick={onToggleRead} 
            className={`${isUnread ? "" : "hidden"} cursor-pointer transition px-2 py-1.25 rounded-sm  text-sm bg-indigo-500 text-white`}
            title="Mark as read"
          >
            Mark As Read
            {/* <CheckCircle
              size={18}
              className={isUnread ? "text-gray-400" : "text-green-500"}
            /> */}
          </button>

          {/* Favorite */}
          <button
            onClick={onToggleFav}
            className="hover:scale-110 transition"
            title="Mark as favorite"
          >
            <Star
              size={22}
              className={marked ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
            />
          </button>
        </div>
      </div>

      {/* Unread Indicator */}
      {/* {isUnread && (
        <span className="absolute top-1 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
      )} */}
    </div>
  );
};

export default NotificationCard;