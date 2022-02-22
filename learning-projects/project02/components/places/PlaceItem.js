import styled from 'styled-components';
import Image from 'next/image';
import Button from '../ui/Button';

export default function PlaceItem(props) {
  const { id, image, place, date, description } = props;

  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <PlaceItemWrapper>
      <Image src={image} width={400} height={300} />
      <div>
        <h2>{place}</h2>
        <h5>{readableDate}</h5>
        <p>{description}</p>
      </div>
      <Button link={`/places/${id}`}>Read more</Button>
    </PlaceItemWrapper>
  );
}

const PlaceItemWrapper = styled.li`
  width: 400px;
  max-width: 450px;
  margin: 20px 10px;

  p {
    padding: 10px 0;
  }
`;
