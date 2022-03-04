import styled from 'styled-components';

const HeroSection = (props) => {
  return <HeroSectionWrapper>Hero Section</HeroSectionWrapper>;
};

const HeroSectionWrapper = styled.section`
  background-color: #d3d3d3;
  height: calc(100vh - 66px);
  width: 100vw;
`;

export default HeroSection;
