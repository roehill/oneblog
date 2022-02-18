import { getFavouritePlaces } from '../dummy-data';
import styled from 'styled-components';

import PlacesList from '../components/places/PlacesList';

export default function HomePage() {
  const favouritePlaces = getFavouritePlaces();

  return (
    <HomePageWrapper>
      <h1>My Favourite Places</h1>
      <PlacesList places={favouritePlaces} />
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div`
  h1 {
    margin: 10px;
    text-align: center;
  }
`;
