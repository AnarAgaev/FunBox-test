const routing = (history, method, location) => {
  return {
    type: 'ROUTING',
    history: history,
    method: method,
    location: location
  };
};

export default routing;