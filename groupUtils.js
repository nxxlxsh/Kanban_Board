export const groupByStatus = (tickets) => {
  const statusGroups = {
    Backlog: [],
    Todo: [],
    "In Progress": [],
    Done: [],
    Cancelled: []
  };
  tickets.forEach((ticket) => {
    // Assuming ticket.status holds the status of each ticket
    const status = statusGroups.hasOwnProperty(ticket.status)
      ? ticket.status
      : "Backlog";
    statusGroups[status].push(ticket);
  });
  return statusGroups;
};

export const groupByPriority = (tickets) => {
  const priorityGroups = {
    Urgent: [],
    High: [],
    Medium: [],
    Low: [],
    "No priority": []
  };
  tickets.forEach((ticket) => {
    // Assuming ticket.priority is a number from 0 to 4
    switch (ticket.priority) {
      case 4:
        priorityGroups["Urgent"].push(ticket);
        break;
      case 3:
        priorityGroups["High"].push(ticket);
        break;
      case 2:
        priorityGroups["Medium"].push(ticket);
        break;
      case 1:
        priorityGroups["Low"].push(ticket);
        break;
      case 0:
      default:
        priorityGroups["No priority"].push(ticket);
    }
  });
  return priorityGroups;
};

export const groupByUser = (tickets, users) => {
  // Create a map of userId to userName for quick lookup
  const userNameMap = users.reduce((acc, user) => {
    acc[user.id] = user.name; // Assuming 'id' is the unique identifier for a user
    return acc;
  }, {});

  // Group tickets by the userId, matching with userName
  const userGroups = tickets.reduce((acc, ticket) => {
    // Match the userId from the ticket with the userName from the map
    const userName = userNameMap[ticket.userId]; // Use 'userId' to match
    if (userName) {
      // Check if a userName was found
      if (!acc[userName]) {
        acc[userName] = [];
      }
      acc[userName].push(ticket);
    } else {
      // If no user is found for the ticket, place it in 'Unassigned'
      const unassignedGroup = "Unassigned";
      if (!acc[unassignedGroup]) {
        acc[unassignedGroup] = [];
      }
      acc[unassignedGroup].push(ticket);
    }
    return acc;
  }, {});

  return userGroups;
};
