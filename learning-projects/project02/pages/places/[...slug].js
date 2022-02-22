import { useRouter } from 'next/router';
import { getFilteredPlaces } from '../../dummy-data';

import PlacesList from '../../components/places/PlacesList';

export default function FilteredPlacesPage() {
  const router = useRouter();

  const filteredData = router.query.slug;

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (!filteredData) {
    return <p>Loading...</p>;
  }

  const filteredPlaces = getFilteredPlaces({
    year: numYear,
    month: numMonth,
  });

  console.log(filteredPlaces);

  if (!filteredPlaces || filteredPlaces.length === 0) {
    return <p>No places found</p>;
  }

  return (
    <div>
      <PlacesList places={filteredPlaces} />
    </div>
  );
}
