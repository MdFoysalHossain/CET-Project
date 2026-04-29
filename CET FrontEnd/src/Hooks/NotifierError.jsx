import { useEffect } from 'react';
import Swal from 'sweetalert2';

const useNotifierError = (header, details) => {
    useEffect(() => {
        if (!header && !details) return;

        Swal.fire({
            html: `
                <div class="flex flex-col items-center text-center w-full">

                    <div class="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/10 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            class="w-6 h-6 text-red-500" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>

                    <h2 class="text-xl font-semibold text-gray-800 font-rubik">
                        ${header}
                    </h2>

                    <p class="text-sm text-gray-500 font-jukarta mt-2 max-w-[280px]">
                        ${details}
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
    }, [header, details]);

    return null; // nothing to render
};

export default useNotifierError;