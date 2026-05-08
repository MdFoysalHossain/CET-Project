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














// import React from "react";
// import { Star, CheckCircle, BellRing, Clock } from "lucide-react";

// const NotificationCard = ({ notification, onToggleRead, onToggleFav }) => {
//   const {
//     time,
//     event,
//     status,
//     marked,
//     triggeredBy,
//   } = notification;

//   const isUnread = status === "unread";

//   return (
//     <div
//       className={`group relative p-5 rounded-2xl transition-all duration-300 mb-3 border font-jukarta
//       ${isUnread 
//         ? "bg-white border-indigo-100 shadow-md shadow-indigo-50/50" 
//         : "bg-slate-50/50 border-transparent hover:bg-white hover:border-slate-100 hover:shadow-lg hover:shadow-slate-200/50"}`}
//     >
//       {/* Unread Glow Indicator */}
//       {isUnread && (
//         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-indigo-500 rounded-r-full shadow-[0_0_12px_rgba(99,102,241,0.5)]"></div>
//       )}

//       {/* Header Info */}
//       <div className="flex justify-between items-start mb-3">
//         <div className="flex gap-3">
//           <div className={`p-2 rounded-lg flex-shrink-0 ${isUnread ? "bg-indigo-50 text-indigo-600" : "bg-slate-100 text-slate-400"}`}>
//             <BellRing size={18} />
//           </div>
//           <div>
//             <h3 className={`font-bold text-sm md:text-base leading-tight ${isUnread ? "text-slate-900" : "text-slate-600"}`}>
//               {event}
//             </h3>
//             <div className="flex items-center gap-2 mt-1">
//               <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
//                 BY <span className="text-slate-600">{triggeredBy}</span>
//               </p>
//             </div>
//           </div>
//         </div>
        
//         <div className="flex items-center gap-1.5 text-slate-400">
//            <Clock size={12} />
//            <span className="text-[11px] font-bold">{time}</span>
//         </div>
//       </div>

//       {/* Bottom Actions */}
//       <div className="mt-5 pt-4 border-t border-slate-50 flex justify-between items-center">
//         {/* Status Chip */}
//         <div className="flex items-center gap-2">
//             <div className={`w-1.5 h-1.5 rounded-full ${isUnread ? "bg-indigo-500 animate-pulse" : "bg-slate-300"}`}></div>
//             <span className={`text-[11px] font-extrabold uppercase tracking-widest ${isUnread ? "text-indigo-600" : "text-slate-400"}`}>
//                 {isUnread ? "New Update" : "Archived"}
//             </span>
//         </div>

//         <div className="flex items-center gap-2">
//           {/* Mark as Read Ghost Button */}
//           {isUnread && (
//             <button
//               onClick={onToggleRead}
//               className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
//             >
//               <CheckCircle size={14} />
//               Mark as read
//             </button>
//           )}

//           {/* Favorite Toggle */}
//           <button
//             onClick={onToggleFav}
//             className={`p-2 rounded-lg transition-all duration-300 ${
//               marked 
//               ? "bg-amber-50 text-amber-500 scale-110" 
//               : "text-slate-300 hover:text-slate-400 hover:bg-slate-100"
//             }`}
//             title="Favorite"
//           >
//             <Star
//               size={18}
//               className={marked ? "fill-amber-500" : ""}
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotificationCard;