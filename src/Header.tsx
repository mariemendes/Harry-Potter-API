// import React from 'react';
import { Link } from "react-router-dom";
import List from './components/list'

function Header() {
  const headerItems = [
    { label: "Spells", path: "/spells" },
    { label: "Houses", path: "/houses" },
    { label: "Characters", path: "/characters" },
    { label: "Books", path: "/books" }
  ];


  return (
    <header>
      <List 
        className="header"
        items={headerItems}
        renderItem={(item) => (
          <Link to={item.path}>{item.label}</Link>
        )}
      />
    </header>
  )
};

export default Header;