import React from 'react';
import GameCard from './GameCard';

function List({ movies, text, rate }) {

  const displayed =
    rate === 1
      ? [...movies.filter(el => el.title.toLowerCase().includes(text.toLowerCase()))].reverse()
      : [...movies.filter(el =>
          el.title.toLowerCase().includes(text.toLowerCase()) && el.rating === rate
        )].reverse();

  return (
    <div style={{ width: '100%' }}>

  
      <div className="section-meta">
        {displayed.length > 0 && (
          <span className="section-count">
            {displayed.length} {displayed.length === 1 ? 'GAME' : 'GAMES'}
          </span>
        )}
        {displayed.length === 0 && text && (
          <span className="section-count" style={{ color: 'rgba(255,58,92,0.65)', borderColor: 'rgba(255,58,92,0.18)' }}>
            0 RESULTS FOR "{text.toUpperCase()}"
          </span>
        )}
        <div className="section-line" />
      </div>

  
      <div className="parent">
        {displayed.length > 0 ? (
          displayed.map(el => (
            <GameCard key={el._id} el={el} />
          ))
        ) : (
          <div className="games-empty">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
              <line x1="9" y1="9" x2="9" y2="11" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="8" y1="10" x2="10" y2="10" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="15" cy="10" r="0.9" fill="currentColor" />
              <circle cx="17" cy="10" r="0.9" fill="currentColor" />
            </svg>
            {text ? `No games match "${text}"` : 'No games found'}
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
