import { getAllPlaces } from '../../helpers/api-utils';
import PlacesList from '../../components/places/PlacesList';
import PlacesSearch from '../../components/places/PlacesSearch';

export default function PlacesPage(props) {
  const findPlacesHandler = (year, month) => {
    const fullPath = `/places/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
      <PlacesSearch onSearch={findPlacesHandler} />
      <PlacesList places={props.places} />
    </div>
  );
}

export async function getStaticProps() {
  const places = await getAllPlaces();

  return {
    props: {
      places: places,
    },
  };
}
