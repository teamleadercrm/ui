import React from 'react';
import s from './styles.css';

const Navigation = () => (
  <nav className={s.navigation}>
    <ul>
      <li><a href="#buttons">Buttons</a></li>
      <li><a href="#popovers">Popovers</a></li>
      <li><a href="#menus">Menus</a></li>
      <li><a href="#dialogs">Dialogs</a></li>
      <li><a href="#toasts">Toasts</a></li>
      <li><a href="#loading-molecules">Loading molecules</a></li>
    </ul>
  </nav>
);

export default Navigation;
