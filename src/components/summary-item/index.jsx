import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-8',
  wrapperWithLink: 'transform transition-all duration-300 hover:-translate-y-1',
  card: 'border border-gray-200 rounded-lg p-5',
  cardWithLink: 'hover:shadow-md transition-all duration-300',
  name: 'font-semibold text-gray-900 pb-1 flex items-center justify-between',
  nameText: 'transition-colors duration-300',
  subtitle: 'text-sm font-medium text-gray-700 pb-2',
  description: 'text-md text-gray-600 font-light mt-2',
  icon: 'text-blue-600',
  linkWrapper: 'block',
};

const SummaryItem = ({
  name,
  description,
  subtitle,
  link = false,
  internal = false,
}) => {
  const LinkWrapper = ({ children }) => {
    if (!link) return children;

    return internal ? (
      <Link to={link} className={classes.linkWrapper}>
        {children}
      </Link>
    ) : (
      <a
        href={link}
        className={classes.linkWrapper}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  };

  return (
    <div
      className={`${classes.wrapper} ${link ? classes.wrapperWithLink : ''}`}
    >
      <LinkWrapper>
        <div
          className={`${classes.card} ${
            link ? classes.cardWithLink + ' cursor-pointer' : ''
          }`}
        >
          <div>
            <h3 className={classes.name}>
              <span
                className={`${classes.nameText} ${
                  link ? 'text-blue-600 group-hover:text-blue-800' : ''
                }`}
              >
                {name}
              </span>
              {link && (
                <span className={classes.icon}>{internal ? '→' : '↗'}</span>
              )}
            </h3>
            {subtitle && <div className={classes.subtitle}>{subtitle}</div>}
          </div>
          <p className={classes.description}>{description}</p>
        </div>
      </LinkWrapper>
    </div>
  );
};

export default SummaryItem;
