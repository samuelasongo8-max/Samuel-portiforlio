export const createEventSchema = ({ name, startDate, location }) => {
  if (!name || !startDate || !location) {
    throw new Error('An event requires a name, startDate, and location.');
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    startDate,
    location: { '@type': 'Place', name: location },
    performer: { '@type': 'Person', name: 'Samuel Asongo' },
  };
};
