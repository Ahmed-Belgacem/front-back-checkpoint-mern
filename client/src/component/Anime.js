import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from './List';
import Addmovies from './Addmovies';
import { useState } from 'react';
import { getProducts } from '../redux/productSlice';
import { useEffect } from 'react';

function Anime({ text, rate }) {
  const games        = useSelector(state => state.product.productlist);
  const shooterGames = games.filter(g => g.type === 'shooter');
  const trending     = shooterGames.filter(g => g.trending);
  const battleRoyale = shooterGames.filter(g => g.genre.includes('Battle Royale'));
  const indieGames   = games.filter(g => g.type === 'indie');
  const sportsGames  = games.filter(g => g.type === 'sports');
   const dispatch = useDispatch();
  const [ping, setping] = useState(false); 

  useEffect(() => {
    dispatch(getProducts());
  }, [ping]); 
  return (
    <div>

      <div className="page-hero">
        <div className="page-hero__accent" style={{ color: '#f59e0b' }}>SHOOTER</div>
        <div className="page-hero__eyebrow">Game Category</div>
        <h1 className="page-hero__title" style={{
          background: 'linear-gradient(90deg, #f59e0b 0%, #ff3a5c 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>SHOOTER</h1>
        <p className="page-hero__sub">
          Precision, reaction time, dominance. Battle royales, military FPS, paranormal
          action — every trigger-happy game you need in one place.
        </p>
        <div className="page-hero__stats">
          <div className="page-hero__stat-pill">
            <span className="pill__num" style={{ color: '#f59e0b' }}>{shooterGames.length}</span>
            <span className="pill__label">Shooters</span>
          </div>
          <div className="page-hero__stat-pill">
            <span className="pill__num" style={{ color: '#22c55e' }}>{sportsGames.length}</span>
            <span className="pill__label">Sports</span>
          </div>
          <div className="page-hero__stat-pill">
            <span className="pill__num" style={{ color: '#00d2ff' }}>{indieGames.length}</span>
            <span className="pill__label">Indie</span>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Addmovies setping={setping} />
          </div>
        </div>
      </div>

   
      {trending.length > 0 && (
        <>
          <div className="section-header">
            <div className="section-header__bar" />
            <div className="section-header__text">
              <span className="section-header__eyebrow">TRENDING</span>
              <span className="section-header__title">SHOOTERS</span>
            </div>
          </div>
          <div className="leftlist"><List movies={trending} text={text} rate={rate} setping={setping} /></div>
        </>
      )}

 
      <div className="section-header">
        <div className="section-header__bar" />
        <div className="section-header__text">
          <span className="section-header__eyebrow">ALL</span>
          <span className="section-header__title">SHOOTERS</span>
        </div>
      </div>
      <div className="leftlist"><List movies={shooterGames} text={text} rate={rate} /></div>

  
      {battleRoyale.length > 0 && (
        <>
          <div className="section-header">
            <div className="section-header__bar" />
            <div className="section-header__text">
              <span className="section-header__eyebrow">BATTLE</span>
              <span className="section-header__title">ROYALE</span>
            </div>
          </div>
          <div className="leftlist"><List movies={battleRoyale} text={text} rate={rate} /></div>
        </>
      )}


      <div className="section-header">
        <div className="section-header__bar" />
        <div className="section-header__text">
          <span className="section-header__eyebrow">SPORTS &</span>
          <span className="section-header__title">RACING</span>
        </div>
      </div>
      <div className="leftlist"><List movies={sportsGames} text={text} rate={rate} /></div>

     
      <div className="section-header">
        <div className="section-header__bar" />
        <div className="section-header__text">
          <span className="section-header__eyebrow">INDIE</span>
          <span className="section-header__title">GEMS</span>
        </div>
      </div>
      <div className="leftlist"><List movies={indieGames} text={text} rate={rate} /></div>

      <br /><br />
    </div>
  );
}

export default Anime;
