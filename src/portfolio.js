/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Nikhil Lohiya",
  title: "Hi, I'm Nikhil",
  subTitle: emoji(
    "Innovative and results-oriented Product Manager with 9 years of professional experience and 2 years of specialized experience in building and scaling Data & Generative AI applications. Expertise in driving the product strategy, development, and deployment of cutting-edge AI-driven solutions that solve complex problems and enhance user experiences. Proven ability to lead cross-functional teams, collaborate with engineering and data science teams, to create AI-powered products that deliver measurable business impact. Adept at navigating the rapidly evolving AI landscape, managing product lifecycles, and aligning AI innovation with customer needs and organizational goals."
  ),
  // "A passionate Business Intelligence Engineer 🚀 with 8+ years of professional experience in analyzing and developing solutions spanning database development & architecture, management and predictive analytics, forecasting, and developing interactive dashboards to steer data driven problem solving in enterprises. Expertise in handling large data sets, insights generation, output interpretation, BI automation, and advanced visualizations."
  // resumeLink: "",
  displayGreeting: true
};

// Your Social Media Link

const socialMediaLinks = {
  //  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/nikilohiya/",
  gmail: "nikilohiya@gmail.com"
  //  gitlab: "https://gitlab.com/saadpasta",
  //  facebook: "https://www.facebook.com/saad.pasta7",
  //  medium: "https://medium.com/@saadpasta",
  //  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do?",
  subTitle:
    emoji("Obssesive 'Problem 🧐 Solver'  who is consistently learning new tools and working with teams to solve them!"),
  skills: [
    emoji(
      "⚡ Expertise in defining AI product roadmaps, aligning with business objectives, and driving strategic initiatives across cross-functional teams. "
    ),
    emoji(
      "⚡ Experienced in overseeing the end-to-end lifecycle of AI products, from ideation through launch and iteration, ensuring alignment with company goals."
    ),
    emoji(
      "⚡ Experienced in collaborating with cross-functional teams to implement LLM solutions that align with business goals and improve operational efficiency. "
    ),
    emoji(
      "⚡  Adept at managing AI product backlogs, prioritizing features, and translating complex technical requirements into clear, actionable plans. "
    ),
    emoji(
      "⚡ In-depth understanding of BI best practices, including data governance, quality assurance, and maintaining scalable data pipelines. "
    )
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // AI Tools

    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fas fa-anchor"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    // Machine Learning
    {
      skillName: "Sagemaker",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Bedrock",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Amazon Q",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Langchain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "Google AI Studio",
      fontAwesomeClassname: "fab fa-google"
    },
    // Databases & Engineering
    {
      skillName: "Oracle-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Bigquery",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redshift",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Athena",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS Glue",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Alteryx",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Airflow",
      fontAwesomeClassname: "fas fa-fan"
    },

    // BI Tools
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "QuickSight",
      fontAwesomeClassname: "fas fa-chart-bar"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
  display: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Stevens  Institute of Technology",
      logo: require("./assets/images/stevensLogo.png"),
      subHeader: "Master of Science in Business Intelligence & Analytics",
      duration: "September 2017 - December 2018",
      desc: "Highlights",
      descBullets: [
        "Recepient of Provost Masters Scholarship Award 2017.",
        "Treasurer of Business Intelligence Club 2017-2018"
      ]
    },
    {
      schoolName: "MNIT Jaipur",
      logo: require("./assets/images/mnitLogo.png"),
      subHeader: "Bachelor of Technology in Electrical Engineering",
      duration: "July 2012 - April 2016",
      desc: "Highlights",
      descBullets: [
        "Mentored over 700 Students as 'Chief Mentor' in Student Mentorship Program(2015-16)",
        "Founder & 1st Chairman of Electrical Engineering Society, MNIT Jaipur(2015-16)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Strategic Thinking & Vision", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Product Lifecycle Management",
      progressPercentage: "80%"
    },
    {
      Stack: "Customer Focus",
      progressPercentage: "100%"
    },
    {
      Stack: "Gen-AI Application Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false
};

// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Business Intelligence Engineer",
      company: "AWS",
      companylogo: require("./assets/images/aws_logo.png"),
      date: "March 2021 – Present",
      desc: "Highlights:",
      descBullets: [
        "Led development of a multi-Agent platform on Native AWS, managing a team of 5 engineers to implement 4 RAG models and tool invocation, resulting in a chatbot serving 4000+ customers with projected monthly savings of 13,000 work hours. (Multi-Agent Orchestration, LLMs, AWS Bedrock)", 
        "Spearheaded the development and implementation of a 3-year content management strategy for the chatbot. This resulted in a 40% reduction in stale data feedback and a top-down leadership alignment on internal tool of choice.", 
        "Established a robust LLOps pipeline for continuous model improvement and integration testing resulting in 99.99% availability of the application and an automated knowledge base expansion based on positive user feedback.", 
        "Led the successful integration of 2 acquired chatbot products into the existing suite and 100% data migration within 3 months.", 
        "Led development of AWS Partner Org P&L, delivering partner-level cost and profitability insights to Finance Leadership, there by facilitating strategic decisions and annual planning. Created a 3-year plan for P&L integration with rest of AWS Organizations and central Finance teams.", 
        "Spearheaded design of the reporting schema infrastructure including consolidation of Data Sources on Data Lakes, ETLs migration, Governance and Data Quality on Datawarehouse as a Service. The resulted in an increase in availability of data tables from 80% to 99.99% and data quality issues by 70%.", 
        "Established standardized guidelines for an Org of 100 engineers on schema design and asset nomenclature. This resulted in reduced creation of over 90 new assets with a 30% MoM decrease in support tickets.", 
        "Designed & built 9 standardized data assets supporting over 400 reporting resources (Data Tables & Dashboards) with over 400k query annual references, supporting 8 AWS Organizations.", 
        "Architected and implemented a comprehensive Data Certifications Program, elevating ETL design standards and dashboard UI consistency across the organization. This initiative resulted in a 60% reduction in redundant data assets, a 35% improvement in dashboard usability CSAT scores, and a 25% increase in cross-team data utilization."
      ]
    },
    {
      role: "Analytics Associate",
      company: "USEReady",
      companylogo: require("./assets/images/UsereadyLogo.png"),
      date: "February 2019 – Present",
      desc: "Highlights:",
      descBullets: [
        "Gathered detailed requirements, defined KPIs, developed and implemented solutions for over 12 projects in an Agile setup for 3 clients.",
        "Created and automated over 30 ETL Process’ & 20 Dashboards using Bigquery/Redshift/Oracle/Tableau, Python/Alteryx and reported in Tableau / Power BI supporting 4 multimillion-dollar product launches.",
        "Created 2 Tableau Dashboards ingesting more than 50 million rows, and optimized performance from 90 seconds to under 5 seconds for 4000 concurrent users.(Tabjolt / Tabmon)",
        "Created a “Portfolio Analyzer Dashboard” using Tableau-Python API, with dynamic optimization in Python based on user selected parameters on a Tableau UI.",
        "Created a Python data stream to interact with databases and automating using python schedular to support 2 POCs."
      ]
    }
  ]
};

const workExperiencesPrevious = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Intern",
      company: "Dept of Finance",
      companylogo: require("./assets/images/dofLogo.png"),
      date: "June 2018 – December 2018",
      desc: "Highlights:",
      descBullets: [
        "Extracted data from the MySQL database and transformed the corrupted data for cataloging & reporting.",
        "Using Agile developed a full stack Case Management System using the TimeMatters for a staff of 10 users.",
        "Designed a Database (STAR) for the OTA and developed rules for maintaining data quality in the CMS, reducing data errors by 50%.",
        "Automated the existing internal reporting on Excel VBA creating Pivot Tables & Charts, reducing effort by 130 working hours on an annual basis. Developed an automated reporting system using IBM Cognos."
      ]
    },
    {
      role: "Associate Applications Developer",
      company: "Oracle Corp",
      companylogo: require("./assets/images/Oracle_logo.png"),
      date: "October 2016 – July 2017",
      desc: "Highlights:",
      descBullets: [
        "Improved performance in Batch Data Processing Utility by reducing I/O time with Database by 4%.",
        "Resolved database performance and deadlock issues for 3 clients in the Oracle Revenue Management and Billing batch data processing cycles with 5 million rows (appx)."
      ]
    },
    {
      role: "Data Analyst",
      company: "A S Services",
      companylogo: require("./assets/images/asservicesLogo.png"),
      date: "April 2016 – September 2016",
      desc: "Highlights:",
      descBullets: [
        "Create a database and digitize the existing client salary data from ledgers.",
        "Create monthly reports for the clients to manage the expenditures and create projections for the next month.",
        "Perform monetary impact analysis for Labor Laws’ compliance and identify sources of cost reduction for the clients.",
        "While onboarding new clients, check for past compliance violations and chart the frequency against a benchmark model in the same industry.",
        "Generate reports and create dashboards based on the findings."
      ]
    },
    {
      role: "Financial Data Analyst",
      company: "Galaxy Realmart Private Limited",
      // companylogo: require("./assets/images/asservicesLogo.png"),
      date: "Feb. 2015 — Sep. 2016",
      desc: "Highlights:",
      descBullets: [
        "Prepared Capital Budgeting (NPV, DCF, NAV, IRR, and NOI), Forecasting and Risk Analysis of VaR, ES, Risk Return Metrics on 9 projects while improving profitability by INR 400,000.",
        "Established Excel and R models to evaluate real estate properties based on cost, income & comparison approach with accuracy of 75% (Average).",
        "Conducted detailed market research and property valuations using market comparables, income, and cost approaches, leading to a 20% increase in acquisition returns."
      ]
    },
    {
      role: "CEO & Cofounder",
      company: "ArtStreak",
      companylogo: require("./assets/images/artstreakLogo.png"),
      date: "February 2014 – January 2015",
      desc: "Highlights:",
      descBullets: [
        "Formerly known as i-deal: Artstreak",
        "Co-founded and led the development of a non-profit startup focused on creating an evangelist-assisted crowdfunding platform for artists, aligning product vision with business objectives.",
        "Led user research and data-driven insights to iterate on platform features, improving user engagement and establishing baseline on crowdfunding success rates for artists.",
        "Managed product lifecycle, from concept to launch, ensuring timely and efficient execution of product features and platform enhancements.",
        "Led product initiatives that fostered a strong sense of community among artists and backers, building long-term loyalty and increasing retention rates."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true  or false to show Contact profile using Github, defaults to false
  display: false
};

// Fin-Finicky Stuff here ----

const bigProjects = {
  title: emoji("Fin-Finicky: A Financial Analysts' Tookit 🛠️"),
  subtitle:
    "Check it out!!:  A one stop shop for Financial Analysts! (Academic Project Built in R / R Shiny)",
  projects: [
    {
      image: require("./assets/images/Finfincky.PNG"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nlohiya.shinyapps.io/Fin-Finicky/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Achievements, Certifications and some other cool stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Certified AWS Cloud Practitioner - 2024",
      image: require("./assets/images/aws_ccp.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://community.alteryx.com/t5/user/viewprofilepage/user-id/88164"
        }
      ]
    },
    {
      title: "Alteryx Core",
      subtitle: "Alteryx Designer: Core design certification, March 2020.",
      image: require("./assets/images/AlteeryxcertificateLogo.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://community.alteryx.com/t5/user/viewprofilepage/user-id/88164"
        }
      ]
    },
    {
      title: "CFA Level 2 Candidate",
      subtitle: "Cleared CFA Level 1 Exam, June 2017.",
      image: require("./assets/images/CFALogo.png"),
      footerLink: [{name: "Certification", url: "https://basno.com/es1q5bik"}]
    },

    {
      title: "USEReady: February Spot Award Winner",
      subtitle: "Won spot award - February 2020",
      image: require("./assets/images/UsereadyLogo.png"),
      footerLink: [{name: "Certification", url: ""}]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
// Decommisioned as of 2020-11-29

const blogSection = {
  title: emoji ("Blogs ✍️"),
  subtitle:
    emoji ("With Love for Developing cool stuff, I love to write (or make AI write 😬) and teach others what I have learnt."),
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://nikilohiya.github.io/ai-engineering/Contextual-Retreival/",
      title: "LangGraph: Building Resilient Language Agents as Graphs",
      description: "A sneak peak into multi agent LLM Architecture."
    },
    {
      url: "https://nikilohiya.github.io/ai-engineering/Deep-Dive-into-CrewAI/",
      title: "A Deep Dive into CrewAI",
      description: "The Rise of Multi-Agent Systems: A Deep Dive into CrewAI"
    },
    {
      url: "https://nikilohiya.github.io/AI-Trends-in-2024/",
      title: "AI Trends in 2024!",
      description:
        "2023 saw generative AI (gen AI) explode into the public consciousness, and 2024 marks the year it starts to take root in businesses. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section
// Decommisioned as of 2020-11-29
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link

  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

//Contact Information
const contactInfo = {
  title: emoji("Contact Me 📨"),
  subtitle:
    emoji("Discuss a project or just want to say hi? My Inbox is open for all. 👋"),
  email_address: "nikilohiya@gmail.com"
};

//Twitter Section
// Decommisioned as of 2020-11-29
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  workExperiencesPrevious,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
