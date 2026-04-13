import React from 'react';
import './navbar.css';
import ReactStars from 'react-stars';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ settext, setrate }) {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? 'navbar__link navbar__link--active' : 'navbar__link';

  return (
    <nav className="navbar">
      <div className="navbar__left">

    
        <Link to="/" className="navbar__logo" style={{ textDecoration: 'none' }}>
          Liro<span className="navbar__logo-mix">Liro</span>
        </Link>

        <ul className="navbar__links">
          <li><Link to="/"       className={isActive('/')}       style={{ textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/movies" className={isActive('/movies')} style={{ textDecoration: 'none' }}>Action</Link></li>
          <li><Link to="/tv"     className={isActive('/tv')}     style={{ textDecoration: 'none' }}>RPG</Link></li>
          <li><Link to="/anime"  className={isActive('/anime')}  style={{ textDecoration: 'none' }}>Shooter</Link></li>
          <li><Link to="/new"    className={isActive('/new')}    style={{ textDecoration: 'none' }}>New & Hot</Link></li>
        </ul>
      </div>

      <div className="navbar__right">
    
        <div className="navbar__stars">
          <span className="navbar__stars-label">FILTER</span>
          <ReactStars
            count={5}
            size={20}
            color2="#ffd700"
            color1="rgba(255,215,0,0.18)"
            onChange={(r) => setrate(r)}
          />
        </div>

     
        <div className="navbar__search">
          <svg className="search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            placeholder="Search games..."
            className="search__input"
            onChange={e => settext(e.target.value)}
          />
        </div>

       
        <div className="navbar__bell">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="bell__dot" />
        </div>

   
        <Link to="/admin"       style={{ textDecoration: 'none' }}>
        <button className="navbar__profile">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          
          <span>Admin</span>
        </button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
