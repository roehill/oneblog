import styled from 'styled-components';

import PlaceItem from './PlaceItem';

export default function PlacesList(props) {
  return (
    <PlacesListWrapper>
      {props.places.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          place={place.place}
          description={place.description}
          date={place.date}
          image={place.image}
        />
      ))}
    </PlacesListWrapper>
  );
}

const PlacesListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
