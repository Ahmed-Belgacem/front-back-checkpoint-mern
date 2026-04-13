import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editProduct } from '../redux/productSlice';

const S = {
  label: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '11px',
    fontWeight: 800,
    color: 'rgba(200,200,220,0.5)',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    marginBottom: '6px',
    display: 'block',
  },
  input: {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: '#e0e0f0',
    fontFamily: "'Nunito', sans-serif",
    fontSize: '14px',
    fontWeight: 500,
    padding: '10px 14px',
    outline: 'none',
    transition: 'border 0.2s, background 0.2s',
  },
  field: {
    marginBottom: '16px',
  },
};

const typeColors = {
  action:  '#e8003d',
  rpg:     '#7c3aed',
  shooter: '#f59e0b',
  sports:  '#22c55e',
  indie:   '#06b6d4',
};

function EditGame({ el, onClose, ping, setping }) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [edited, setEdited] = useState({
    title:       el.title       || '',
    description: el.description || '',
    posterUrl:   el.posterUrl   || '',
    trailerUrl:  el.trailerUrl  || '',
    rating:      el.rating      || '',
    genre:       el.genre       || [],
    type:        el.type        || 'action',
    platform:    el.platform    || 'Multi',
    trending:    el.trending    || false,
  });

  const handleOpen  = (e) => { e.stopPropagation(); setShow(true);  };
  const handleClose = ()  => setShow(false);

const handleSave = () => {
    dispatch(editProduct({ id: el._id, edited: edited })); 
    setping(!ping);
    handleClose();
    if (onClose) onClose();
};

  return (
    <>
   
      <button
        onClick={handleOpen}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'rgba(99,102,241,0.10)',
          border: '1px solid rgba(99,102,241,0.35)',
          borderRadius: '8px', padding: '11px 18px',
          color: '#a5b4fc',
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '12.5px', fontWeight: 700,
          cursor: 'pointer', transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.22)'; e.currentTarget.style.transform = 'scale(1.02)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.10)'; e.currentTarget.style.transform = 'scale(1)'; }}
      >
        ✏️ Edit
      </button>

  
      <Modal show={show} onHide={handleClose} size="xl" centered contentClassName="border-0 bg-transparent">
        <div style={{
          display: 'flex',
          background: 'radial-gradient(ellipse at top, #1a1a2e 0%, #0d0d1a 60%, #000 100%)',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          minHeight: '580px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.8)',
        }}>

       
          <div style={{ width: '240px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
            <img
              src={edited.posterUrl || el.posterUrl || 'https://via.placeholder.com/240x580?text=No+Image'}
              alt={edited.title}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                display: 'block', minHeight: '580px',
              }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 55%, #0d0d1a 100%)',
            }} />
          </div>

        
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 24px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '11px', fontWeight: 800,
                  letterSpacing: '0.6px', padding: '4px 12px',
                  borderRadius: '20px', textTransform: 'uppercase',
                  background: typeColors[edited.type] || '#e8003d',
                  color: '#fff', transition: 'background 0.3s',
                }}>{edited.type}</span>
                <h4 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.4rem', fontWeight: 700,
                  color: '#ffffff', margin: 0,
                }}>Edit Game</h4>
              </div>

              <button onClick={handleClose} style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50%', width: '34px', height: '34px',
                color: '#aaa', cursor: 'pointer', fontSize: '15px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#aaa'; }}
              >✕</button>
            </div>

           
            <div style={{ flex: 1, padding: '20px 24px', overflowY: 'auto', scrollbarWidth: 'none' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>

          
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>Game Title</label>
                  <input
                    style={S.input}
                    value={edited.title}
                    onFocus={e => e.target.style.border = '1px solid rgba(99,102,241,0.6)'}
                    onBlur={e  => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setEdited({ ...edited, title: e.target.value })}
                  />
                </div>

              
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>Cover Art URL</label>
                  <input
                    style={S.input}
                    value={edited.posterUrl}
                    onFocus={e => e.target.style.border = '1px solid rgba(99,102,241,0.6)'}
                    onBlur={e  => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setEdited({ ...edited, posterUrl: e.target.value })}
                  />
                </div>

            
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>
                    Trailer URL{' '}
                    <span style={{ color: 'rgba(99,102,241,0.7)', fontWeight: 600 }}>(YouTube Embed)</span>
                  </label>
                  <input
                    style={S.input}
                    value={edited.trailerUrl}
                    onFocus={e => e.target.style.border = '1px solid rgba(99,102,241,0.6)'}
                    onBlur={e  => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setEdited({ ...edited, trailerUrl: e.target.value })}
                  />
                </div>

              
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>Description</label>
                  <textarea
                    style={{ ...S.input, height: '72px', resize: 'none' }}
                    value={edited.description}
                    onFocus={e => e.target.style.border = '1px solid rgba(99,102,241,0.6)'}
                    onBlur={e  => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setEdited({ ...edited, description: e.target.value })}
                  />
                </div>
                <div style={S.field}>
                  <label style={S.label}>Rating (1 – 5)</label>
                  <input
                    type="number" min="1" max="5" step="0.1"
                    style={S.input}
                    value={edited.rating}
                    onFocus={e => e.target.style.border = '1px solid rgba(99,102,241,0.6)'}
                    onBlur={e  => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setEdited({ ...edited, rating: parseFloat(e.target.value) })}
                  />
                </div>

            
                <div style={S.field}>
                  <label style={S.label}>Category</label>
                  <select
                    style={{ ...S.input, cursor: 'pointer', appearance: 'none' }}
                    value={edited.type}
                    onFocus={e => e.target.style.border = '1px solid rgba(99,102,241,0.6)'}
                    onBlur={e  => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setEdited({ ...edited, type: e.target.value })}
                  >
                    <option value="action"  style={{ background: '#0d0d1a' }}>⚔️ Action</option>
                    <option value="rpg"     style={{ background: '#0d0d1a' }}>🧙 RPG</option>
                    <option value="shooter" style={{ background: '#0d0d1a' }}>🔫 Shooter</option>
                    <option value="sports"  style={{ background: '#0d0d1a' }}>🏆 Sports & Racing</option>
                    <option value="indie"   style={{ background: '#0d0d1a' }}>💎 Indie</option>
                  </select>
                </div>

             
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>Platform</label>
                  <select
                    style={{ ...S.input, cursor: 'pointer', appearance: 'none' }}
                    value={edited.platform}
                    onFocus={e => e.target.style.border = '1px solid rgba(99,102,241,0.6)'}
                    onBlur={e  => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setEdited({ ...edited, platform: e.target.value })}
                  >
                    <option value="Multi"  style={{ background: '#0d0d1a' }}>🌐 Multi-Platform</option>
                    <option value="PC"     style={{ background: '#0d0d1a' }}>🖥️ PC</option>
                    <option value="PS5"    style={{ background: '#0d0d1a' }}>🎮 PlayStation 5</option>
                    <option value="Xbox"   style={{ background: '#0d0d1a' }}>🟢 Xbox</option>
                    <option value="Switch" style={{ background: '#0d0d1a' }}>🔴 Nintendo Switch</option>
                  </select>
                </div>

          
                <div style={{ ...S.field, gridColumn: '1 / -1' }}>
                  <label style={S.label}>
                    Genres{' '}
                    <span style={{ color: 'rgba(200,200,220,0.35)', fontWeight: 500 }}>comma-separated</span>
                  </label>
                  <input
                    style={S.input}
                    defaultValue={edited.genre.join(', ')}
                    onFocus={e => e.target.style.border = '1px solid rgba(99,102,241,0.6)'}
                    onBlur={e  => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                    onChange={e => setEdited({
                      ...edited,
                      genre: e.target.value.split(',').map(g => g.trim()).filter(g => g !== ''),
                    })}
                  />
                </div>

          
                <div style={{ ...S.field, gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="checkbox" id="edit-trending-check"
                    checked={edited.trending}
                    style={{ width: '17px', height: '17px', accentColor: '#6366f1', cursor: 'pointer' }}
                    onChange={e => setEdited({ ...edited, trending: e.target.checked })}
                  />
                  <label htmlFor="edit-trending-check" style={{ ...S.label, margin: 0, cursor: 'pointer', fontSize: '12px' }}>
                    🔥 Mark as Trending
                  </label>
                </div>

              </div>
            </div>

       
            <div style={{
              padding: '14px 24px',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              display: 'flex', justifyContent: 'flex-end', gap: '10px',
            }}>
              <button
                onClick={handleClose}
                style={{
                  background: 'rgba(40,40,55,0.8)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '30px', padding: '9px 20px',
                  color: 'rgba(200,200,220,0.8)',
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                  transition: 'border 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.28)'}
                onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.12)'}
              >Cancel</button>

              <button
                onClick={handleSave}
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  border: 'none', borderRadius: '30px', padding: '9px 24px',
                  color: '#fff', fontFamily: "'Nunito', sans-serif",
                  fontSize: '13px', fontWeight: 800, cursor: 'pointer',
                  letterSpacing: '0.3px',
                  transition: 'opacity 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1';    e.currentTarget.style.transform = 'scale(1)';    }}
              >💾 Save Changes</button>
            </div>

          </div>
        </div>
      </Modal>
    </>
  );
}

export default EditGame;