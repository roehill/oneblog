import styled from 'styled-components';
import { getFavouritePlaces } from '../helpers/api-utils';

import PlacesList from '../components/places/PlacesList';

export default function HomePage(props) {
  return (
    <HomePageWrapper>
      <h1>My Favourite Places</h1>
      <PlacesList places={props.places} />
    </HomePageWrapper>
  );
}

export async function getStaticProps() {
  const favouritePlaces = await getFavouritePlaces();

  return {
    props: {
      places: favouritePlaces,
    },
    revalidate: 1800,
  };
}

const HomePageWrapper = styled.div`
  h1 {
    margin: 10px;
    text-align: center;
  }
`;
