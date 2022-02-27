// import { useRouter } from 'next/router';
import { getFilteredPlaces } from '../../helpers/api-utils';
import PlacesList from '../../components/places/PlacesList';

export default function FilteredPlacesPage(props) {
  // const router = useRouter();

  // const filteredData = router.query.slug;

  return (
    <div>
      <PlacesList places={props.places} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (!filteredData) {
    return <p>Loading...</p>;
  }

  const filteredPlaces = await getFilteredPlaces({
    year: numYear,
    month: numMonth,
  });

  if (!filteredPlaces || filteredPlaces.length === 0) {
    return {
      notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  return {
    props: {
      places: filteredPlaces,
    },
  };
}
