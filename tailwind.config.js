/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: ["class"],
    theme: {
        extend: {
            colors: {
                primary: "#0079ff",
                primaryhover: "#60abff",
                LighttxtHighContrast: "#2b3442",
                LighttxtMidContrast: "#4b6a9b",
                LighttxtLowContrast: "#697c9a",
                Lighttxtsearch: "#222731",
                LighttxtSearchPlaceholder: "#4b6a9b",
                Lightbg: "#f6f8ff",
                LightbgSecondary: "#fefefe",
                LightthemeswitchBtnHover: "#222731",
                Lighterror: "#f74646",
                primary: "#0079ff",
                primaryhover: "#60abff",
                darktxtHighContrast: "#fff",
                darktxtMidContrast: "#ffff",
                darktxtLowContrast: "#fff",
                darktxtsearch: "#fff",
                darktxtSearchPlaceholder: "#fff",
                darkbg: "#141d2f",
                darkbgSecondary: "#1e2a47",
                darkthemeswitchBtnHover: "#90a4d4",
                darkerror: "#f74646",
                darkgray: "#8e94a3",
            },
            fontFamily: {
                mainfont: "'Space Mono', monospace",
            },
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            boxShadow: {
                "custom-321": "-4px 16px 52px 0px rgba(70, 96, 187, 0.2)",
            },
        },
    },
    plugins: [],
};
