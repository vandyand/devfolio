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
        name: 'Algorithmic Trading Dashboard',
        subtitle: 'Next.js, Python, OANDA API, Alpaca API, TradingView, Vercel',
        description:
          'Live performance dashboard for three algorithmic trading systems — OANDA Forex (20 instruments), Alpaca Equities, and Solana Altmemecoins. Displays real-time NAV curves, daily returns, Sharpe/Sortino ratios, max drawdown, open positions, and risk metrics. Powered by TCN + Actor-Critic RL models with daily position sizing. Updated every 5 minutes.',
        link: 'https://avd-trading-dashboard.vercel.app',
      },
      {
        name: 'Marble World Studio',
        subtitle: 'Next.js, React, Three.js, Prisma, PostgreSQL, Stripe',
        description:
          'SaaS platform that generates explorable 3D worlds using World Labs\' AI models. Users create immersive environments from text prompts, images, or video, then navigate them in-browser with real-time camera controls. Features two AI model tiers (Mini and Plus), credit-based pricing via Stripe, downloadable assets (Gaussian splats, meshes, panoramas), shareable browser links.',
        link: 'https://marbleworld.studio',
      },
      {
        name: 'I Wish There Was...',
        subtitle: 'Next.js, React, Vercel, Authentication',
        description:
          'Community-driven product discovery platform where users post, upvote, and discuss wishes for products they want to exist. Features user authentication, real-time upvoting, threaded comments, search, and sorting by newest, most upvoted, or most discussed. Built to connect people who have problems with builders who want to solve them.',
        link: 'https://iwishtherewas.xyz/',
      },
      {
        name: 'Agentic Workflow Engine',
        subtitle: 'Next.js, TypeScript, Tailwind CSS, DAG Execution',
        description:
          'Schema-driven workflow orchestration engine for AI applications. Chains HTTP requests, data transforms, and LLM calls with typed inputs/outputs, dependency resolution via topological ordering, and built-in error handling with retries and fallbacks.',
        link: 'https://agentic-workflow-engine.vercel.app/',
      },
      {
        name: 'Walk-Forward Optimization Dashboard',
        subtitle:
          'Next.js, TypeScript, Recharts, Tailwind CSS',
        description:
          'Visualizes backtesting results from an algorithmic trading research system. Displays out-of-sample equity curves, strategy comparisons, and per-window metrics across TCN, MLP, and rule-based strategies using walk-forward optimization — no look-ahead bias.',
        link: 'https://algo-trading-wfo-dashboard.vercel.app/',
      },
      {
        name: 'Multi-Agent Wellness Chatbot',
        subtitle:
          'Next.js, TypeScript, OpenAI API, Tailwind CSS',
        description:
          'Intelligent multi-personality chatbot with agent routing and shared conversation context. A router agent analyzes each message and selects from four wellness specialists (Coach, Chef, Sage, Doc), with cross-character awareness through shared conversation memory.',
        link: 'https://wellness-crew-chat.vercel.app/',
      },
      {
        name: 'Multi-Agent Research Pipeline',
        subtitle:
          'Next.js, TypeScript, OpenAI API, Tailwind CSS',
        description:
          'Collaborative AI pipeline where three agents — Researcher, Writer, and Critic — produce and refine articles via schema-driven structured output. Demonstrates multi-turn agent coordination with a revision loop, using strict JSON schemas as contracts between agents with no glue code.',
        link: 'https://multi-agent-research-pipeline.vercel.app/',
      },
      {
        name: 'Personal Finance Dashboard',
        subtitle: 'React, TypeScript, Laravel, Material UI, PostgreSQL',
        description:
          'Full-stack fintech application with user authentication, interactive dashboards, and financial management tools. Implements RESTful API architecture and secure user authentication with data visualization for financial metrics.',
        link: 'https://fintecfun-frontend.vercel.app',
      },
      {
        name: 'Weather Map Explorer',
        subtitle: 'React, Node.js, Leaflet.js, Geospatial APIs',
        description:
          'Interactive geospatial application showcasing weather data visualization. Integrates with mapping functionality and weather APIs demonstrating experience with geospatial data processing and visualization.',
        link: 'https://weather-map-explorer.vercel.app/map',
      },
      {
        name: 'Van Dyke Travel Blog',
        subtitle: 'HTML, CSS, JavaScript, Mobile-First Design',
        description:
          'Responsive travel blog with content management capabilities. Designed with mobile-first approach and optimized for performance across devices.',
        link: 'https://www.vandyketravelblog.com/',
      },
      {
        name: 'AI-Powered Meme Generator',
        subtitle: 'JavaScript, OpenAI API Integration, Async Programming',
        description:
          'Web application that generates customized memes based on user input. Integrates with external AI services for image generation and text processing.',
        link: 'https://dumb-meme.vercel.app/',
      },
    ],

    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'AI/ML/Fullstack Contractor',
        subtitle: 'Upwork (Jan 2025 - present)',
        description:
          'Freelance contractor specializing in AI/ML development, full-stack web applications, and algorithmic trading systems. Building agentic workflows, multi-agent systems, and data-driven applications for clients.',
        link: 'https://www.upwork.com/freelancers/vandyand',
      },
      {
        name: 'Controls Engineer II',
        subtitle: 'Extol Inc. (2024-2025)',
        description:
          'Designed and programmed control systems for plastics manufacturing equipment. Developed PLC systems and collaborated with engineers to implement reliable automation solutions for customers.',
        link: 'https://www.extolinc.com/',
      },
      {
        name: 'Software Engineer',
        subtitle: 'TeamGantt (2020-2023)',
        description:
          'Built and maintained features for a SaaS project management platform using React/TypeScript frontend and PHP/Laravel backend services. Contributed to the Clojure codebase for data processing needs, and collaborated with team members in a fully remote agile environment using Git/GitHub.',
        link: 'https://www.teamgantt.com/',
      },
      {
        name: 'Controls Engineer',
        subtitle: 'Altron Automation (2016-2020)',
        description:
          'Designed electrical schematics and programmed PLCs for manufacturing automation systems. Worked on routing, adhesive dispensing, and material handling applications. Integrated robots into production lines and collaborated with mechanical engineers to deliver solutions that met client requirements.',
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
