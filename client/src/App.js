import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './redux/productSlice';

import Navbar    from './component/Navbar';
import Main      from './component/Main';
import Footer    from './component/Footer';
import List      from './component/List';
import Addmovies from './component/Addmovies';
import TV        from './component/TV';
import Anime     from './component/Anime';
import Movies    from './component/Movies';
import Admin     from './component/Admin';


function FavoritesSection({ text, rate }) {
  const games = useSelector(state => state.product.productlist);
  const favorites = useSelector(state => state.product.favorites);
  const favGames = games.filter(g => favorites.includes(g._id));

  
  if (favGames.length === 0) return null;
  return (
    <>
      <div className="section-header">
        <div className="section-header__bar" />
        <div className="section-header__text">
          <span className="section-header__eyebrow">MY</span>
          <span className="section-header__title">FAVORITES</span>
        </div>
      </div>
      <div className="leftlist">
        <List movies={favGames} text={text} rate={rate} />
      </div>
    </>
  );
}


function Home({ text, rate }) {
  const dispatch = useDispatch();
  const games = useSelector(state => state.product.productlist); 
 

  const [ping, setping] = useState(false); 

useEffect(() => {
    dispatch(getProducts());
}, [ping, dispatch]); 
  

  return (
    <>
      <Main />

      <div className="section-row">
        <div className="section-header">
          <div className="section-header__bar" />
          <div className="section-header__text">
            <span className="section-header__eyebrow">TRENDING</span>
            <span className="section-header__title">NOW</span>
          </div>
        </div>
        <div className="section-actions">
          <Addmovies  ping={ping} setping={setping} />
        </div>
      </div>
   <div className="leftlist">
        <List movies={games.filter(m => m.trending)} text={text} rate={rate} ping={ping} setping={setping} />
      </div>

      <div className="section-header">
        <div className="section-header__bar" />
        <div className="section-header__text">
          <span className="section-header__eyebrow">TOP</span>
          <span className="section-header__title">RATED</span>
        </div>
      </div>
      <div className="leftlist">
        <List movies={games.filter(m => m.rating === 5)} text={text} rate={rate} />
      </div>

      <div className="section-header">
        <div className="section-header__bar" />
        <div className="section-header__text">
          <span className="section-header__eyebrow">OPEN</span>
          <span className="section-header__title">WORLD</span>
        </div>
      </div>
      <div className="leftlist">
        <List movies={games.filter(m => m.genre.includes('Open World'))} text={text} rate={rate} />
      </div>

      <div className="section-header">
        <div className="section-header__bar" />
        <div className="section-header__text">
          <span className="section-header__eyebrow">SOULS</span>
          <span className="section-header__title">-LIKE</span>
        </div>
      </div>
      <div className="leftlist">
        <List movies={games.filter(m => m.genre.includes('Souls-like'))} text={text} rate={rate} />
      </div>

      <div className="section-header">
        <div className="section-header__bar" />
        <div className="section-header__text">
          <span className="section-header__eyebrow">HORROR</span>
          <span className="section-header__title">& DARK</span>
        </div>
      </div>
      <div className="leftlist">
        <List movies={games.filter(m => m.genre.includes('Horror'))} text={text} rate={rate} />
      </div>

      <FavoritesSection text={text} rate={rate} />
    </>
  );
}


function App() {
  const [text, settext] = useState('');
  const [rate, setrate] = useState(1);

  return (
    <div className="App">
      <Navbar settext={settext} setrate={setrate} />
      <Routes>
        <Route path="/"       element={<Home   text={text} rate={rate} />} />
        <Route path="/movies" element={<Movies text={text} rate={rate} />} />
        <Route path="/tv"     element={<TV     text={text} rate={rate} />} />
        <Route path="/anime"  element={<Anime  text={text} rate={rate} />} />
        <Route path="/admin"  element={<Admin  text={text} rate={rate} />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
