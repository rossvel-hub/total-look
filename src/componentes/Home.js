import React, { Fragment } from "react";

import './App.css';

export const Home = function() {
    return (
        <Fragment>
            <button className="btn-promos">
        See all promotions
    </button>
    <div className="promos">
        <div  className="promo-uno">
            <p></p>
           
        </div>
        <div className="promo-dos">
            <img src="" alt="">
            <h1>UP TO 50%   OFF UP TO 50% OFF  UP TO 50% OFF   UP TO 50% OFF </h1>
        </div>

    </div>
    <button className="btn-categorias">
        See all categories
    </button>
    <div className="categorias">
        <div className="cat-uno">
            <p>Clothes</p>
        </div>
        <div className="cat-dos">
            <p>Shoes</p>
        </div>
        <div className="cat-tres">
            <p>Hand bags</p>
        </div>
    </div>
        </Fragment>
      );
}