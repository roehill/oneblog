import styled from 'styled-components';
import Image from 'next/image';

import { getPlaceById, getAllPlaces } from '../../helpers/api-utils';

export default function PlacesDetailPage(props) {
  const place = props.place;

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

export async function getStaticProps(context) {
  const id = context.params.id;

  const place = await getPlaceById(id);

  return {
    props: {
      place: place,
    },
    revalidate: 1800,
  };
}

export async function getStaticPaths() {
  const places = await getAllPlaces();

  const paths = places.map((place) => ({ params: { id: place.id } }));

  return {
    paths: paths,
    fallback: true,
  };
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
