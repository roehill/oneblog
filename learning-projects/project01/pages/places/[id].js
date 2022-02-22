import { useRouter } from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';

import { getPlaceById } from '../../dummy-data';

export default function PlacesDetailPage() {
  const router = useRouter();

  const id = router.query.id;
  const place = getPlaceById(id);

  if (!place) {
    return <p>No place found! </p>;
  }

  const readableDate = new Date(place.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <PlacesDetailPageWrapper>
      <div>
        <Image src={place.image} width={600} height={400} />
        <h2>{place.place}</h2>
        <h5>{readableDate}</h5>
        <p>{place.description}</p>
        <p>{place.body}</p>
      </div>
    </PlacesDetailPageWrapper>
  );
}

const PlacesDetailPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;

  div {
    max-width: 600px;
  }

  p {
    padding: 10px 0;
  }
`;
