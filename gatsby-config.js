module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,

    // Your Name
    name: 'Andrew Van Dyke',

    // Main Site Title
    title: `Andrew VanDyke | Full Stack Developer`,

    // Description that goes under your name in main bio
    description: `Full Stack Developer with 4+ years of experience building web applications with React, TypeScript, PHP, and Laravel. Background in controls engineering provides unique perspective on building reliable systems.`,

    email: `vandyand@gmail.com`,

    // Optional: Github account URL
    github: `https://github.com/vandyand`,

    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/vandyand/`,

    // Content of the About Me section
    about: `Full Stack Developer with 4+ years of experience building scalable web applications and a background in controls engineering. Proficient in React, TypeScript, PHP/Laravel, and functional programming with Clojure. I excel at bridging complex technical challenges with elegant user experiences, whether building responsive interfaces, optimizing API performance, or implementing data visualization. My engineering background gives me a unique perspective on creating reliable, efficient software systems.`,

    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Frontend Development',
        description:
          'React, TypeScript, JavaScript, Redux, HTML5, CSS3, Material UI, Tailwind CSS',
      },
      {
        name: 'Backend Development',
        description: 'PHP, Laravel, RESTful APIs, Node.js, Express, Clojure',
      },
      {
        name: 'Database & Infrastructure',
        description:
          'MySQL, PostgreSQL, SQL optimization, Docker, Git, AWS, Heroku, Vercel',
      },
      {
        name: 'Specialized Skills',
        description:
          'Functional Programming, Test-Driven Development, Geospatial Visualization, Data Processing',
      },
    ],

    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Personal Finance Dashboard - React, TypeScript, Laravel',
        description:
          'Full-stack fintech application with user authentication, interactive dashboards, and financial management tools. Built with React/TypeScript frontend and PHP Laravel backend, featuring responsive design with Material UI and data visualization with Chart.js. Implements RESTful API architecture and secure user authentication.',
        link: 'https://fintecfun-frontend-a0753a40ce39.herokuapp.com',
      },
      {
        name: 'Weather Map Explorer - React, Node.js, Geospatial Data',
        description:
          'Interactive geospatial application showcasing weather data visualization. Built with React and integrates with Leaflet.js for mapping functionality and Visual Crossing weather API demonstrating experience with geospatial data processing and visualization.',
        link: 'https://weather-map-explorer-6d34f443bf21.herokuapp.com/map',
      },
      {
        name: 'Clojure Trader - Functional Programming, Algorithmic Trading',
        description:
          'Advanced trading framework built with Clojure that leverages functional programming techniques and genetic algorithms to optimize trading strategies. Implements pure functions, immutable data structures, and asynchronous workflows for data processing and analysis. Demonstrates experience with functional programming paradigms and complex data processing.',
        link: 'https://github.com/vandyand/clojure-trader',
      },
      {
        name: 'Kikker Stickers E-commerce - JavaScript, Snipcart Integration',
        description:
          'Designed and developed a custom e-commerce website with shopping cart functionality and payment processing integration using Snipcart. Features responsive design, product catalog management, and streamlined checkout process.',
        link: 'https://kikkerstickers.com/',
      },
      {
        name: 'Van Dyke Travel Blog - HTML, CSS, JavaScript',
        description:
          'Responsive travel blog with content management capabilities. Designed with mobile-first approach and optimized for performance across devices.',
        link: 'https://www.vandyketravelblog.com/',
      },
      {
        name:
          'AI-Powered Meme Generator - JavaScript, OpenAI API Integration',
        description:
          'Web application that generates customized memes based on user input. Integrates with external AI services for image generation and text processing. Demonstrates experience with Generative AI API integration and asynchronous JavaScript.',
        link: 'https://dumb-meme.herokuapp.com/',
      },
    ],

    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Controls Engineer II',
        description:
          'Extol Inc. (2024-present): Designing and programming control systems for plastics manufacturing equipment. Developing PLC systems and collaborating with engineers to implement reliable automation solutions for customers.',
        link: 'https://www.extolinc.com/',
      },
      {
        name: 'Software Engineer',
        description:
          'TeamGantt (2020-2023): Built and maintained features for a SaaS project management platform using React/TypeScript frontend and PHP/Laravel backend services. Contributed to the Clojure codebase for data processing needs, and collaborated with team members in a fully remote agile environment using Git/GitHub.',
        link: 'https://www.teamgantt.com/',
      },
      {
        name: 'Controls Engineer',
        description:
          'Altron Automation (2016-2020): Designed electrical schematics and programmed PLCs for manufacturing automation systems. Worked on routing, adhesive dispensing, and material handling applications. Integrated robots into production lines and collaborated with mechanical engineers to deliver solutions that met client requirements.',
        link: 'https://www.altronautomation.com/',
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
