import React, { useState } from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`sidebar ${active ? 'active' : ''}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <ul>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <SidebarItem href="./nutritioncheck.html">Nutrition Check</SidebarItem>
        <SidebarItem href="./reportscan.html">Report Scan</SidebarItem>
        <SidebarItem href="./aboutus.html">About Us</SidebarItem>
      </ul>
    </div>
  );
};

export default Sidebar;
