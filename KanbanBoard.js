import React, { useState, useEffect } from "react";
import Column from "./Column";
import Controls from "./Controls";
import { groupByStatus, groupByPriority, groupByUser } from "./groupUtils";
import { sortByPriority, sortByTitle } from "./sortUtils";
import "./KanbanBoard.css";

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem("grouping") || "status");
  const [sortMethod, setSortMethod] = useState(localStorage.getItem("sortMethod") || null);
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("sortMethod", sortMethod);
  }, [grouping, sortMethod]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    let newGroupedTickets = {};
    switch (grouping) {
      case "status":
        newGroupedTickets = groupByStatus(tickets);
        break;
      case "priority":
        newGroupedTickets = groupByPriority(tickets);
        break;
      case "user":
        newGroupedTickets = groupByUser(tickets, users);
        break;
      default:
        newGroupedTickets = groupByStatus(tickets);
    }
    if (sortMethod) {
      Object.keys(newGroupedTickets).forEach((group) => {
        if (sortMethod === "priority") {
          newGroupedTickets[group] = sortByPriority(newGroupedTickets[group]);
        } else if (sortMethod === "title") {
          newGroupedTickets[group] = sortByTitle(newGroupedTickets[group]);
        }
      });
    }
    setGroupedTickets(newGroupedTickets);
  }, [tickets, users, grouping, sortMethod]);

  const handleGroupChange = (newGrouping) => {
    setGrouping(newGrouping);
  };

  const handleSortChange = (method) => {
    setSortMethod(method);
  };

  const onAddCard = (columnTitle, newCardId, newCardTitle, newCardTag, userId, priority) => {
    const newCard = {
      id: newCardId,
      title: newCardTitle,
      tag: [newCardTag],
      userId: userId,
      priority: parseInt(priority, 10),
      status: columnTitle,
      // Add other fields as needed
    };
    setTickets(prevTickets => [...prevTickets, newCard]);
  };

  return (
    <div className="kanbanBoard">
      <Controls onGroupChange={handleGroupChange} onSortChange={handleSortChange} />
      <div className="columnContainer">
        {Object.keys(groupedTickets).map((group) => (
          <Column key={group} title={group} tickets={groupedTickets[group]} onAddCard={onAddCard} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
