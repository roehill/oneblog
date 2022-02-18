import { getFavouritePlaces } from '../dummy-data';

import PlacesList from '../components/places/PlacesList';

export default function HomePage() {
  const favouritePlaces = getFavouritePlaces();

  return (
    <div>
      <PlacesList places={favouritePlaces} />
    </div>
  );
}
