import React from "react";

const Header = ({ title, changeNotification, notify }) => {

  //FUNCTION TO UPDATE MESSAGE READ
  const handleNotification = () => {
    changeNotification(0);
  };
  return (
    <>
      <nav className="header">
        <div className="notify">
          <h1 className="title">{title}</h1>
          <p className="number">{notify}</p>
        </div>
        <div>
          <p className="check-read" onClick={handleNotification}>
            Mark all as read
          </p>
        </div>
      </nav>
    </>
  );
};
export default Header;
