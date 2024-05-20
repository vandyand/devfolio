module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    
    // Your Name
    name: 'Andrew Van Dyke',
    
    // Main Site Title
    title: `Andrew Van Dyke | Engineer & Developer`,
    
    // Description that goes under your name in main bio
    description: `Highly adaptable and experienced Engineer with a rich background in software development and robotics engineering.`,
    
    // Optional: Twitter account handle
    author: `@eggbirdeggbird`,
    
    // Optional: Github account URL
    github: `https://vandyand.github.io`,
    
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/vandyand/`,
    
    // Content of the About Me section
    about: `Highly adaptable and experienced Engineer with a rich background in software development and robotics engineering. Proficient in developing complex software solutions and automation systems across various industries, including technology, manufacturing, and finance.`,
    
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Forex Trading Algorithm',
        description:
          'Designed and developed a sophisticated forex trading algorithm leveraging genetic algorithms and CUDA to optimize financial trading strategies.',
        link: 'https://github.com/vandyand/clojure-trader',
      },
      {
        name: 'Van Dyke Travel Blog',
        description:
          'We had fun exploring the south and west last winter :)',
        link: 'https://www.vandyketravelblog.com/',
      },
      {
        name: 'Dumb Meme Generator',
        description:
          'Input description, get a meme!',
        link: 'https://dumb-meme.herokuapp.com/',
      },
    ],
    
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Creative Machining Inc.',
        description: 'Contract Robotics Engineer, Present',
        link: '',
      },
      {
        name: 'TeamGantt',
        description: 'Software Engineer, April 2020 - December 2023',
        link: '',
      },
      {
        name: 'Edge Robotics & Automation',
        description: 'Controls Engineer II, January 2019 - April 2020',
        link: '',
      },
      {
        name: 'Altron Automation',
        description: 'Controls Engineer, April 2016 - September 2017',
        link: '',
      },
    ],
    
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description: 'Bash, Python, JavaScript, PHP, Clojure',
      },
      {
        name: 'Frameworks/Technologies',
        description: 'React, Redux, TypeScript, Laravel, GitHub',
      },
      {
        name: 'Engineering',
        description: 'Robotics, Automation, PLC Programming, Design',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
