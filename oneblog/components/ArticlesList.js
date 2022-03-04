import styled from 'styled-components';
import ArticlesItem from './ArticlesItem';

const Articles = [
  {
    id: 1,
    title: 'The future is agriculture',
    author: 'Patricia Jenkins',
    category: 'story',
  },
  {
    id: 2,
    title: 'I am passionate about my own food, cooking and sharing',
    author: 'Sean Hamilton',
    category: 'lifestyle',
  },
];

const ArticlesList = (props) => {
  return (
    <ArticlesListWrapper>
      {Articles.map((article) => (
        <ArticlesItem article={article} />
      ))}
    </ArticlesListWrapper>
  );
};

const ArticlesListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ArticlesList;
