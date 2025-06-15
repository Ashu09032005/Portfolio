import {
    mobile,
    backend,

    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,

    docker,
    jurident,
    radisys,


    yelpcamp,
    Chatty,
    filtermate,
    onlymusic,
    rps,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },

    {
        name: "docker",
        icon: docker,
    },

];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Jurident",
        icon: jurident,
        iconBg: "#383E56",
        date: "March 2025 - May 2025",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality web applications.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implemented Juridents Landing Page,Support Portal and Alumini Portal Project.",
        ],
    },
    {
        title: "ML modelist",
        company_name: "Radisys",
        icon: radisys,
        iconBg: "#E6DEDD",
        date: "May 2025 - Jun 2025",
        points: [
            "Developing and maintaining machine learning models using algorithms like Logistic Regression and Gradient Boosting to analyze educational data.",
            "Collaborating with cross-functional teams including data analysts, product managers, and developers to deliver predictive solutions for student performance.",
            "Generating probabilities of pass/fail outcomes and assigning performance ranks based on key input features.",
            "Implementing the predictive system using the Flask framework with a user-friendly web interface for real-time evaluation and insights."
        ],
    },


];


const projects = [
    {
        name: "YelpCamp",
        description:
            "A full-stack web application where users can create, view, and review campgrounds. It includes authentication, image uploads, geolocation using Maptiler, and server-rendered pages with EJS.",
        tags: [
            {
                name: "EJS",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: yelpcamp,
        source_code_link: "https://github.com/Ashu09032005/YelpCamp",
    },
    {
        name: "Chatty",
        description:
            "A real-time chat application that allows users to create chat rooms and exchange messages instantly. Built with React on the frontend and connected to a backend API for message handling.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: Chatty,
        source_code_link: "https://github.com/Ashu09032005/Chat-app",
    },
    {
        name: "FilterMate",
        description:
            "A smart Excel-based filtering tool that lets users upload spreadsheets and apply filters based on time.This is classic VIT exit system time recordings to find the defaulters exceeding outing timings",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "xlsx",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: filtermate,
        source_code_link: "https://github.com/Ashu09032005/FilterMate",
    },
    {
        name: "OnlyMusic",
        description:
            "A sleek music streaming frontend interface that lets users explore and play their favorite songs. Built using HTML, CSS, and JavaScript with a responsive and modern design.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JS",
                color: "pink-text-gradient",
            },
        ],
        image: onlymusic,
        source_code_link: "https://github.com/Ashu09032005/Only-Music",
    },
    {
        name: "RPSX Game",
        description:
            "A fun and interactive browser-based Rock-Paper-Scissors game where users can play against the computer. Built with HTML, CSS, and JavaScript for quick entertainment.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JS",
                color: "pink-text-gradient",
            },
        ],
        image: rps,
        source_code_link: "https://github.com/Ashu09032005/RPSX",
    },
];


export { services, technologies, experiences, projects };