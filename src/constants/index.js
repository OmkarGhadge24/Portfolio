const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Dec 2024",
        title: "Movies Database App - Discover Movies & TV Shows in Real-time",
        image: "/images/movies-app.png",
        link: "https://movies-database-app.vercel.app/",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["HTML", "JavaScript", "React.js", "TypeScript"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js"],
    },
    {
        category: "Database",
        items: ["MongoDB"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Postman", "Jest"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/OmkarGhadge24/",
    },
    {
        id: 2,
        text: "Portfolio",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://refokus-work-page.netlify.app/",
    },
    {
        id: 3,
        text: "LeetCode",
        icon: "/icons/leetcode.svg",
        bg: "#ff866b",
        link: "https://leetcode.com/u/Omkar2454/",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://linkedin.com/in/omkar-ghadge-996b80317/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/omkar1.jpg",
    }
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1 – Movies Database App
        {
            id: 5,
            name: "Movies Database App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[5vh] left-[78vw]",
            children: [
                {
                    id: 1,
                    name: "Movies App.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A Movies & TV Show discovery platform built using React.js and Tailwind CSS.",
                        "Features real-time data fetching from The Movie Database (TMDB) API, with search, filter and detailed views of movies and shows.",
                        "Responsive design with a streaming-style interface for desktop and mobile.",
                    ],
                },
                {
                    id: 2,
                    name: "movies-database-app.vercel.app",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://movies-database-app.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 3,
                    name: "movies-app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/movies-app.png",
                },
            ],
        },

        // ▶ Project 2 – Toolify
        {
            id: 6,
            name: "Toolify - Advanced Utility Tools Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-[70vw]",
            children: [
                {
                    id: 1,
                    name: "Toolify Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Toolify is a comprehensive web-based platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) offering multiple essential file-processing tools in one place.",
                        "Includes Background Remover, File Converter, Text Extractor (OCR), Video Editor / Video-to-Audio, PDF Editor & more.",
                        "Backend uses Express + MongoDB + APIs (Remove.bg, ConvertAPI, Ninja OCR) and frontend is built using React + Tailwind CSS.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com/toolify",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/OmkarGhadge24/toolify",
                    position: "top-10 right-80",
                },
                {
                    id: 3,
                    name: "toolify.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/toolify.png",
                },
            ],
        },

        // ▶ Project 3 – URL Shortener
        {
            id: 7,
            name: "URL Shortener",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[35vh] left-[82vw]",
            children: [
                {
                    id: 1,
                    name: "URL Shortener Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "URL Shortener is a lightweight application built to shorten, track and manage URLs efficiently.",
                        "Users can create shortened URLs, access analytics, and optionally manage custom aliases.",
                        "Built using Node.js and Express on the backend, with a React frontend for the user interface.",
                    ],
                },
                {
                    id: 2,
                    name: "github.com/url-shortener",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/OmkarGhadge24/url-shortener",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "url-shortener.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/url-shortener.png",
                },
            ],
        },
    ],
};


const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/omkar1.jpg",
        },
        {
            id: 2,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-75",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/omkar1.jpg",
            description: [
                "Hey! I'm Omkar 👋, a passionate Full Stack Web Developer who enjoys turning ideas into functional and visually clean web applications.",
                "I mainly work with the MERN stack (MongoDB, Express.js, React.js, Node.js), and I love building projects that are practical, scalable, and performance focused.",
                "I enjoy working with real-world problems and converting them into modern UI/UX-focused applications like Toolify, URL Shortener, and Movies Database App.",
                "Apart from coding, you'll find me exploring new tools, improving my skills, solving problems on LeetCode, or experimenting with design and animations using GSAP.",
            ],
        },
    ],
};


const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "OMKAR GHADGE.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };