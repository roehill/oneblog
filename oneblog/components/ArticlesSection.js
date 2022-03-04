import styled from 'styled-components';

import ArticlesList from './ArticlesList';

const ArticlesSection = (props) => {
  return (
    <ArticlesSectionWrapper>
      <ArticlesList />
    </ArticlesSectionWrapper>
  );
};

const ArticlesSectionWrapper = styled.section`
  margin: -10vh 3vw 0 3vw;
`;

export default ArticlesSection;
