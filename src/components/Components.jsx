import React from 'react';
import './SidebarItem.css';

const SidebarItem = ({ href, children }) => {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
};

export default SidebarItem;
