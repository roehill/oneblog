import styled from 'styled-components';

const ArticlesItem = (props) => {
  return (
    <ArticlesItemWrapper>
      <h2>{props.article.title}</h2>
      <div className="author">
        <span>by</span> <h5>{props.article.author}</h5>
      </div>
      <h6>{props.article.category}</h6>
    </ArticlesItemWrapper>
  );
};

const ArticlesItemWrapper = styled.li`
  margin: 10px 0;
  border-radius: 25px;
  padding: 20px;
  color: white;
  width: 100%;
  background-color: #567032;

  h2 {
    padding: 10px 0;
  }

  .author h5 {
    display: inline;
  }

  h6 {
    padding: 20px 0;
  }
`;

export default ArticlesItem;
