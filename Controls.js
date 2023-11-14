import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Controls.css";

const Controls = ({ onGroupChange, onSortChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showGroupingOptions, setShowGroupingOptions] = useState(false);
  const [showSortingOptions, setShowSortingOptions] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    // Close other dropdowns
    setShowGroupingOptions(false);
    setShowSortingOptions(false);
  };

  const toggleGroupingOptions = () => {
    setShowGroupingOptions(!showGroupingOptions);
    setShowSortingOptions(false);
  };

  const toggleSortingOptions = () => {
    setShowSortingOptions(!showSortingOptions);
    setShowGroupingOptions(false);
  };

  return (
    <div className="controls">
      <button onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faSlidersH} />
        <span>Display</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown-section">
            <button onClick={toggleGroupingOptions}>
              <span>Grouping</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            {showGroupingOptions && (
              <div className="sub-dropdown">
                <button onClick={() => onGroupChange("status")}>Status</button>
                <button onClick={() => onGroupChange("user")}>User</button>
                <button onClick={() => onGroupChange("priority")}>
                  Priority
                </button>
              </div>
            )}
          </div>
          <div className="dropdown-section">
            <button onClick={toggleSortingOptions}>
              <span>Sorting</span>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            {showSortingOptions && (
              <div className="sub-dropdown">
                <button onClick={() => onSortChange("priority")}>
                  Priority
                </button>
                <button onClick={() => onSortChange("title")}>Title</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Controls;
