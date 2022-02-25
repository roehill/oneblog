export async function getAllPlaces() {
  const response = await fetch(
    'https://oneblog-demo-default-rtdb.firebaseio.com/places.json'
  );
  const data = await response.json();

  const places = [];

  for (const key in data) {
    places.push({
      id: key,
      ...data[key],
    });
  }

  return places;
}

export async function getFavouritePlaces() {
  const allPlaces = await getAllPlaces();
  return allPlaces.filter((place) => place.isFavourite);
}

export async function getPlaceById(id) {
  const allPlaces = await getAllPlaces();
  return allPlaces.find((place) => place.id === id);
}
