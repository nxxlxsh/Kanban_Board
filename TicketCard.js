import React, { useSyncExternalStore } from "react";
import "./TicketCard.css";

const TicketCard = ({ ticket }) => {
  // Adding safe checks for ticket properties
  const ticketType = ticket.type ? ticket.type.toLowerCase() : "";
  const ticketId = ticket.id || "N/A";
  const ticketTitle = ticket.title || "No Title";
  const assignedToImage =
    ticket.assignedTo && ticket.assignedTo.image
      ? ticket.assignedTo.image
      : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F26619142-default-avatar-profile-icon-vector-of-social-media-user-photo-image&psig=AOvVaw3pZe_CimTSHEXM5Yg8mh2O&ust=1699997047731000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCLikjNT0wYIDFQAAAAAdAAAAABAE"; // Use a default avatar if none is provided
  const assignedToName =
    ticket.assignedTo && ticket.assignedTo.name
      ? ticket.assignedTo.name
      : "Unassigned";

  return (
    <div className="ticketCard">
      <div className="ticketHeader">
        <span className="ticketId">{ticketId}</span>
      </div>
      <div>
        <span className="ticketTitle">{ticketTitle}</span>
      </div>
      <div className="ticketFooter">
        <span className={`ticketType ${ticketType}`}>
          {ticket.tag || "No Type"}
        </span>
        <div className="ticketUser">
          {/* <img src={assignedToImage} alt={assignedToName} className="userImage" /> */}
          <span className="userName">{useSyncExternalStore}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
