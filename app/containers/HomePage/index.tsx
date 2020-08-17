/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

import H2 from 'components/H2';
import CenteredSection from './CenteredSection';

import styled from 'styles/styled-components';

const Title = styled(H2)`
  font-size: 18px;
  color: red;
`;

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <Title>Start your next react project in seconds</Title>
        </CenteredSection>
      </div>
    </>
  );
}
