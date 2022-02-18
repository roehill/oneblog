import { getAllPlaces } from '../../dummy-data';
import { useRouter } from 'next/router';
import PlacesList from '../../components/places/PlacesList';
import PlacesSearch from '../../components/places/PlacesSearch';

export default function PlacesPage() {
  const router = useRouter();
  const allPlaces = getAllPlaces();

  const findPlacesHandler = (year, month) => {
    const fullPath = `/places/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <PlacesSearch onSearch={findPlacesHandler} />
      <PlacesList places={allPlaces} />
    </div>
  );
}
