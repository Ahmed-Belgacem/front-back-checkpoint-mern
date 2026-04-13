import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';
import Addmovies from './Addmovies';

function TV({ text, rate }) {
  const games     = useSelector(state => state.product.productlist);
  const rpgGames  = games.filter(g => g.type === 'rpg');
  const trending  = rpgGames.filter(g => g.trending);
  const openWorld = rpgGames.filter(g => g.genre.includes('Open World'));
  const turnBased = rpgGames.filter(g => g.genre.includes('Turn-Based') || g.genre.includes('JRPG'));

  return (
    <div>

  
      <div className="page-hero">
        <div className="page-hero__accent" style={{ color: '#8b5cf6' }}>RPG</div>
        <div className="page-hero__eyebrow">Game Category</div>
        <h1 className="page-hero__title" style={{
          background: 'linear-gradient(90deg, #8b5cf6 0%, #00d2ff 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>RPG WORLDS</h1>
        <p className="page-hero__sub">
          Vast worlds, deep stories, meaningful choices. Lose yourself in the greatest RPGs
          ever crafted — from massive open worlds to elegant turn-based masterpieces.
        </p>
        <div className="page-hero__stats">
          <div className="page-hero__stat-pill">
            <span className="pill__num" style={{ color: '#8b5cf6' }}>{rpgGames.length}</span>
            <span className="pill__label">Total</span>
          </div>
          <div className="page-hero__stat-pill">
            <span className="pill__num" style={{ color: '#00d2ff' }}>{trending.length}</span>
            <span className="pill__label">Trending</span>
          </div>
          <div className="page-hero__stat-pill">
            <span className="pill__num" style={{ color: '#f59e0b' }}>{openWorld.length}</span>
            <span className="pill__label">Open World</span>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Addmovies />
          </div>
        </div>
      </div>

   
      {trending.length > 0 && (
        <>
          <div className="section-header">
            <div className="section-header__bar" />
            <div className="section-header__text">
              <span className="section-header__eyebrow">TRENDING</span>
              <span className="section-header__title">RPG</span>
            </div>
          </div>
          <div className="leftlist"><List movies={trending} text={text} rate={rate} /></div>
        </>
      )}

   
      <div className="section-header">
        <div className="section-header__bar" />
        <div className="section-header__text">
          <span className="section-header__eyebrow">ALL</span>
          <span className="section-header__title">RPG WORLDS</span>
        </div>
      </div>
      <div className="leftlist"><List movies={rpgGames} text={text} rate={rate} /></div>

  
      {openWorld.length > 0 && (
        <>
          <div className="section-header">
            <div className="section-header__bar" />
            <div className="section-header__text">
              <span className="section-header__eyebrow">OPEN</span>
              <span className="section-header__title">WORLD RPG</span>
            </div>
          </div>
          <div className="leftlist"><List movies={openWorld} text={text} rate={rate} /></div>
        </>
      )}


      {turnBased.length > 0 && (
        <>
          <div className="section-header">
            <div className="section-header__bar" />
            <div className="section-header__text">
              <span className="section-header__eyebrow">TURN-BASED</span>
              <span className="section-header__title">& JRPG</span>
            </div>
          </div>
          <div className="leftlist"><List movies={turnBased} text={text} rate={rate} /></div>
        </>
      )}

      <br /><br />
    </div>
  );
}

export default TV;
