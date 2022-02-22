const DUMMY_PLACES = [
  {
    id: '1',
    place: 'Istanbul, Turkey',
    description:
      'In fermentum nisl nulla, eget eleifend nulla egestas a. Maecenas maximus viverra est. Praesent tellus nulla, ornare et erat et, pretium euismod nunc. Fusce laoreet massa dictum, egestas turpis non, porttitor felis. Vivamus suscipit mi sit amet cursus porta. Nunc efficitur pellentesque metus quis aliquam. Proin purus quam, pellentesque et.',
    body: 'Curabitur tristique purus ut nulla mollis eleifend. Aenean rutrum venenatis blandit. Sed semper est quis purus egestas, vitae condimentum dui rutrum." "Vivamus id sapien molestie, euismod tellus et, convallis sapien. Aenean iaculis felis id nisl euismod, non iaculis libero porttitor. Proin et arcu non tellus fermentum ultricies ac in massa. Donec viverra facilisis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sollicitudin et lectus vel iaculis. Proin vel ullamcorper ipsum, non tristique orci. Ut nec auctor velit. Sed fringilla nisl non nisi sagittis, vitae congue ante auctor. Etiam molestie leo sed augue lacinia vestibulum. Quisque convallis ultricies maximus. Proin in aliquam neque, vel luctus orci. Sed eget lacinia ex. Sed a arcu egestas, auctor nisl id, blandit neque. Aenean pretium est arcu. Phasellus at dui felis. Sed gravida felis vel nisi sodales, sit amet accumsan massa consectetur. Vestibulum quis feugiat metus, sed rutrum ex. Nulla facilisi. Maecenas congue hendrerit justo quis mattis. Sed nec viverra ligula, a varius ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Nulla gravida, arcu at dapibus aliquam, dolor tortor iaculis turpis, ut semper turpis leo a turpis. Integer quis augue ac justo accumsan tempus. Donec gravida maximus ante et blandit. Phasellus id aliquet mi. Phasellus vestibulum nibh vel metus cursus porttitor. Cras commodo, lorem id scelerisque pellentesque, libero nulla vehicula lorem, sed consequat libero orci sed velit. Duis condimentum turpis sapien, sit amet luctus leo eleifend at. Cras a purus ante. Donec tempus est et tristique tristique. Sed vel elit a ante pretium tincidunt non eleifend massa. Aliquam sit amet vulputate lacus, consectetur interdum orci.',
    date: '2021-05-12',
    image: '/istanbul.jpg',
    isFavourite: false,
  },
  {
    id: '2',
    place: 'Melbourne, Australia',
    description:
      'In fermentum nisl nulla, eget eleifend nulla egestas a. Maecenas maximus viverra est. Praesent tellus nulla, ornare et erat et, pretium euismod nunc. Fusce laoreet massa dictum, egestas turpis non, porttitor felis. Vivamus suscipit mi sit amet cursus porta. Nunc efficitur pellentesque metus quis aliquam. Proin purus quam, pellentesque et.',
    body: 'Curabitur tristique purus ut nulla mollis eleifend. Aenean rutrum venenatis blandit. Sed semper est quis purus egestas, vitae condimentum dui rutrum." "Vivamus id sapien molestie, euismod tellus et, convallis sapien. Aenean iaculis felis id nisl euismod, non iaculis libero porttitor. Proin et arcu non tellus fermentum ultricies ac in massa. Donec viverra facilisis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sollicitudin et lectus vel iaculis. Proin vel ullamcorper ipsum, non tristique orci. Ut nec auctor velit. Sed fringilla nisl non nisi sagittis, vitae congue ante auctor. Etiam molestie leo sed augue lacinia vestibulum. Quisque convallis ultricies maximus. Proin in aliquam neque, vel luctus orci. Sed eget lacinia ex. Sed a arcu egestas, auctor nisl id, blandit neque. Aenean pretium est arcu. Phasellus at dui felis. Sed gravida felis vel nisi sodales, sit amet accumsan massa consectetur. Vestibulum quis feugiat metus, sed rutrum ex. Nulla facilisi. Maecenas congue hendrerit justo quis mattis. Sed nec viverra ligula, a varius ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Nulla gravida, arcu at dapibus aliquam, dolor tortor iaculis turpis, ut semper turpis leo a turpis. Integer quis augue ac justo accumsan tempus. Donec gravida maximus ante et blandit. Phasellus id aliquet mi. Phasellus vestibulum nibh vel metus cursus porttitor. Cras commodo, lorem id scelerisque pellentesque, libero nulla vehicula lorem, sed consequat libero orci sed velit. Duis condimentum turpis sapien, sit amet luctus leo eleifend at. Cras a purus ante. Donec tempus est et tristique tristique. Sed vel elit a ante pretium tincidunt non eleifend massa. Aliquam sit amet vulputate lacus, consectetur interdum orci.',
    date: '2021-05-30',
    image: '/melbourne.jpg',
    isFavourite: true,
  },
  {
    id: '3',
    place: 'Lviv, Ukraine',
    description:
      'In fermentum nisl nulla, eget eleifend nulla egestas a. Maecenas maximus viverra est. Praesent tellus nulla, ornare et erat et, pretium euismod nunc. Fusce laoreet massa dictum, egestas turpis non, porttitor felis. Vivamus suscipit mi sit amet cursus porta. Nunc efficitur pellentesque metus quis aliquam. Proin purus quam, pellentesque et.',
    body: 'Curabitur tristique purus ut nulla mollis eleifend. Aenean rutrum venenatis blandit. Sed semper est quis purus egestas, vitae condimentum dui rutrum." "Vivamus id sapien molestie, euismod tellus et, convallis sapien. Aenean iaculis felis id nisl euismod, non iaculis libero porttitor. Proin et arcu non tellus fermentum ultricies ac in massa. Donec viverra facilisis tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sollicitudin et lectus vel iaculis. Proin vel ullamcorper ipsum, non tristique orci. Ut nec auctor velit. Sed fringilla nisl non nisi sagittis, vitae congue ante auctor. Etiam molestie leo sed augue lacinia vestibulum. Quisque convallis ultricies maximus. Proin in aliquam neque, vel luctus orci. Sed eget lacinia ex. Sed a arcu egestas, auctor nisl id, blandit neque. Aenean pretium est arcu. Phasellus at dui felis. Sed gravida felis vel nisi sodales, sit amet accumsan massa consectetur. Vestibulum quis feugiat metus, sed rutrum ex. Nulla facilisi. Maecenas congue hendrerit justo quis mattis. Sed nec viverra ligula, a varius ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Nulla gravida, arcu at dapibus aliquam, dolor tortor iaculis turpis, ut semper turpis leo a turpis. Integer quis augue ac justo accumsan tempus. Donec gravida maximus ante et blandit. Phasellus id aliquet mi. Phasellus vestibulum nibh vel metus cursus porttitor. Cras commodo, lorem id scelerisque pellentesque, libero nulla vehicula lorem, sed consequat libero orci sed velit. Duis condimentum turpis sapien, sit amet luctus leo eleifend at. Cras a purus ante. Donec tempus est et tristique tristique. Sed vel elit a ante pretium tincidunt non eleifend massa. Aliquam sit amet vulputate lacus, consectetur interdum orci.',
    date: '2022-04-10',
    image: '/lviv.jpg',
    isFavourite: true,
  },
];

export function getFavouritePlaces() {
  return DUMMY_PLACES.filter((place) => place.isFavourite);
}

export function getAllPlaces() {
  return DUMMY_PLACES;
}

export function getFilteredPlaces(dateFilter) {
  const { year, month } = dateFilter;

  let filteredPlaces = DUMMY_PLACES.filter((place) => {
    const placeDate = new Date(place.date);
    return (
      placeDate.getFullYear() === year && placeDate.getMonth() === month - 1
    );
  });

  return filteredPlaces;
}

export function getPlaceById(id) {
  return DUMMY_PLACES.find((place) => place.id === id);
}
