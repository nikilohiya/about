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
    "Customer-focused and results-driven Product Leader with 9+ years of experience in building and scaling AI-driven and data-intensive products. Passionate about building Data Products, migrations and leveraging Generative AI, and Cloud to solve complex business challenges while driving innovation. Proven expertise in developing product vision, strategy, and roadmaps while leading cross-functional teams to deliver impactful AI-powered solutions. Adept at collaborating with executives, engineering, and go-to-market teams to maximize customer value and business growth."
  ),
  // "Innovative and results-oriented Business with 9 years of professional experience and 2 years of specialized experience in building and scaling Data & Generative AI applications. Expertise in driving the product strategy, development, and deployment of cutting-edge AI-driven solutions that solve complex problems and enhance user experiences. Proven ability to lead cross-functional teams, collaborate with engineering and data science teams, to create AI-powered products that deliver measurable business impact. Adept at navigating the rapidly evolving AI landscape, managing product lifecycles, and aligning AI innovation with customer needs and organizational goals."
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
  subTitle: emoji(
    "Obssesive 'Problem 🧐 Solver'  who is consistently learning new tools and working with teams to solve them!"
  ),
  skills: [
    emoji(
      "⚡ Expertise in defining AI & Data product roadmaps, aligning with business objectives, and driving strategic initiatives across cross-functional teams. "
    ),
    emoji(
      "⚡ Experienced in overseeing the end-to-end lifecycle of Data products, from ideation through launch and iteration, ensuring alignment with company goals."
    ),
    emoji(
      "⚡ Experienced in collaborating with cross-functional teams to implement LLM based solutions that align with business goals and improve operational efficiency. "
    ),
    emoji(
      "⚡  Adept at managing AI product backlogs, prioritizing features, and translating complex technical requirements into clear, actionable plans. "
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
      // duration: "September 2017 - December 2018",
      desc: "Highlights",
      descBullets: [
        "Recepient of Provost Masters Scholarship Award.",
        "Treasurer of Business Intelligence Club."
      ]
    },
    {
      schoolName: "MNIT Jaipur",
      logo: require("./assets/images/mnitLogo.png"),
      subHeader: "Bachelor of Technology in Electrical Engineering",
      // duration: "July 2012 - April 2016",
      desc: "Highlights",
      descBullets: [
        "Mentored over 700 Students as 'Chief Mentor' in Student Mentorship Program.",
        "Founder & 1st Chairman of Electrical Engineering Society, MNIT Jaipur."
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
      Stack: "ETLs, Analytics and Data Design",
      progressPercentage: "80%"
    },
    {
      Stack: "Gen-AI Application Design",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Business Intelligence Engineer / Product Lead",
      company: "AWS",
      companylogo: require("./assets/images/aws_logo.png"),
      date: "March 2021 – Present",
      desc: "Highlights:",
      descBullets: [
        "•	Owned and scaled an AI-powered RAG-based chatbot, reducing operational workload by 13,000+ hours/month and improving efficiency by 25% while leading a cross functional team.",
        "Led end-to-end product strategy for a 3-year roadmap on unstructured data management, securing leadership buy-in and reducing stale feedback by 40%, boosting customer satisfaction by 15%.",
        "Defined and implemented AI observability features, improving feature prioritization and adoption by 20%, enhancing model transparency.",
        "Drove cross-functional collaboration across engineering, data science, and leadership to ensure seamless AI integration, achieving 99.99% uptime.",
        "Standardized data governance policies, improving data discoverability and reducing redundant asset creation by 30% MoM.",
        "Optimized ETL and ML workflows, reducing cloud compute costs by 18% and improving analytics efficiency in the organizations.",
        "Standardized Data Practices Across Organizations by implementing efficient schema design, improving query performance by 40%."
      ]
    },
    {
      role: "Analytics Associate",
      company: "USEReady",
      companylogo: require("./assets/images/UsereadyLogo.png"),
      date: "February 2019 – Present",
      desc: "Highlights:",
      descBullets: [
        "Launched data-driven insights products supporting 4 multibillion-dollar MNCs by automating 50+ ETL processes leveraging BigQuery, Redshift, and Oracle.",
        "Designed and implemented KPIs for 25+ dashboards supporting Product, Finance, and Operations teams, improving data-driven decision-making.",
        "Optimized large-scale analytics dashboards ingesting 50M+ rows, reducing query response time from 90s to under 5s for 4,000+ users.",
        "Led end-to-end automation of financial and operational reports, decreasing report generation time from 6 hours to 30 minutes.",
        "Collaborated with engineering teams to design scalable data pipelines, reducing ETL failures by 25% and improving overall system reliability.",
        "Implemented predictive analytics models, enabling real-time business insights, leading to 15% better forecasting accuracy for financial teams."
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
      companylogo: require("./assets/images/oracleLogo.png"),
      date: "October 2016 – July 2017",
      desc: "Highlights:",
      descBullets: [
        "Enhanced batch data processing efficiency by reducing I/O time by 4%, improving database query execution.",
        "Resolved performance bottlenecks in revenue management systems, improving transaction processing for enterprise clients.",
        "Developed and optimized SQL queries, reducing query execution time by 30% and improving system responsiveness.",
        "Collaborated with cross-functional teams to streamline database migration, reducing downtime and ensuring smooth transitions to Revenue Management & Billing.",
        "Designed and implemented indexing strategies, leading to a 20% improvement in overall system performance."
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
      companylogo: require("./assets/images/galaxy.png"),
      date: "Feb. 2015 — Sep. 2016",
      desc: "Highlights:",
      descBullets: [
        "Prepared Capital Budgeting (NPV, DCF, NAV, IRR, and NOI), Forecasting and Risk Analysis of VaR, ES, Risk Return Metrics on 9 projects while improving profitability by INR 400,000.",
        "Established Excel and R models to evaluate real estate properties based on cost, income & comparison approach with accuracy of 75% (Average).",
        "Conducted detailed market research and property valuations using market comparables, income, and cost approaches, leading to a 20% increase in acquisition returns."
      ]
    },
    {
      role: "Co-founder",
      company: "ArtStreak",
      companylogo: require("./assets/images/artstreakLogo.png"),
      date: "February 2014 – January 2015",
      desc: "Highlights:",
      descBullets: [
        "Formerly known as i-deal: Artstreak",
        "Founded and led a non-profit startup focused on crowdfunding for artists, securing early-stage funding and partnerships.",
        "Drove product strategy by leveraging user research and data analytics, increasing artist success rates in fundraising.",
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
  display: true
};

// Fin-Finicky Stuff here ----

const bigProjects = {
  title: "Some Cool Academic Projects",
  subtitle: "Check it out!!",
  projects: [
    {
      image: require("./assets/images/Finfincky.PNG"),
      projectName: emoji("Fin-Finicky: A Financial Analysts' Tookit 🛠️"),
      projectDesc:
        "• Designed and developed a web application for Financial Analysts (Business Application) calculating ACF, ARIMA, VAR, GARCH analysis on any ticker given by the user using Yahoo Finance API in R and R shiny. Created an Optimized Portfolio & Risk Estimation feature for the individual investors on the user defined stocks. Performed detailed analysis on the commodities Crude, Soy and Gold using the Fin Finicky.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nlohiya.shinyapps.io/Fin-Finicky/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Finfincky.PNG"),
      projectName: emoji(
        "Sentiment Analysis for Stock Market - Blue Chip Stocks. 🛠️"
      ),
      projectDesc:
        "Created a python engine to pipeline the process of downloading, cleaning, vectorizing and classifying tweets via twitter API by benchmarking amongst 8 supervised & 1 unsupervised learning techniques. Using the most efficient technique, performed sentiment analysis on the daily frequency of the tweets to explain the movement of market securities with an accuracy of 61%.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nlohiya.shinyapps.io/Fin-Finicky/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Finfincky.PNG"),
      projectName: emoji("Duck Wisdom - Portfolio Analysis Tool 🛠️"),
      projectDesc:
        "Created a web application using R Shiny for portfolio optimization and risk analysis. For any number of stock symbols application fetches historical data for the stocks and provides calculated features such as Risk Profile for each stock (Skewness, Kurtosis & Correlations) and provide annualized return table. Provides optimized weights for the stocks using minimum variance markowitz theory.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nlohiya.shinyapps.io/Fin-Finicky/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Finfincky.PNG"),
      projectName: emoji(
        "Demand Side Bidding Strategy in Electricity Markets using GA"
      ),
      projectDesc:
        "Determined optimal demand-side bidding strategy for an Electricity aggregator in Forward electricity market using Spanish Electricity Market Data. The proposed strategy was developed by creating a moving window (12 hours of intraday trades and a futures quote of 24 hours prior to the closing time) and using the differences between the quotes and the bids of an existing player. Thereby, created a cost function and optimized the same by running simulation in a genetic algorithm for 100 generations.",
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
          url: "https://www.credly.com/badges/778f403d-a7e6-4598-9f4d-25c26a773c86/public_url"
        }
      ]
    },
    {
      title: "AWS Certified AI Practitioner",
      subtitle: "Early Adopter!",
      image: require("./assets/images/aws_caip.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/d8db9819-2c95-4928-886d-a1a5c140662e/public_url"
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
      title: "Chronos Certified Mentor",
      subtitle: "Interviewed over 45 candidates & Mentored 10 in AWS.",
      image: require("./assets/images/Chronos.jpg"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://certificates.chronus.com/certificates/cf-2a0b5006-40ed-4102-b4ff-66da0e370617-1256432"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
// Decommisioned as of 2020-11-29

const blogSection = {
  title: emoji("Blogs ✍️"),
  subtitle: emoji(
    "With Love for Developing cool stuff, I love to write (or make AI write 😬) and teach others what I have learnt."
  ),
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
  subtitle: emoji(
    "Discuss a project or just want to say hi? My Inbox is open for all. 👋"
  ),
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
