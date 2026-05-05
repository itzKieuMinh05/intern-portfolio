import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { createLogger } from 'vite';

// const logger = createLogger('navbar');

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActivebox = () => {
    if (lastActiveLink.current && activeBox.current) {
      const link = lastActiveLink.current;
      activeBox.current.style.top = link.offsetTop + 'px';
      activeBox.current.style.left = link.offsetLeft + 'px';
      activeBox.current.style.width = link.offsetWidth + 'px';
      activeBox.current.style.height = link.offsetHeight + 'px';
    }
  };

  useEffect(initActivebox, []);
  window.addEventListener('resize', initActivebox);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    if (activeBox.current) {
      const link = lastActiveLink.current;
      activeBox.current.style.top = event.target.offsetTop + 'px';
      activeBox.current.style.left = event.target.offsetLeft + 'px';
      activeBox.current.style.width = event.target.offsetWidth + 'px';
      activeBox.current.style.height = event.target.offsetHeight + 'px';
    }
  };

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link active' },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Education', link: '#education', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' },
  ];

  return (
    <nav className={'navbar' + (navOpen ? ' active' : '')}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={className.includes('active') ? lastActiveLink : null}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
