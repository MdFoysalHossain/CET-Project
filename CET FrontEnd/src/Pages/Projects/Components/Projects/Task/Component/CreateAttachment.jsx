import { useState, useRef, useContext } from "react";
import { AuthContext } from "../../../../../../Context/AccountProvidor";
import { SettingsContext } from "../../../../../../Context/SettingsProvidor";
import Swal from "sweetalert2";

export default function CreateAttachment({
    setShowAttachment: setOpen,
    setAttachment,
    showAttachment,
    selectedTask,
    setAttachUpdated
}) {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(null);
    const [link, setLink] = useState("");
    const [attachmentName, setAttachmentName] = useState("");
    const [loading, setLoading] = useState(false);

    const { accountDetails } = useContext(AuthContext)
    const { backEndUrl } = useContext(SettingsContext)


    const fileInputRef = useRef(null);

    if (!showAttachment) return null;

    // 📁 Handle file
    const handleFile = (selectedFile) => {
        if (!selectedFile || link) return; // ❌ block if link exists
        setFile(selectedFile);
        setAttachmentName(selectedFile.name);
    };

    // ❌ Remove file
    const removeFile = () => {
        setFile(null);
        setAttachmentName("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // 🎯 Drag events
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (link) return; // ❌ disable drag if link exists

        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (link) return; // ❌ block drop

        setDragActive(false);
        const droppedFile = e.dataTransfer.files[0];
        handleFile(droppedFile);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // 🔥 Upload to ImageBB
    const uploadToImageBB = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch(
            `https://api.imgbb.com/1/upload?key=194c5ed032d578ad93a0bc6cf9e2a96f`,
            {
                method: "POST",
                body: formData
            }
        );

        const data = await res.json();
        setAttachUpdated(true)
        return data.data.url;
    };

    // ✅ Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file && !link) return;

        setLoading(true);

        try {
            let finalData;

            if (file) {
                const uploadedUrl = await uploadToImageBB(file);

                finalData = {
                    name: attachmentName || file.name,
                    type: "image",
                    link: uploadedUrl,
                    attachedBy: accountDetails.email,
                    attachedAt: new Date().toISOString(),
                };
            } else {
                finalData = {
                    name: attachmentName || link,
                    type: "link",
                    link: link,
                    attachedBy: accountDetails.email,
                    attachedAt: new Date().toISOString(),
                };
            }

            const token = await accountDetails.getIdToken();

            await fetch(`${backEndUrl}/tasks/${selectedTask._id}/attachments?email=${accountDetails.email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(finalData)
            });

            setAttachment(prev => [...prev, finalData]);
            handleClose();
            setOpen(false);

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
                                        Project Created!
                                    </h2>
            
                                    <!-- Text -->
                                    <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                                        Project created successfully.
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

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
            
        }
    };

    return (
        <div
            onClick={handleClose}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative"
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-semibold mb-6">
                    Add Attachment
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name */}
                    <input
                        value={attachmentName}
                        onChange={(e) => setAttachmentName(e.target.value)}
                        placeholder="Attachment name"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100"
                    />

                    {/* Drag & Drop */}
                    <div
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        className={`p-6 border-2 border-dashed rounded-xl text-center
                        ${link ? "opacity-50 cursor-not-allowed" : ""}
                        ${dragActive ? "border-blue-500" : "border-gray-300"}`}
                    >
                        {!file ? (
                            <>
                                <p>Drag & drop file</p>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    disabled={!!link}
                                    className="hidden"
                                    id="fileUpload"
                                    onChange={(e) =>
                                        handleFile(e.target.files[0])
                                    }
                                />

                                <label
                                    htmlFor="fileUpload"
                                    className={`mt-3 inline-block px-4 py-2 rounded-lg
                                    ${link
                                            ? "bg-gray-300 cursor-not-allowed"
                                            : "bg-gray-200 cursor-pointer"
                                        }`}
                                >
                                    Choose File
                                </label>
                            </>
                        ) : (
                            <div className="flex justify-between">
                                <span>{file.name}</span>
                                <button type="button" onClick={removeFile}>
                                    ✕
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Link */}
                    <input
                        type="text"
                        value={link}
                        disabled={!!file}
                        onChange={(e) => {
                            if (file) return;
                            setLink(e.target.value);
                        }}
                        placeholder="Paste link"
                        className={`w-full px-4 py-3 rounded-lg bg-gray-100
                        ${file ? "opacity-50 cursor-not-allowed" : ""}`}
                    />

                    {/* Buttons */}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="px-5 py-2 bg-gray-200 rounded-lg"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading || (!file && !link)}
                            className="px-6 py-2 bg-indigo-500 text-white rounded-lg disabled:opacity-50"
                        >
                            {loading ? "Uploading..." : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}