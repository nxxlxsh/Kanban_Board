import React, { useState } from "react";
import TicketCard from "./TicketCard"; // Assuming you have this component
import "./Column.css"; // Your existing CSS file for the column

const Column = ({ title, tickets = [], onAddCard }) => {
  const [showForm, setShowForm] = useState(false);
  const [newCardId, setNewCardId] = useState("");
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardTag, setNewCardTag] = useState("");
  const [newCardUserId, setNewCardUserId] = useState("");
  const [newCardPriority, setNewCardPriority] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddCard(title, newCardId, newCardTitle, newCardTag, newCardUserId, newCardPriority);
    // Reset form fields and hide the form
    setNewCardId("");
    setNewCardTitle("");
    setNewCardTag("");
    setShowForm(false);
  };

  return (
    <div className="column">
      <div className="column-header">
        {title} ({tickets.length})
        <button className="add-card-button" onClick={() => setShowForm(true)}>
          +
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleFormSubmit} className="add-card-form">
          <input
            type="text"
            placeholder="Card ID"
            value={newCardId}
            onChange={(e) => setNewCardId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Card Title"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Card Tag"
            value={newCardTag}
            onChange={(e) => setNewCardTag(e.target.value)}
          />
          <input
            type="text"
            placeholder="User ID"
            value={newCardUserId}
            onChange={(e) => setNewCardUserId(e.target.value)}
          />
          <input
            type="number"
            placeholder="Priority"
            value={newCardPriority}
            onChange={(e) => setNewCardPriority(e.target.value)}
          />
          <button type="submit">Add Card</button>
        </form>
      )}
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
