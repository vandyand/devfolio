import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <SummaryItem
            key={project.name}
            name={project.name}
            description={project.description}
            subtitle={project.subtitle}
            link={project.link}
          />
        ))}
      </div>
    </Section>
  );
};

export default SectionProjects;
