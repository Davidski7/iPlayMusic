import React from 'react';
import '../style/featured.scss';
import Header from '../componets/header'

const FeaturedCard = () => {
    return (
        <div className="featuredContent">
            <Header />

            <div className="card">
                <img
                    src="/pexels-photo-1816943.png"
                    alt="The Greatest Showman"
                    className="cardImage"
                />
                <div className="cardContent">
                    <h2 className="cardTitle">The Greatest Showman</h2>
                    <p className="cardCategory">Soundtrack</p>
                </div>
            </div>
            <div className="card">
                <img
                    src="/pexels-photo-1435457 (1).png"
                    alt="The Greatest Showman"
                    className="cardImage"
                />
                <div className="cardContent">
                    <h2 className="cardTitle">The Greatest Showman</h2>
                    <p className="cardCategory">Soundtrack</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;
