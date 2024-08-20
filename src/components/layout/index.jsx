import React from 'react';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24',
  outerWrapper: 'relative',
  svg: 'hidden fixed transform right-0 top-5 z-0 xl:block',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <svg
        className={classes.svg}
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-200"
              fill="#edf2f7"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        />
      </svg>
      <div className={classes.wrapper}>{children}</div>
      <footer className="bg-gray-200 text-center py-4 mt-8 absolute bottom-0 w-full">
        <a
          href="https://buymeacoffee.com/vandyand"
          className="text-blue-500 hover:underline mx-2"
        >
          <i className="fas fa-coffee"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/vandyand/"
          className="text-blue-500 hover:underline mx-2"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/vandyand"
          className="text-blue-500 hover:underline mx-2"
        >
          <i className="fab fa-github"></i>
        </a>
      </footer>
    </div>
  );
};

export default Layout;
