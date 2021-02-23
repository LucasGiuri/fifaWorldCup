import React from 'react';

import { SectionContainer, SectionTitle } from './section.styles';

type Props = {
  title: string,
  children: JSX.Element,
};

function Section(props: Props) {
  const { title, children } = props;
  return (
    <SectionContainer>
      <SectionTitle>
        {title}
      </SectionTitle>
      {children}
    </SectionContainer>
  );
}

export default Section;
