import React, { useState } from 'react';
import ReactStars from 'react-stars';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, deleteProduct } from '../redux/productSlice';
import EditGame from './EditGame';

function GameCard({ el }) {
  const dispatch  = useDispatch();
  const favorites = useSelector(state => state.product.favorites);
  const isFav     = favorites.includes(el._id);

  const [show, setShow]           = useState(false);
  const [activeTab, setActiveTab] = useState('info');

  const handleOpen   = () => { setActiveTab('info'); setShow(true);  };
  const handleClose  = () => { setActiveTab('info'); setShow(false); };
  const handleRemove = () => { dispatch(deleteProduct(el._id)); handleClose(); };
  const handleFav    = (e) => { e.stopPropagation(); dispatch(toggleFavorite(el._id)); };


  const typeColors = {
    action: '#ff3a5c', rpg: '#8b5cf6',
    shooter: '#f59e0b', sports: '#22c55e', indie: '#00d2ff',
  };
  const platformColors = {
    Multi: '#6366f1', PC: '#0ea5e9',
    PS5: '#003fa3', Xbox: '#107c10', Switch: '#e60012',
  };

  const typeColor     = typeColors[el.type]         || '#00d2ff';
  const platformColor = platformColors[el.platform] || '#6366f1';

  const tabStyle = (tab) => ({
    padding: '11px 24px',
    border: 'none',
    borderBottom: activeTab === tab ? `2px solid #00d2ff` : '2px solid transparent',
    background: 'transparent',
    color: activeTab === tab ? '#00d2ff' : 'rgba(180,190,230,0.35)',
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: activeTab === tab ? 700 : 600,
    fontSize: '12px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.2s',
  });

  return (
    <>

      <div className="poster" onClick={handleOpen}>

  
        <div className="poster-img">
          <img src={el.posterUrl} alt={el.title} loading="lazy" />
          <div className="poster-overlay" />
        </div>

      
        <div className="card-rating-badge">
          ★ {el.rating}
        </div>

  
        <div className="card-badge-top">
          <span className="card-type-pill" style={{ background: `${typeColor}cc` }}>
            {el.type}
          </span>
        </div>

  
        {el.trending && <div className="card-trending-flag">🔥 HOT</div>}
        {isFav       && <div className="card-fav-flag">❤</div>}

      
        <div className="poster-hint">
          <span className="poster-hint__pill">View Details</span>
        </div>

    
        <div className="poster-bottom">
          <h2 className="poster-title">{el.title}</h2>
          <p  className="poster-desc">{el.description}</p>
          <div className="poster-footer">
            <ReactStars count={5} size={12} color2="#ffd700" edit={false} value={el.rating} />
            {el.platform && (
              <span style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: '9px', letterSpacing: '0.8px',
                color: platformColor,
                marginLeft: 'auto',
              }}>{el.platform}</span>
            )}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="xl" centered contentClassName="border-0 bg-transparent shadow-none">
        <div style={{
          display: 'flex',
          background: 'radial-gradient(ellipse at top left, #0e0e24 0%, #08080f 55%, #030308 100%)',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(0,210,255,0.14)',
          minHeight: '520px',
          boxShadow: '0 40px 100px rgba(0,0,0,0.92)',
        }}>

       
          <div style={{ width: '260px', flexShrink: 0, position: 'relative', background: '#05050d' }}>
            <img
              src={el.posterUrl}
              alt={el.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 55%, #08080f 100%)',
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
              background: 'linear-gradient(to top, #08080f, transparent)',
            }} />

           
            <div style={{
              position: 'absolute', top: '14px', left: '14px',
              fontFamily: "'Orbitron', monospace", fontSize: '9px', fontWeight: 700,
              letterSpacing: '1.2px', padding: '5px 12px', borderRadius: '5px',
              textTransform: 'uppercase', background: typeColor, color: '#fff',
              boxShadow: `0 0 16px ${typeColor}55`,
            }}>{el.type}</div>

        
            {isFav && (
              <div style={{
                position: 'absolute', top: '48px', left: '14px',
                fontSize: '14px',
                filter: 'drop-shadow(0 0 6px rgba(255,80,120,0.9))',
              }}>❤</div>
            )}

       
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '28px', height: '28px',
              borderTop: '2px solid rgba(0,210,255,0.50)',
              borderLeft: '2px solid rgba(0,210,255,0.50)',
              borderRadius: '14px 0 0 0',
            }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, width: '28px', height: '28px',
              borderBottom: '2px solid rgba(124,58,237,0.50)',
              borderLeft: '2px solid rgba(124,58,237,0.50)',
            }} />
          </div>

       
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      
            <div style={{
              padding: '22px 24px 18px',
              borderBottom: '1px solid rgba(0,210,255,0.07)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            }}>
              <div style={{ flex: 1, paddingRight: '14px' }}>
                <h3 style={{
                  fontFamily: "'Orbitron', monospace", fontSize: '1.35rem', fontWeight: 900,
                  color: '#fff', margin: '0 0 8px', letterSpacing: '1px',
                }}>{el.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <ReactStars count={5} size={16} color2="#ffd700" edit={false} value={el.rating} />
                  <span style={{
                    fontFamily: "'Share Tech Mono', monospace", fontSize: '12px', color: '#ffd700',
                  }}>{el.rating}/5</span>
                  {el.trending && (
                    <span style={{
                      fontFamily: "'Orbitron', monospace", fontSize: '8px', fontWeight: 700,
                      letterSpacing: '1px', padding: '3px 9px', borderRadius: '4px',
                      background: 'linear-gradient(90deg, #ff3a5c, #f59e0b)', color: '#fff',
                    }}>🔥 TRENDING</span>
                  )}
                </div>
              </div>

              <button
                onClick={handleClose}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: '8px', width: '34px', height: '34px',
                  color: '#8090b0', cursor: 'pointer', fontSize: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', flexShrink: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,210,255,0.10)';
                  e.currentTarget.style.borderColor = 'rgba(0,210,255,0.35)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                  e.currentTarget.style.color = '#8090b0';
                }}
              >✕</button>
            </div>

    
            <div style={{
              display: 'flex',
              background: 'rgba(0,0,0,0.25)',
              borderBottom: '1px solid rgba(0,210,255,0.06)',
            }}>
              <button style={tabStyle('info')}    onClick={() => setActiveTab('info')}>🎮 Game Info</button>
              <button style={tabStyle('trailer')} onClick={() => setActiveTab('trailer')}>▶ Trailer</button>
            </div>

    
            <div style={{ flex: 1, padding: '20px 24px', overflowY: 'auto', scrollbarWidth: 'none' }}>

              {activeTab === 'info' && (
                <div>
              
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap',
                    fontFamily: "'Rajdhani', sans-serif", fontSize: '12px',
                    fontWeight: 600, color: 'rgba(180,195,230,0.48)',
                    marginBottom: '14px', letterSpacing: '0.3px',
                  }}>
                    {el.genre?.map((g, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && (
                          <span style={{
                            width: '4px', height: '4px',
                            background: 'rgba(0,210,255,0.40)',
                            borderRadius: '50%', display: 'inline-block',
                          }} />
                        )}
                        {g}
                      </React.Fragment>
                    ))}
                  </div>

               
                  <p style={{
                    fontFamily: "'Rajdhani', sans-serif", fontSize: '15px', fontWeight: 500,
                    color: 'rgba(200,215,240,0.76)', lineHeight: '1.72',
                    margin: '0 0 20px', maxWidth: '520px',
                  }}>{el.description}</p>

            
                  {el.platform && (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px',
                      fontFamily: "'Rajdhani', sans-serif", fontSize: '13px',
                      fontWeight: 600, color: 'rgba(180,190,230,0.45)',
                    }}>
                      <span>Available on:</span>
                      <span style={{
                        background: platformColor, color: '#fff',
                        padding: '4px 12px', borderRadius: '4px',
                        fontFamily: "'Orbitron', monospace",
                        fontSize: '9px', fontWeight: 700, letterSpacing: '0.8px',
                      }}>
                        {el.platform === 'Multi' ? 'PC · PS5 · XBOX · SWITCH' : el.platform.toUpperCase()}
                      </span>
                    </div>
                  )}

               
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>

                    <button
                      onClick={() => setActiveTab('trailer')}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        background: 'linear-gradient(135deg, #00d2ff, #7c3aed)',
                        border: 'none', borderRadius: '8px', padding: '11px 20px',
                        cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,210,255,0.22)',
                        transition: 'opacity 0.2s, transform 0.15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.opacity='0.88'; e.currentTarget.style.transform='scale(1.02)'; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity='1'; e.currentTarget.style.transform='scale(1)'; }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                      <span style={{
                        fontFamily: "'Rajdhani', sans-serif", fontSize: '12.5px',
                        fontWeight: 800, color: '#fff', letterSpacing: '0.6px',
                        textTransform: 'uppercase',
                      }}>Watch Trailer</span>
                    </button>

                    <button
                      onClick={handleFav}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        background: isFav ? 'rgba(255,80,120,0.14)' : 'rgba(18,18,36,0.85)',
                        border: isFav ? '1px solid rgba(255,80,120,0.48)' : '1px solid rgba(255,255,255,0.10)',
                        borderRadius: '8px', padding: '11px 18px',
                        color: isFav ? '#ff6b8a' : '#c0c8e0',
                        fontFamily: "'Rajdhani', sans-serif", fontSize: '12.5px',
                        fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform='scale(1.02)'}
                      onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                    >
                      {isFav ? '❤ Favorited' : '♡ Add to Favorites'}
                    </button>

                    <EditGame el={el} onClose={handleClose} />

                    <button
                      onClick={handleRemove}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        background: 'rgba(255,58,92,0.07)',
                        border: '1px solid rgba(255,58,92,0.22)',
                        borderRadius: '8px', padding: '11px 18px',
                        color: '#ff3a5c',
                        fontFamily: "'Rajdhani', sans-serif", fontSize: '12.5px',
                        fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background='rgba(255,58,92,0.16)'; e.currentTarget.style.transform='scale(1.02)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background='rgba(255,58,92,0.07)'; e.currentTarget.style.transform='scale(1)'; }}
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'trailer' && (
                el.trailerUrl ? (
                  <div style={{
                    position: 'relative', paddingBottom: '56.25%', height: 0,
                    borderRadius: '10px', overflow: 'hidden',
                    border: '1px solid rgba(0,210,255,0.10)',
                    boxShadow: '0 0 32px rgba(0,0,0,0.6)',
                  }}>
                    <iframe
                      src={el.trailerUrl}
                      title={`${el.title} Trailer`}
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    />
                  </div>
                ) : (
                  <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', height: '200px', gap: '14px',
                    color: 'rgba(180,190,230,0.25)',
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                    <span style={{
                      fontFamily: "'Rajdhani', sans-serif", fontSize: '13px',
                      fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
                    }}>No trailer available</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default GameCard;