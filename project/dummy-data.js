const DUMMY_EVENTS = [
  {
    id: 'e1',
    place: 'Istanbul, Turkey',
    description:
      'In fermentum nisl nulla, eget eleifend nulla egestas a. Maecenas maximus viverra est. Praesent tellus nulla, ornare et erat et, pretium euismod nunc. Fusce laoreet massa dictum, egestas turpis non, porttitor felis. Vivamus suscipit mi sit amet cursus porta. Nunc efficitur pellentesque metus quis aliquam. Proin purus quam, pellentesque et.',
    date: '2021-05-12',
    image: '/istanbul.jpg',
    isFavourite: true,
  },
  {
    id: 'e2',
    place: 'Melbourne, Australia',
    description:
      'In fermentum nisl nulla, eget eleifend nulla egestas a. Maecenas maximus viverra est. Praesent tellus nulla, ornare et erat et, pretium euismod nunc. Fusce laoreet massa dictum, egestas turpis non, porttitor felis. Vivamus suscipit mi sit amet cursus porta. Nunc efficitur pellentesque metus quis aliquam. Proin purus quam, pellentesque et.',
    date: '2021-05-30',
    image: '/melbourne.jpg',
    isFavourite: true,
  },
  {
    id: 'e3',
    place: 'Lviv, Ukraine',
    description:
      'In fermentum nisl nulla, eget eleifend nulla egestas a. Maecenas maximus viverra est. Praesent tellus nulla, ornare et erat et, pretium euismod nunc. Fusce laoreet massa dictum, egestas turpis non, porttitor felis. Vivamus suscipit mi sit amet cursus porta. Nunc efficitur pellentesque metus quis aliquam. Proin purus quam, pellentesque et.',
    date: '2022-04-10',
    image: '/lviv.jpg',
    isFavourite: true,
  },
];

export function getFavouritePlaces() {
  return DUMMY_EVENTS.filter((place) => place.isFavourite);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
