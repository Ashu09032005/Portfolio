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
    Ngo,
    next_word,
    dataranker,
    tracksafe,
    fire
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
  "Performed data preprocessing on educational defect datasets containing Test IDs, defect statuses, and pass/fail outcomes as features.",
  "Conducted data cleaning and calculated outcome probabilities to prepare the dataset for model training.",
  "Trained Logistic Regression and Gradient Boosting models to classify student performance into 5 ranks based on feature analysis.",
  "Developed a Flask-based web interface to display predicted ranks in tabular format along with test IDs.",
  "Compared model outputs by calculating count differences across predicted ranks and visualizing the distribution of ranks for each algorithm."
]

    },


];


const projects = [
    {
        name: "Spread of Forest Fire Prediction",
        description:
            "Python, Scikit-learn, Pandas, and Folium used for building and visualizing predictive ML models.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Flask",
                color: "green-text-gradient",
            },
            {
                name: "Scikit-learn",
                color: "pink-text-gradient",
            },
        ],
        image: fire,
        source_code_link: "https://github.com/Ashu09032005/fire",
    },
    {
        name: "TrackSafe",
        description:
            "TrackSafe is a real-time ML system using Gradient Boosting and SMOTE to detect railway anomalies like overspeed and signal violations via a Flask API.",
        tags: [
            {
                name: "SMOTE",
                color: "blue-text-gradient",
            },
            {
                name: "One hot encode",
                color: "green-text-gradient",
            },
            {
                name: "flask",
                color: "pink-text-gradient",
            },
        ],
        image: tracksafe,
        source_code_link: "https://github.com/Ashu09032005/TrackSafe",
    },
     {
        name: "Ngo-Connect",
        description:
            "In a world where countless people want to contribute to meaningful causes—but don’t know how or where to start—NGO Connect creates a vital link between people and purpose.",
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
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: Ngo,
        source_code_link: "https://github.com/Ashu09032005/NGO-Connect",
    },
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
        name: "Next_word_Predictor",
        description:
            "A Streamlit web app that predicts the next word in a given sentence using an LSTM model trained on Shakespeare’s Hamlet.",
        tags: [
            {
                name: "streamlit",
                color: "blue-text-gradient",
            },
            {
                name: "LSTM",
                color: "green-text-gradient",
            },
            {
                name: "Python",
                color: "pink-text-gradient",
            },
        ],
        image: next_word,
        source_code_link: "https://github.com/Ashu09032005/Next_word_prediction",
    },
          {
        name: "Data Ranker",
        description:
            "A Streamlit web app that predicts the next word in a given sentence using an LSTM model trained on Shakespeare’s Hamlet.",
        tags: [
            {
                name: "streamlit",
                color: "blue-text-gradient",
            },
            {
                name: "LSTM",
                color: "green-text-gradient",
            },
            {
                name: "Python",
                color: "pink-text-gradient",
            },
        ],
        image: dataranker,
        source_code_link: "https://github.com/Ashu09032005/DataRanker",
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