import React, { useState } from "react";
import Logo from "../../media/logo/logo.png";


const TopBar = () => {
  const notificationCount = 1;
  const [menu, setMenu] = useState(1);
  return (
    <div className="top-bar">
      {/* ---------- */}
      {/* Logo */}
      <div className="logo-top">
        <img src={Logo} alt="Logo" />
      </div>
      

    </div>
  );
};

export default TopBar;
