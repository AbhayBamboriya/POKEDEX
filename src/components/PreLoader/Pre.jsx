import React, { useEffect } from 'react';

const Pre = () => {
    useEffect(() => {
        const loader = document.getElementById("preloader");
        window.addEventListener("load", () => {
            loader.style.display = "none";
        });

        return () => {
            window.removeEventListener("load", () => {
                loader.style.display = "none";
            });
        };
    }, []);

    return (
        <div>
            {/* Your React app content here */}
        </div>
    );
};

export default Pre;