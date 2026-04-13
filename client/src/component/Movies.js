import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import Addmovies from './Addmovies';
import { useState } from 'react';
import { useEffect } from 'react';
import { getProducts } from '../redux/productSlice';

function Movies({ text, rate }) {
  const games       = useSelector(state => state.product.productlist);
  const actionGames = games.filter(g => g.type === 'action');
  const trending    = actionGames.filter(g => g.trending);
  const soulsLike   = actionGames.filter(g => g.genre.includes('Souls-like'));
  const openWorld   = actionGames.filter(g => g.genre.includes('Open World'));
  const dispatch = useDispatch();
  const [ping, setping] = useState(false); // 👈 add

useEffect(() => {
    dispatch(getProducts());
}, [ping, dispatch]);
  return (
    <div>


      <div className="page-hero">
        <div className="page-hero__accent" style={{ color: '#ff3a5c' }}>ACTION</div>
        <div className="page-hero__eyebrow">Game Category</div>
        <h1 className="page-hero__title" style={{
          background: 'linear-gradient(90deg, #ff3a5c 0%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>ACTION</h1>
        <p className="page-hero__sub">
          High-octane combat, fluid movement, relentless challenge. From souls-like brutality
          to open-world epics — the best action games on every platform.
        </p>
        <div className="page-hero__stats">
          <div className="page-hero__stat-pill">
            <span className="pill__num" style={{ color: '#ff3a5c' }}>{actionGames.length}</span>
            <span className="pill__label">Total</span>
          </div>
          <div className="page-hero__stat-pill">
            <span className="pill__num" style={{ color: '#f59e0b' }}>{trending.length}</span>
            <span className="pill__label">Trending</span>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Addmovies ping={ping} setping={setping} />
          </div>
        </div>
      </div>

    
      {trending.length > 0 && (
        <>
          <div className="section-header">
            <div className="section-header__bar" />
            <div className="section-header__text">
              <span className="section-header__eyebrow">HOT</span>
              <span className="section-header__title">RIGHT NOW</span>
            </div>
          </div>
          <div className="leftlist"><List movies={trending} text={text} rate={rate} ping={ping} setping={setping}/></div>
        </>
      )}

    
      <div className="section-header">
        <div className="section-header__bar" />
        <div className="section-header__text">
          <span className="section-header__eyebrow">ALL</span>
          <span className="section-header__title">ACTION GAMES</span>
        </div>
      </div>
      <div className="leftlist"><List movies={actionGames} text={text} rate={rate} /></div>


      {soulsLike.length > 0 && (
        <>
          <div className="section-header">
            <div className="section-header__bar" />
            <div className="section-header__text">
              <span className="section-header__eyebrow">SOULS</span>
              <span className="section-header__title">-LIKE</span>
            </div>
          </div>
          <div className="leftlist"><List movies={soulsLike} text={text} rate={rate} /></div>
        </>
      )}


      {openWorld.length > 0 && (
        <>
          <div className="section-header">
            <div className="section-header__bar" />
            <div className="section-header__text">
              <span className="section-header__eyebrow">OPEN</span>
              <span className="section-header__title">WORLD</span>
            </div>
          </div>
          <div className="leftlist"><List movies={openWorld} text={text} rate={rate} /></div>
        </>
      )}

      <br /><br />
    </div>
  );
}

export default Movies;
