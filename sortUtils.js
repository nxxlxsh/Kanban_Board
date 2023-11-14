export const sortByPriority = (tickets) => {
  return tickets.slice().sort((a, b) => b.priority - a.priority);
};

export const sortByTitle = (tickets) => {
  return tickets.slice().sort((a, b) => a.title.localeCompare(b.title));
};
