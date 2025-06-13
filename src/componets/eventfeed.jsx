import React from "react";
import "../style/eventfeed.scss";
import Header from '../componets/header'

const EventFeed = () => {
    return (
        <div className="event-feed">
            <Header />

            <div className="tags">
                <button>#spotify</button>
                <button>#musicworld</button>
                <button>#jazz</button>
                <button>#billboard</button>
            </div>

            <div className="event-card">
                <img src="/pexels-photo-1703660.png" alt="Event" className="event-img" />
                <div className="event-info">
                    <p className="hashtags">#spotify, #musicworld, #grammy2020</p>
                    <div className="talking-about">
                        <img src="/user1.jpg" alt="User" />
                        <img src="/user2.jpg" alt="User" />
                        <img src="/user3.jpg" alt="User" />
                        <span><strong>3,123</strong> are talking about this</span>
                    </div>
                    <h2>Coachella 2019 Day Three Highlights</h2>
                </div>
            </div>
        </div>
    );
};

export default EventFeed;
