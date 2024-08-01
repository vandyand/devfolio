import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionSkills = ({ skills }) => {
  return (
    <Section title="Proficiencies">
      {skills.map((skill) => (
        <SummaryItem
          key={skill.name}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </Section>
  );
};

export default SectionSkills;
