// import React, { useState } from "react";
// import Select from "react-select";

// const assigneeOptions = [
//   { value: 'user1', label: 'Talan Korsgaard' },
//   { value: 'user2', label: 'Hanna Philips' },
//   { value: 'user3', label: 'Davis Donin' },
// ];

// export default function ProjectInputForm() {
//   const [project, setProject] = useState({
//     name: '',
//     createdAt: '',
//     status: 'In Research',
//     dueDate: '',
//     tags: [],
//     assignees: [],
//     description: '',
//     tasks: [],
//   });

//   const handleProjectChange = (field, value) => {
//     setProject(prev => ({ ...prev, [field]: value }));
//   };

//   const addTask = () => {
//     setProject(prev => ({
//       ...prev,
//       tasks: [...prev.tasks, { name: '', due: '', description: '', subtasks: [] }]
//     }));
//   };

//   const addSubtask = (taskIndex) => {
//     const newTasks = [...project.tasks];
//     newTasks[taskIndex].subtasks.push({ name: '', due: '', description: '' });
//     setProject(prev => ({ ...prev, tasks: newTasks }));
//   };

//   const handleTaskChange = (taskIndex, field, value, subtaskIndex = null) => {
//     const newTasks = [...project.tasks];
//     if (subtaskIndex !== null) {
//       newTasks[taskIndex].subtasks[subtaskIndex][field] = value;
//     } else {
//       newTasks[taskIndex][field] = value;
//     }
//     setProject(prev => ({ ...prev, tasks: newTasks }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Project Data:", project);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow">
//       <h2 className="text-xl font-bold mb-4">Create Project</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">

//         {/* Project Name */}
//         <div>
//           <label className="block font-semibold">Project Name</label>
//           <input
//             type="text"
//             value={project.name}
//             onChange={(e) => handleProjectChange('name', e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Created At */}
//         <div>
//           <label className="block font-semibold">Created At</label>
//           <input
//             type="datetime-local"
//             value={project.createdAt}
//             onChange={(e) => handleProjectChange('createdAt', e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Status */}
//         <div>
//           <label className="block font-semibold">Status</label>
//           <select
//             value={project.status}
//             onChange={(e) => handleProjectChange('status', e.target.value)}
//             className="w-full border p-2 rounded"
//           >
//             <option>In Research</option>
//             <option>In Progress</option>
//             <option>Completed</option>
//           </select>
//         </div>

//         {/* Due Date */}
//         <div>
//           <label className="block font-semibold">Due Date</label>
//           <input
//             type="date"
//             value={project.dueDate}
//             onChange={(e) => handleProjectChange('dueDate', e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Tags */}
//         <div>
//           <label className="block font-semibold">Tags (comma separated)</label>
//           <input
//             type="text"
//             value={project.tags.join(', ')}
//             onChange={(e) => handleProjectChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Assignees */}
//         <div>
//           <label className="block font-semibold">Assignees</label>
//           <Select
//             isMulti
//             options={assigneeOptions}
//             value={project.assignees}
//             onChange={(selected) => handleProjectChange('assignees', selected)}
//           />
//         </div>

//         {/* Project Description */}
//         <div>
//           <label className="block font-semibold">Description</label>
//           <textarea
//             value={project.description}
//             onChange={(e) => handleProjectChange('description', e.target.value)}
//             className="w-full border p-2 rounded h-24"
//           />
//         </div>

//         {/* Tasks */}
//         <div>
//           <h3 className="text-lg font-bold mt-4">Tasks</h3>
//           {project.tasks.map((task, taskIndex) => (
//             <div key={taskIndex} className="border p-4 rounded mb-3">
//               <input
//                 type="text"
//                 placeholder="Task Name"
//                 value={task.name}
//                 onChange={(e) => handleTaskChange(taskIndex, 'name', e.target.value)}
//                 className="w-full border p-2 rounded mb-2"
//               />
//               <input
//                 type="date"
//                 value={task.due}
//                 onChange={(e) => handleTaskChange(taskIndex, 'due', e.target.value)}
//                 className="w-full border p-2 rounded mb-2"
//               />
//               <textarea
//                 value={task.description}
//                 onChange={(e) => handleTaskChange(taskIndex, 'description', e.target.value)}
//                 className="w-full border p-2 rounded mb-2 h-20"
//               />

//               {/* Subtasks */}
//               <div className="mt-2 ml-4">
//                 <h4 className="font-semibold">Subtasks</h4>
//                 {task.subtasks.map((subtask, subIndex) => (
//                   <div key={subIndex} className="border p-2 rounded mb-2">
//                     <input
//                       type="text"
//                       placeholder="Subtask Name"
//                       value={subtask.name}
//                       onChange={(e) => handleTaskChange(taskIndex, 'name', e.target.value, subIndex)}
//                       className="w-full border p-1 rounded mb-1"
//                     />
//                     <input
//                       type="date"
//                       value={subtask.due}
//                       onChange={(e) => handleTaskChange(taskIndex, 'due', e.target.value, subIndex)}
//                       className="w-full border p-1 rounded mb-1"
//                     />
//                     <textarea
//                       value={subtask.description}
//                       onChange={(e) => handleTaskChange(taskIndex, 'description', e.target.value, subIndex)}
//                       className="w-full border p-1 rounded mb-1 h-16"
//                     />
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={() => addSubtask(taskIndex)}
//                   className="mt-1 text-sm text-blue-600"
//                 >
//                   + Add Subtask
//                 </button>
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={addTask}
//             className="mt-2 text-blue-700 font-semibold"
//           >
//             + Add Task
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }













// import React, { useState } from "react";
// import Select from "react-select";

// const assigneeOptions = [
//   { value: 'user1', label: 'Talan Korsgaard' },
//   { value: 'user2', label: 'Hanna Philips' },
//   { value: 'user3', label: 'Davis Donin' },
// ];

// export default function ProjectInputForm() {
//   const [project, setProject] = useState({
//     name: '',
//     createdAt: '',
//     status: 'In Research',
//     dueDate: '',
//     tags: [],
//     assignees: [],
//     description: '',
//     tasks: [],
//   });

//   const handleProjectChange = (field, value) => {
//     setProject(prev => ({ ...prev, [field]: value }));
//   };

//   const addTask = () => {
//     setProject(prev => ({
//       ...prev,
//       tasks: [...prev.tasks, { name: '', due: '', description: '', subtasks: [] }]
//     }));
//   };

//   const addSubtask = (taskIndex) => {
//     const newTasks = [...project.tasks];
//     newTasks[taskIndex].subtasks.push({ name: '', due: '', description: '' });
//     setProject(prev => ({ ...prev, tasks: newTasks }));
//   };

//   const handleTaskChange = (taskIndex, field, value, subtaskIndex = null) => {
//     const newTasks = [...project.tasks];
//     if (subtaskIndex !== null) {
//       newTasks[taskIndex].subtasks[subtaskIndex][field] = value;
//     } else {
//       newTasks[taskIndex][field] = value;
//     }
//     setProject(prev => ({ ...prev, tasks: newTasks }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Project Data:", project);
//   };

//   return (
//     <div className="flex items-center justify-center  p-6">
//       <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-gray-200">
//         <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center">Create Project</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Project Name */}
//           <div className="flex flex-col">
//             <label className="font-semibold text-gray-700 mb-2">Project Name</label>
//             <input
//               type="text"
//               value={project.name}
//               onChange={(e) => handleProjectChange('name', e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//               placeholder="Enter project name"
//             />
//           </div>

//           {/* Created At */}
//           <div className="flex flex-col">
//             <label className="font-semibold text-gray-700 mb-2">Created At</label>
//             <input
//               type="datetime-local"
//               value={project.createdAt}
//               onChange={(e) => handleProjectChange('createdAt', e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//             />
//           </div>

//           {/* Status & Due Date */}
//           <div className="flex gap-4 flex-wrap">
//             <div className="flex-1 flex flex-col">
//               <label className="font-semibold text-gray-700 mb-2">Status</label>
//               <select
//                 value={project.status}
//                 onChange={(e) => handleProjectChange('status', e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//               >
//                 <option>In Research</option>
//                 <option>In Progress</option>
//                 <option>Completed</option>
//               </select>
//             </div>

//             <div className="flex-1 flex flex-col">
//               <label className="font-semibold text-gray-700 mb-2">Due Date</label>
//               <input
//                 type="date"
//                 value={project.dueDate}
//                 onChange={(e) => handleProjectChange('dueDate', e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//               />
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="flex flex-col">
//             <label className="font-semibold text-gray-700 mb-2">Tags</label>
//             <input
//               type="text"
//               value={project.tags.join(', ')}
//               onChange={(e) => handleProjectChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
//               placeholder="e.g., React, Dashboard"
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
//             />
//           </div>

//           {/* Assignees */}
//           <div className="flex flex-col">
//             <label className="font-semibold text-gray-700 mb-2">Assignees</label>
//             <Select
//               isMulti
//               options={assigneeOptions}
//               value={project.assignees}
//               onChange={(selected) => handleProjectChange('assignees', selected)}
//               className="react-select-container"
//               classNamePrefix="react-select"
//             />
//           </div>

//           {/* Description */}
//           <div className="flex flex-col">
//             <label className="font-semibold text-gray-700 mb-2">Description</label>
//             <textarea
//               value={project.description}
//               onChange={(e) => handleProjectChange('description', e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition h-28 resize-none"
//               placeholder="Write a brief project description..."
//             />
//           </div>

//           {/* Tasks */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-3">Tasks</h3>
//             {project.tasks.map((task, taskIndex) => (
//               <div key={taskIndex} className="border border-gray-300 rounded-md bg-[#f7f7f7] p-4 mb-4 shadow-sm bg-white/90">
//                 <input
//                   type="text"
//                   placeholder="Task Name"
//                   value={task.name}
//                   onChange={(e) => handleTaskChange(taskIndex, 'name', e.target.value)}
//                   className="w-full px-3 py-2 border rounded-lg mb-2 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
//                 />
//                 <input
//                   type="date"
//                   value={task.due}
//                   onChange={(e) => handleTaskChange(taskIndex, 'due', e.target.value)}
//                   className="w-full px-3 py-2 border rounded-lg mb-2 focus:ring-2 focus:ring-blue-300 focus:outline-none transition"
//                 />
//                 <textarea
//                   value={task.description}
//                   onChange={(e) => handleTaskChange(taskIndex, 'description', e.target.value)}
//                   className="w-full px-3 py-2 border rounded-lg mb-2 focus:ring-2 focus:ring-blue-300 focus:outline-none transition h-20 resize-none"
//                   placeholder="Task description..."
//                 />

//                 {/* Subtasks */}
//                 <div className="ml-4 mt-2">
//                   <h4 className="font-semibold text-gray-700 mb-2">Subtasks</h4>
//                   {task.subtasks.map((subtask, subIndex) => (
//                     <div key={subIndex} className="border p-3 rounded-lg mb-2 bg-gray-50 shadow-inner">
//                       <input
//                         type="text"
//                         placeholder="Subtask Name"
//                         value={subtask.name}
//                         onChange={(e) => handleTaskChange(taskIndex, 'name', e.target.value, subIndex)}
//                         className="w-full px-2 py-1 border rounded mb-1 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
//                       />
//                       <input
//                         type="date"
//                         value={subtask.due}
//                         onChange={(e) => handleTaskChange(taskIndex, 'due', e.target.value, subIndex)}
//                         className="w-full px-2 py-1 border rounded mb-1 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
//                       />
//                       <textarea
//                         value={subtask.description}
//                         onChange={(e) => handleTaskChange(taskIndex, 'description', e.target.value, subIndex)}
//                         className="w-full px-2 py-1 border rounded mb-1 focus:ring-2 focus:ring-blue-200 focus:outline-none transition h-16 resize-none"
//                         placeholder="Subtask description..."
//                       />
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() => addSubtask(taskIndex)}
//                     className="mt-1 text-blue-600 font-medium hover:underline"
//                   >
//                     + Add Subtask
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={addTask}
//               className="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
//             >
//               + Add Task
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:from-blue-600 hover:to-indigo-700 transition"
//           >
//             Submit Project
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
























// import React, { useState } from "react";
// import Select from "react-select";

// const assigneeOptions = [
//   { value: 'user1', label: 'Talan Korsgaard', email: 'talan@example.com', role: 'Developer' },
//   { value: 'user2', label: 'Hanna Philips', email: 'hanna@example.com', role: 'Designer' },
//   { value: 'user3', label: 'Davis Donin', email: 'davis@example.com', role: 'Project Manager' },
// ];

// export default function ProjectInputForm() {
//   const [currentStage, setCurrentStage] = useState(1);
//   const [project, setProject] = useState({
//     name: '',
//     createdAt: '',
//     dueDate: '',
//     tags: [],
//     description: '',
//     tasks: [],
//     assignees: [],
//   });
//   const [expandedTasks, setExpandedTasks] = useState({});

//   const handleProjectChange = (field, value) =>
//     setProject(prev => ({ ...prev, [field]: value }));

//   const addTask = () => {
//     setProject(prev => ({
//       ...prev,
//       tasks: [...prev.tasks, { name: '', description: '', subtasks: [] }]
//     }));
//   };

//   const addSubtask = (taskIndex) => {
//     const tasks = [...project.tasks];
//     tasks[taskIndex].subtasks.push({ name: '', description: '' });
//     setProject(prev => ({ ...prev, tasks }));
//   };

//   const handleTaskChange = (taskIndex, field, value, subIndex = null) => {
//     const tasks = [...project.tasks];
//     if (subIndex !== null) tasks[taskIndex].subtasks[subIndex][field] = value;
//     else tasks[taskIndex][field] = value;
//     setProject(prev => ({ ...prev, tasks }));
//   };

//   const toggleTask = (index) => {
//     setExpandedTasks(prev => ({ ...prev, [index]: !prev[index] }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Project:", project);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center  p-6">
//       <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">

//         {/* Stage Header */}
//         <div className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
//           <h2 className="text-2xl font-bold">Create Project</h2>
//           <span className="font-medium">Stage {currentStage}/3</span>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 space-y-8">

//           {/* Stage 1: Project Details */}
//           {currentStage === 1 && (
//             <div className="space-y-4">
//               <div>
//                 <label className="font-semibold text-gray-700">Project Name</label>
//                 <input
//                   type="text"
//                   value={project.name}
//                   onChange={(e) => handleProjectChange('name', e.target.value)}
//                   className="w-full px-4 py-2 mt-1 rounded-md bg-[#f7f7f7] border focus:ring-2 focus:ring-blue-400 transition"
//                   placeholder="Enter project name"
//                 />
//               </div>

//               <div>
//                 <label className="font-semibold text-gray-700">Description</label>
//                 <textarea
//                   value={project.description}
//                   onChange={(e) => handleProjectChange('description', e.target.value)}
//                   className="w-full px-4 py-3 mt-1 rounded-md bg-[#f7f7f7] border focus:ring-2 focus:ring-blue-400 transition h-28 resize-none"
//                   placeholder="Project description..."
//                 />
//               </div>

//               <div className="flex gap-4 flex-wrap">
//                 <div className="flex-1">
//                   <label className="font-semibold text-gray-700">Created At</label>
//                   <input
//                     type="datetime-local"
//                     value={project.createdAt}
//                     onChange={(e) => handleProjectChange('createdAt', e.target.value)}
//                     className="w-full px-4 py-2 mt-1 rounded-md bg-[#f7f7f7] border focus:ring-2 focus:ring-blue-400 transition"
//                   />
//                 </div>

//                 <div className="flex-1">
//                   <label className="font-semibold text-gray-700">Due Date</label>
//                   <input
//                     type="date"
//                     value={project.dueDate}
//                     onChange={(e) => handleProjectChange('dueDate', e.target.value)}
//                     className="w-full px-4 py-2 mt-1 rounded-md bg-[#f7f7f7] border focus:ring-2 focus:ring-blue-400 transition"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="font-semibold text-gray-700">Tags</label>
//                 <input
//                   type="text"
//                   value={project.tags.join(', ')}
//                   onChange={(e) => handleProjectChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
//                   placeholder="e.g., React, Dashboard"
//                   className="w-full px-4 py-2 mt-1 rounded-md bg-[#f7f7f7] border focus:ring-2 focus:ring-blue-400 transition"
//                 />
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setCurrentStage(2)}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-2xl shadow hover:from-blue-600 hover:to-indigo-700 transition"
//               >
//                 Next: Tasks
//               </button>
//             </div>
//           )}

//           {/* Stage 2: Tasks & Subtasks */}
//           {currentStage === 2 && (
//             <div className="space-y-4">
//               {project.tasks.map((task, index) => (
//                 <div key={index} className="border rounded-2xl shadow p-4 bg-white">
//                   <div
//                     className="flex justify-between items-center cursor-pointer"
//                     onClick={() => toggleTask(index)}
//                   >
//                     <h4 className="font-semibold text-lg">{task.name || 'New Task'}</h4>
//                     <span>{expandedTasks[index] ? '−' : '+'}</span>
//                   </div>

//                   {expandedTasks[index] && (
//                     <div className="mt-4 space-y-3">
//                       <input
//                         type="text"
//                         placeholder="Task Name"
//                         value={task.name}
//                         onChange={(e) => handleTaskChange(index, 'name', e.target.value)}
//                         className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 transition"
//                       />
//                       <textarea
//                         placeholder="Task description"
//                         value={task.description}
//                         onChange={(e) => handleTaskChange(index, 'description', e.target.value)}
//                         className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 transition h-20 resize-none"
//                       />

//                       {/* Subtasks */}
//                       <div className="ml-4 space-y-2">
//                         {task.subtasks.map((sub, sIndex) => (
//                           <div key={sIndex} className="border rounded-lg p-2 bg-gray-50">
//                             <input
//                               type="text"
//                               placeholder="Subtask Name"
//                               value={sub.name}
//                               onChange={(e) => handleTaskChange(index, 'name', e.target.value, sIndex)}
//                               className="w-full px-2 py-1 border rounded focus:ring-2 focus:ring-blue-200 transition"
//                             />
//                             <textarea
//                               placeholder="Subtask description"
//                               value={sub.description}
//                               onChange={(e) => handleTaskChange(index, 'description', e.target.value, sIndex)}
//                               className="w-full px-2 py-1 border rounded focus:ring-2 focus:ring-blue-200 transition h-16 resize-none"
//                             />
//                           </div>
//                         ))}
//                         <button
//                           type="button"
//                           onClick={() => addSubtask(index)}
//                           className="text-blue-600 hover:underline font-medium"
//                         >
//                           + Add Subtask
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={addTask}
//                 className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md bg-[#f7f7f7] shadow hover:bg-blue-700 transition"
//               >
//                 + Add Task
//               </button>

//               <div className="flex justify-between mt-4">
//                 <button
//                   type="button"
//                   onClick={() => setCurrentStage(1)}
//                   className="px-4 py-2 border rounded-md bg-[#f7f7f7] font-semibold hover:bg-gray-100 transition"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setCurrentStage(3)}
//                   className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-2xl shadow hover:from-blue-600 hover:to-indigo-700 transition"
//                 >
//                   Next: Assign
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Stage 3: Assign */}
//           {currentStage === 3 && (
//             <div className="space-y-4">
//               <label className="font-semibold text-gray-700">Assignees</label>
//               <Select
//                 isMulti
//                 options={assigneeOptions}
//                 value={project.assignees}
//                 onChange={(selected) => handleProjectChange('assignees', selected)}
//                 className="react-select-container"
//                 classNamePrefix="react-select"
//               />

//               {/* Show details for selected */}
//               <div className="mt-4 space-y-3">
//                 {project.assignees.map((assignee) => (
//                   <div key={assignee.value} className="flex items-center gap-4 border rounded-lg p-3 bg-white shadow hover:shadow-md transition">
//                     <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">
//                       {assignee.label.charAt(0)}
//                     </div>
//                     <div>
//                       <p className="font-semibold">{assignee.label}</p>
//                       <p className="text-gray-500 text-sm">{assignee.role}</p>
//                       <p className="text-gray-400 text-xs">{assignee.email}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex justify-between mt-4">
//                 <button
//                   type="button"
//                   onClick={() => setCurrentStage(2)}
//                   className="px-4 py-2 border rounded-md bg-[#f7f7f7] font-semibold hover:bg-gray-100 transition"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-2xl shadow hover:from-blue-600 hover:to-indigo-700 transition"
//                 >
//                   Submit Project
//                 </button>
//               </div>
//             </div>
//           )}

//         </form>
//       </div>
//     </div>
//   );
// }












import React, { useState } from "react";
import Select from "react-select";

const assigneeOptions = [
    { value: 'user1', label: 'Talan Korsgaard', email: 'talan@example.com', role: 'Developer' },
    { value: 'user2', label: 'Hanna Philips', email: 'hanna@example.com', role: 'Designer' },
    { value: 'user3', label: 'Davis Donin', email: 'davis@example.com', role: 'Project Manager' },
];

const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

export default function ProjectDashboardPage() {
    const [currentStage, setCurrentStage] = useState(1);

    const [expandedSubtasks, setExpandedSubtasks] = useState({});

    const toggleSubtask = (taskIndex, subIndex) => {
        setExpandedSubtasks((prev) => ({
            ...prev,
            [taskIndex]: {
                ...prev[taskIndex],
                [subIndex]: !prev[taskIndex]?.[subIndex],
            },
        }));
    };

    const deleteTask = (taskIndex) => {
        const updatedTasks = [...project.tasks];
        updatedTasks.splice(taskIndex, 1);
        setProject({ ...project, tasks: updatedTasks });

        // Optionally remove expanded state
        setExpandedTasks((prev) => {
            const copy = { ...prev };
            delete copy[taskIndex];
            return copy;
        });
    };

    const deleteSubtask = (taskIndex, subIndex) => {
        const updatedTasks = [...project.tasks];
        updatedTasks[taskIndex].subtasks.splice(subIndex, 1);
        setProject({ ...project, tasks: updatedTasks });

        // Optionally remove expanded state
        setExpandedSubtasks((prev) => {
            const copy = { ...prev };
            if (copy[taskIndex]) {
                delete copy[taskIndex][subIndex];
            }
            return copy;
        });
    };


    const [project, setProject] = useState({
        name: '',
        createdAt: { date: '', hour: '00', minute: '00' },
        dueDate: { date: '', hour: '00', minute: '00' },
        tags: [],
        description: '',
        tasks: [],
        assignees: [],
    });
    const [expandedTasks, setExpandedTasks] = useState({});

    const handleProjectChange = (field, value) =>
        setProject(prev => ({ ...prev, [field]: value }));

    const addTask = () => {
        setProject(prev => ({
            ...prev,
            tasks: [...prev.tasks, { name: '', description: '', subtasks: [] }]
        }));
    };

    const addSubtask = (taskIndex) => {
        const tasks = [...project.tasks];
        tasks[taskIndex].subtasks.push({ name: '', description: '' });
        setProject(prev => ({ ...prev, tasks }));
    };

    const handleTaskChange = (taskIndex, field, value, subIndex = null) => {
        const tasks = [...project.tasks];
        if (subIndex !== null) tasks[taskIndex].subtasks[subIndex][field] = value;
        else tasks[taskIndex][field] = value;
        setProject(prev => ({ ...prev, tasks }));
    };

    const toggleTask = (index) => {
        setExpandedTasks(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Project Data:", project);
        alert("Project submitted! Check console for output.");
    };


    return (
        <div className="min-h-screen flex justify-center items-center ">
            <div className="w-full max-w-[1330px] bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

                {/* Left Panel */}
                <div className="flex-1 p-10 space-y-8 bg-white">
                    {/* Stage Indicators */}
                    <div className="flex gap-6 mb-6">
                        {['Project Info', 'Tasks', 'Assign Users'].map((stage, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-white
                  ${currentStage === i + 1 ? 'bg-blue-600' : 'bg-gray-300'}`}>
                                    {i + 1}
                                </div>
                                <span className={`font-semibold ${currentStage === i + 1 ? 'text-blue-600' : 'text-gray-500'}`}>
                                    {stage}
                                </span>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Stage 1 */}
                        {currentStage === 1 && (
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Project Name"
                                    value={project.name}
                                    onChange={(e) => handleProjectChange('name', e.target.value)}
                                    className="input input-bordered w-full rounded-md bg-[#f7f7f7]"
                                />
                                <textarea
                                    placeholder="Project description..."
                                    value={project.description}
                                    onChange={(e) => handleProjectChange('description', e.target.value)}
                                    className="textarea textarea-bordered w-full rounded-md bg-[#f7f7f7] h-28"
                                />

                                {/* Date & Time */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['Created At', 'Due Date'].map((label, idx) => {
                                        const dateObj = idx === 0 ? project.createdAt : project.dueDate;
                                        const field = idx === 0 ? 'createdAt' : 'dueDate';
                                        return (
                                            <div key={label}>
                                                <label className="label"><span className="label-">{label}</span></label>
                                                <div className="flex gap-2 items-center">
                                                    <input
                                                        type="date"
                                                        value={dateObj.date}
                                                        onChange={(e) => handleProjectChange(field, { ...dateObj, date: e.target.value })}
                                                        className="input input-bordered rounded-md bg-[#f7f7f7] flex-1"
                                                    />
                                                    <select
                                                        value={dateObj.hour}
                                                        onChange={(e) => handleProjectChange(field, { ...dateObj, hour: e.target.value })}
                                                        className="select select-bordered w-20 bg-[#f7f7f7]"
                                                    >
                                                        {hours.map(h => <option key={h}>{h}</option>)}
                                                    </select>
                                                    <select
                                                        value={dateObj.minute}
                                                        onChange={(e) => handleProjectChange(field, { ...dateObj, minute: e.target.value })}
                                                        className="select select-bordered w-20 bg-[#f7f7f7]"
                                                    >
                                                        {minutes.map(m => <option key={m}>{m}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <input
                                    type="text"
                                    placeholder="Tags (comma separated)"
                                    value={project.tags.join(', ')}
                                    onChange={(e) => handleProjectChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
                                    className="input input-bordered w-full rounded-md bg-[#f7f7f7]"
                                />

                                <button
                                    type="button"
                                    onClick={() => setCurrentStage(2)}
                                    className="btn btn-primary btn-wide mt-4"
                                >
                                    Next: Tasks
                                </button>
                            </div>
                        )}

                        {/* Stage 2 */}
                        {/* {currentStage === 2 && (
                            <div className="space-y-4 ">
                                {project.tasks.map((task, index) => (
                                    <div key={index} className="border-2 border-[#f7f7f7]  rounded-md bg-white p-4 bg-base-100 cursor-pointer">
                                        <div className="flex justify-between items-center" onClick={() => toggleTask(index)}>
                                            <h4 className="font-semibold">{task.name || 'New Task'}</h4>
                                            <span>{expandedTasks[index] ? '−' : '+'}</span>
                                        </div>

                                        {expandedTasks[index] && (
                                            <div className="mt-3 space-y-3">
                                                <input
                                                    type="text"
                                                    placeholder="Task Name"
                                                    value={task.name}
                                                    onChange={(e) => handleTaskChange(index, 'name', e.target.value)}
                                                    className="input input-bordered w-full bg-[#f7f7f7]"
                                                />
                                                <textarea
                                                    placeholder="Task description"
                                                    value={task.description}
                                                    onChange={(e) => handleTaskChange(index, 'description', e.target.value)}
                                                    className="textarea textarea-bordered w-full h-20 bg-[#f7f7f7]"
                                                />

                                                <div className="ml-4 space-y-2">
                                                    {task.subtasks.map((sub, sIndex) => (
                                                        <div key={sIndex} className="border-2 border-[#dfdfdf] rounded p-2 bg-base-200 bg-white w-full">
                                                            <input
                                                                type="text"
                                                                placeholder="Subtask Name"
                                                                value={sub.name}
                                                                onChange={(e) => handleTaskChange(index, 'name', e.target.value, sIndex)}
                                                                className="input input-bordered w-full bg-[#f7f7f7] mb-2"
                                                            />
                                                            <textarea
                                                                placeholder="STubtask description"
                                                                value={sub.description}
                                                                onChange={(e) => handleTaskChange(index, 'description', e.target.value, sIndex)}
                                                                className="textarea textarea-bordered w-full h-16 bg-[#f7f7f7]"
                                                            />
                                                        </div>
                                                    ))}
                                                    <button
                                                        type="button"
                                                        onClick={() => addSubtask(index)}
                                                        className="btn btn-link"
                                                    >
                                                        + Add Subtask
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <button type="button" onClick={addTask} className="btn btn-primary">
                                    + Add Task
                                </button>

                                <div className="flex justify-between mt-4">
                                    <button type="button" onClick={() => setCurrentStage(1)} className="btn btn-outline">Back</button>
                                    <button type="button" onClick={() => setCurrentStage(3)} className="btn btn-primary">Next: Assign</button>
                                </div>
                            </div>
                        )} */}



                        {currentStage === 2 && (
                            <div className="space-y-4 max-h-[500px] overflow-y-auto">
                                {project.tasks.map((task, index) => (
                                    <div
                                        key={index}
                                        className="border-2 border-[#f7f7f7] rounded-md bg-white p-4 cursor-pointer"
                                    >
                                        {/* Task Header */}
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2 cursor-pointer" onClick={() => toggleTask(index)}>
                                                <h4 className="font-semibold">{task.name || 'New Task'}</h4>
                                                <span>{expandedTasks[index] ? '−' : '+'}</span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => deleteTask(index)}
                                                className="btn btn-sm btn-error"
                                            >
                                                Delete
                                            </button>
                                        </div>

                                        {/* Task Details */}
                                        {expandedTasks[index] && (
                                            <div className="mt-3 space-y-3">
                                                <input
                                                    type="text"
                                                    placeholder="Task Name"
                                                    value={task.name}
                                                    onChange={(e) => handleTaskChange(index, 'name', e.target.value)}
                                                    className="input input-bordered w-full bg-[#f7f7f7]"
                                                />
                                                <textarea
                                                    placeholder="Task description"
                                                    value={task.description}
                                                    onChange={(e) => handleTaskChange(index, 'description', e.target.value)}
                                                    className="textarea textarea-bordered w-full h-20 bg-[#f7f7f7]"
                                                />

                                                {/* Subtasks */}
                                                <div className="ml-4 space-y-2">
                                                    {task.subtasks.map((sub, sIndex) => (
                                                        <div
                                                            key={sIndex}
                                                            className="border-2 border-[#dfdfdf] rounded p-2 bg-white w-full"
                                                        >
                                                            <div className="flex justify-between items-center">
                                                                <div
                                                                    className="flex items-center gap-2 cursor-pointer"
                                                                    onClick={() => toggleSubtask(index, sIndex)}
                                                                >
                                                                    <span>{sub.name || 'New Subtask'}</span>
                                                                    <span>{expandedSubtasks[index]?.[sIndex] ? '−' : '+'}</span>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => deleteSubtask(index, sIndex)}
                                                                    className="btn btn-xs btn-error"
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>

                                                            {expandedSubtasks[index]?.[sIndex] && (
                                                                <div className="mt-2 space-y-2">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Subtask Name"
                                                                        value={sub.name}
                                                                        onChange={(e) =>
                                                                            handleTaskChange(index, 'name', e.target.value, sIndex)
                                                                        }
                                                                        className="input input-bordered w-full bg-[#f7f7f7]"
                                                                    />
                                                                    <textarea
                                                                        placeholder="Subtask description"
                                                                        value={sub.description}
                                                                        onChange={(e) =>
                                                                            handleTaskChange(index, 'description', e.target.value, sIndex)
                                                                        }
                                                                        className="textarea textarea-bordered w-full h-16 bg-[#f7f7f7]"
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}

                                                    <button
                                                        type="button"
                                                        onClick={() => addSubtask(index)}
                                                        className="btn btn-link"
                                                    >
                                                        + Add Subtask
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <button type="button" onClick={addTask} className="btn btn-primary">
                                    + Add Task
                                </button>

                                <div className="flex justify-between mt-4">
                                    <button type="button" onClick={() => setCurrentStage(1)} className="btn btn-outline">
                                        Back
                                    </button>
                                    <button type="button" onClick={() => setCurrentStage(3)} className="btn btn-primary">
                                        Next: Assign
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Stage 3 */}
                        {currentStage === 3 && (
                            <div className="space-y-4">
                                <Select
                                    isMulti
                                    options={assigneeOptions}
                                    value={project.assignees}
                                    onChange={(selected) => handleProjectChange('assignees', selected)}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    placeholder="Select assignees..."
                                />

                                <div className="space-y-3 mt-4">
                                    {project.assignees.map((assignee) => (
                                        <div key={assignee.value} className="flex text-left items-center gap-4 border-2 border-[#f7f7f7] rounded-lg p-3 shadow bg-[#f7f7f79d] ">
                                            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">
                                                {assignee.label.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold">{assignee.label}</p>
                                                <p className="text-gray-500 text-sm">{assignee.role}</p>
                                                <p className="text-gray-400 text-xs">{assignee.email}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button type="button" onClick={() => setCurrentStage(2)} className="btn btn-outline">Back</button>
                                    <button type="submit" className="btn btn-primary">Submit Project</button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>

                {/* Right Panel */}
                <div className="hidden md:flex flex-col flex-1 bg-purple-50 p-10 justify-center items-center">
                    <h3 className="text-xl font-semibold mb-4">About Project</h3>
                    <p className="text-gray-500 mb-6 text-center">
                        Fill out project details, tasks, and assignees to get started.
                    </p>
                    <img
                        src="/project-illustration.png"
                        alt="Project Illustration"
                        className="w-64 h-64"
                    />
                </div>

            </div>
        </div>
    );
}