module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,

    // Your Name
    name: 'Andrew Van Dyke',

    // Main Site Title
    title: `Andrew Van Dyke | Engineer & Developer`,

    // Description that goes under your name in main bio
    description: `Highly adaptable and experienced engineer with a rich background in software development and robotics engineering.`,

    email: `vandyand@gmail.com`,

    // Optional: Github account URL
    github: `https://github.com/vandyand`,

    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/vandyand/`,

    // Content of the About Me section
    about: `Highly adaptable and experienced Engineer with a rich background in software development and robotics engineering. Proficient in developing complex software solutions and automation systems across various industries, including saas, manufacturing, and finance.`,

    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description: 'Javascript, Python, PHP, Clojure',
      },
      {
        name: 'Frameworks/Technologies',
        description: 'React, Redux, TypeScript, Laravel, GitHub',
      },
      {
        name: 'Engineering',
        description:
          'Software, Database, Robotics, Automation, PLC Programming, Design',
      },
    ],

    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Forex Trading Algorithm',
        description:
          'Designed and developed a sophisticated forex trading algorithm leveraging genetic algorithms and CUDA to optimize financial trading strategies.',
        link: 'https://github.com/vandyand/clojure-trader',
      },
      {
        name: 'Kikker Stickers Website',
        description:
          "Built and hosted a simple ecommerce website with snipcart integration for my friend's decal sticker business.",
        link: 'https://kikkerstickers.com/',
      },
      {
        name: 'Van Dyke Travel Blog',
        description:
          'Our family had fun exploring the south and west during winter 2023-2024',
        link: 'https://www.vandyketravelblog.com/',
      },
      {
        name: 'Meme Generator',
        description: 'Input description, get a meme!',
        link: 'https://dumb-meme.herokuapp.com/',
      },
    ],

    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Controls Engineer II',
        description:
          'Extol Inc. - 2024 (present), Working on electrical design and PLC and Robotics programming for plastic welding manufacturing processes.',
        link: 'https://www.extolinc.com/',
      },
      {
        name: 'Full stack | Front end web developer',
        description:
          'TeamGantt - 2020 to 2023, Worked implementing frontend features and fixes in Typescript (React) in addition to backend PHP REST API development (Laravel).',
        link: 'https://www.teamgantt.com/',
      },
      {
        name: 'Controls Engineer',
        description:
          'Altron Automation and Creative Machining - 2016 to 2020, Worked on electrical design, PLC programming, HMI development, and robotics for manufacturing.',
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
