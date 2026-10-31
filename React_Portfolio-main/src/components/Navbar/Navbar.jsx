import './Navbar.css';
import nav_underline from '../../assets/nav_underline.svg';
import { useState, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef(null);
  const openMenu = () => { if (menuRef.current) menuRef.current.style.right = '0'; };
  const closeMenu = () => { if (menuRef.current) menuRef.current.style.right = '-350px'; };
  const links = [
    ['home', 'Home', '#home'],
    ['about', 'About', '#about'],
    ['experience', 'Experience', '#experience'],
    ['work', 'Work', '#work'],
    ['education', 'Education', '#education'],
    ['contact', 'Contact', '#contact']
  ];
  return (
    <div className="navbar">
      <img src={logo} alt="Annalakshmi logo" />
      <img src={menu_open} onClick={openMenu} alt="Open menu" className="nav-mob-open" />
      <ul ref={menuRef} onClick={closeMenu} className="nav-menu">
        <img src={menu_close} alt="Close menu" className="nav-mob-close" />
        {links.map(([id, label, href]) => (
          <li key={id}>
            <AnchorLink className="anchor" offset={50} href={href}>
              <p onClick={() => setMenu(id)}>{label}</p>
            </AnchorLink>
            {menu === id ? <img src={nav_underline} alt="" /> : null}
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor" offset={50} href="#contact">Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
