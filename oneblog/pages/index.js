import HeroSection from '../components/HeroSection';
import ArticlesSection from '../components/ArticlesSection';
import { Fragment } from 'react';

const HomePage = (props) => {
  return (
    <Fragment>
      <HeroSection />
      <ArticlesSection />
    </Fragment>
  );
};

export default HomePage;
