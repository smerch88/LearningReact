import React from "react";

class ClassMenu extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <span>Menu</span>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="index.html">Counter</a>
          </li>
          <li className="navigation__item">Feature 1</li>
          <li className="navigation__item">Feature 2</li>
          <li className="navigation__item">Feature 3</li>
        </ul>
      </nav>
    );
  }
}

export default ClassMenu;
