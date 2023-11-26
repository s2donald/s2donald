import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  typescript,
  aws,
  html,
  css,
  reactjs,
  redux,
  langchain,
  python,
  pandas,
  tailwind,
  nodejs,
  postgres,
  git,
  pytorch,
  docker,
  aviva,
  deloitte,
  echelon,
  ia,
  manulife,
  carrent,
  jobit,
  tripguide,
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
    title: "Software / Machine Learning Engineer",
    icon: web,
  },
  {
    title: "Artificial Intelligence Enthusiast",
    icon: mobile,
  },
  {
    title: "AWS Solutions Architech ",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Javascript",
    icon: javascript,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Software/Machine Learning Engineer",
    company_name: "Aviva",
    icon: aviva,
    iconBg: "#383E56",
    date: "May 2021 - Present",
    points: [
      "Designed a common LLM module that parses diverse data sources (Postgres, Hadoop, CSV, and Confluence Pages) using Hugging Face API, llama2 models, and LangChain.",
      "Implemented the common LLM module to allow Aviva’s ML programs, enabling them to comprehend and answer questions based on the information from the various resources.",
      "Delevoped an on-premise data feed module using Python, Pandas and SQLAlchemy as a data management solution. The module facilitates consistent extraction and loading of data from diverse sources across different projects.",
      "Successfully migrated on-premise data stored in Remote Servers, Hadoop and Postgres to the AWS ecosystem using a variety of AWS tools such as DataSync, Snowball, Direct Connect, etc, ensuring seemless data transition with zero loss, boosting system efficiency by 35%.",
      "Converted projects using the Luigi python package for data preprocessing to Apache Airflow so that it can be used in the AWS Ecosystem in tools such as AWS EMR and AWS Glue.",
    ],
  },
  {
    title: "Actuarial Coop",
    company_name: "Echelon Insurance",
    icon: echelon,
    iconBg: "#E6DEDD",
    date: "September 2020 - December 2020",
    points: [
      "Developed a Python program that works with Co-Parison tool to generate multiple vehicle insurance quote breakdown’s for multiple insurance carriers in both commercial and private passenger vehicle applications.",
      "Reverse engineered rate group, driving record and other differentials of Echelon Insurance’s competitors to compare rate relativity’s using Python.",
      "Retrieved policy information based on specific criteria using SQL with SAS EG 8.2 to determine which existing policy’s will be included in the updated rate groups.",
      "Assisted with the migration testing from SAS EG 8.1 to SAS EG 8.2 and developed documentation for the team to understand the key differences between the updates.",
    ],
  },
  {
    title: "Actuarial Analyst Coop",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#383E56",
    date: "January 2020 - April 2020",
    points: [
      "Assisted with actuarial audit tasks related to Basis Change, Year End Recomputation and Model Risk Assessments using tools such as Moody’s AXIS and Excel VBA.",
      "Explained actuarial concepts to Deloitte’s senior managers to aid with verifying client provided documents against the LICAT 2019 guidelines.",
    ],
  },
  {
    title: "Investment Associate Coop",
    company_name: "IA Insurance Financial Group",
    icon: ia,
    iconBg: "#E6DEDD",
    date: "May 2019 - September 2019",
    points: [
      "Created Python scripts to automatically download large amounts of data from Bloomberg and created graphs based on the downloaded data using BQuant and R.",
      "Developed excel macros to automate the firms monthly and quarterly investment reporting process using Excel VBA, Bloomberg’s Excel API and Thomson Reuters Eikon’s Excel API.",
    ],
  },
  {
    title: "Data Engineer Coop",
    company_name: "Manulife",
    icon: manulife,
    iconBg: "#383E56",
    date: "January 2018 - April 2018",
    points: [
      "Reduced query time by up to 70% by implementing LLAP in Apache Hive.",
      "Created and manipulated over 1 million rows of raw data for testing purposes using SQL, Python, Spark, Scala and visualized the data using Tableau, R and Excel.",
      "Participated in code reviews and developed a firm understanding of CI/CD from constructive feedback from other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Amazon Web Clone",
    description:
      "A side project where the purpose is to build out a marketplace that looks like Amazon using ReactJS for the FrontEnd and Django for the Backend.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SQLLite",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/s2donald/Amazon_Clone",
  },
  {
    name: "Vockal AI",
    description:
      "A Speech to Speech LLM based Python Program that handles the recording, playback and listening of audio. The recorded audio is then transcribed for the user. This translated text is fed to the LLM Model as a Prompt to generate speech.",
    tags: [
      {
        name: "LangChain",
        color: "blue-text-gradient",
      },
      {
        name: "PyAudio",
        color: "green-text-gradient",
      },
      {
        name: "HuggingFace",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/s2donald/vockal",
  },
  {
    name: "BookMe",
    description:
      "A personal care services booking platform that allows users to book haircuts, nail, and lash services, and offers text confirmation and reminders for upcoming appointments.",
    tags: [
      {
        name: "Postgres",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/s2donald/BookMe",
  },
];

export { services, technologies, experiences, testimonials, projects };
