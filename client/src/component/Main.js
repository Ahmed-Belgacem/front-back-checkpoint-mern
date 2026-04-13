import React from 'react';
import './main.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/productSlice';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
const typeColors = {
  action: '#ff3a5c', rpg: '#8b5cf6',
  shooter: '#f59e0b', sports: '#22c55e', indie: '#00d2ff',
};

const platformColors = {
  Multi: '#6366f1', PC: '#0ea5e9',
  PS5: '#003fa3', Xbox: '#107c10', Switch: '#e60012',
};

const platformLabels = {
  Multi: '🌐 Multi-Platform',
  PC: '🖥️ PC',
  PS5: '🎮 PlayStation 5',
  Xbox: '🟢 Xbox',
  Switch: '🔴 Switch',
};

function Main() {
  const dispatch  = useDispatch();
  const games     = useSelector(state => state.product.productlist);
const favorites = useSelector(state => state.product.favorites);

  const featured = games.find(g => g.trending) || games[0];

  const counts = {
    total:   games.length,
    action:  games.filter(g => g.type === 'action').length,
    rpg:     games.filter(g => g.type === 'rpg').length,
    shooter: games.filter(g => g.type === 'shooter').length,
    sports:  games.filter(g => g.type === 'sports').length,
    indie:   games.filter(g => g.type === 'indie').length,
  };

  if (!featured) return null;


  const words = featured.title.split(' ');
  const line1 = words.length > 1 ? words.slice(0, -1).join(' ') : words[0];
  const line2 = words.length > 1 ? words[words.length - 1] : null;

const isFav = favorites.includes(featured._id);
  const typeColor  = typeColors[featured.type]      || '#00d2ff';
  const platColor  = platformColors[featured.platform] || '#6366f1';
  const platLabel  = platformLabels[featured.platform] || featured.platform;

  return (
    <section className="hero">
   
      <div className="hero__decor" />


      <div className="hero__split">

  
        <div className="hero__cover-wrap">
          <div className="hero__cover">
            <img src={featured.posterUrl} alt={featured.title} />
    
            <div className="hero__cover-scan" />
       
            <div className="hero__cover-gradient" />
          
            <div className="hero__cover-label">LiroLiro PICK</div>

     
            {featured.trending && (
              <div style={{
                position: 'absolute', top: '12px', left: '12px', zIndex: 3,
                fontFamily: "'Orbitron', monospace", fontSize: '8px', fontWeight: 700,
                letterSpacing: '1px', padding: '5px 11px', borderRadius: '4px',
                background: 'linear-gradient(90deg, #ff3a5c, #f59e0b)', color: '#fff',
                textTransform: 'uppercase',
                boxShadow: '0 0 14px rgba(255,58,92,0.5)',
              }}>🔥 TRENDING</div>
            )}

 
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
              background: `linear-gradient(to top, ${typeColor}1a, transparent)`,
              zIndex: 2, pointerEvents: 'none',
            }} />
          </div>

  
          <div className="hero__platform-row">
            <div className="hero__plat-badge" style={{
              background: `${platColor}1a`,
              borderColor: `${platColor}55`,
              color: platColor,
            }}>{platLabel}</div>
          </div>
        </div>

   
        <div className="hero__content">

          <div className="hero__system-label">
            <div className="hero__live-dot" />
            <span className="hero__system-text">NOW FEATURED / LiroLiro SELECTION</span>
          </div>

   
          <div className="hero__badges">
            <span className="badge badge--featured">⚡ FEATURED</span>
            <span className="badge badge--type" style={{
              color: typeColor,
              borderColor: `${typeColor}80`,
              background: `${typeColor}12`,
              textTransform: 'capitalize',
            }}>{featured.type}</span>
            {isFav && (
              <span className="badge badge--fav">❤ Favorite</span>
            )}
          </div>

   
          <div className="hero__title">
            <h1 className="title__line title__line--white">{line1.toUpperCase()}</h1>
            {line2 && (
              <h1 className="title__line title__line--gradient">{line2.toUpperCase()}</h1>
            )}
          </div>

      
          <div className="hero__meta">
            <ReactStars
              count={5} size={18} color2="#ffd700"
              edit={false} value={featured.rating}
            />
            <span className="meta__score">{featured.rating}/5</span>
            <span className="meta__sep" />
            <span className="meta__tag">HD</span>
            {featured.trending && <span className="meta__tag">🔥 HOT</span>}
          </div>

     
          <div className="hero__genres">
            {featured.genre?.map((g, i) => (
              <span key={i} className="genre__tag">{g}</span>
            ))}
          </div>

    
          <p className="hero__description">{featured.description}</p>

    
          <div className="hero__divider" />

       
          <div className="hero__actions">
            {featured.trailerUrl ? (
              <a
                href={featured.trailerUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--play"
              >
                <svg className="btn--play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                <span className="btn--play-label">Watch Trailer</span>
              </a>
            ) : (
              <button className="btn btn--play">
                <svg className="btn--play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                <span className="btn--play-label">Featured Game</span>
              </button>
            )}

            <Link to="/movies" className="btn btn--info">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              Browse All
            </Link>

            <button
              className={`btn btn--fav ${isFav ? 'is-fav' : 'not-fav'}`}
              onClick={() => dispatch(toggleFavorite(featured._id))}
            >
              {isFav ? '❤ Favorited' : '♡ Favorite'}
            </button>
          </div>
        </div>
      </div>

  
      <div className="hero__stats-bar">
        <div className="hero__stat">
          <span className="stat__number" style={{ color: '#e8eaf6' }}>{counts.total}</span>
          <span className="stat__label">Total Games</span>
        </div>
        <Link to="/movies" className="hero__stat">
          <span className="stat__number" style={{ color: '#ff3a5c' }}>{counts.action}</span>
          <span className="stat__label">Action</span>
        </Link>
        <Link to="/tv" className="hero__stat">
          <span className="stat__number" style={{ color: '#8b5cf6' }}>{counts.rpg}</span>
          <span className="stat__label">RPG</span>
        </Link>
        <Link to="/anime" className="hero__stat">
          <span className="stat__number" style={{ color: '#f59e0b' }}>{counts.shooter}</span>
          <span className="stat__label">Shooter</span>
        </Link>
        <div className="hero__stat">
          <span className="stat__number" style={{ color: '#22c55e' }}>{counts.sports}</span>
          <span className="stat__label">Sports</span>
        </div>
        <div className="hero__stat">
          <span className="stat__number" style={{ color: '#00d2ff' }}>{counts.indie}</span>
          <span className="stat__label">Indie</span>
        </div>
      </div>
    </section>
  );
}

export default Main;
