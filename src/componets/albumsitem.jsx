import React from 'react';
import '../style/albums.scss';
import Header from '../componets/header'

export default function AlbumsItem() {
    const featuredAlbums = [
        "/pexels-photo-1988681.png",
        "/pexels-photo-1435457 (2).png",
        "/pexels-photo-1816943 (1).png"
    ];

    const newReleases = [
        {
            cover: "/pexels-photo-1816943 (2).png",
            title: "Old Town Road",
            artist: "Billy Ray Cyrus",
            songs: "12 Songs"
        },
        {
            cover: "/pexels-photo-2064522.png",
            title: "Victory Lab",
            artist: "Nipsey Hussle",
            songs: "8 Songs"
        },
        {
            cover: "/pexels-photo-1844521.png",
            title: "Thank U, Next",
            artist: "Ariana Grande",
            songs: "13 Songs"
        },
        {
            cover: "/pexels-photo-2062347.png",
            title: "Death Race For Love",
            artist: "Juice WRLD",
            songs: "11 Songs"
        }
    ];

    return (
        <div className="albums-page">
            <Header />
            <div className="albums-header">
                <h1>All Albums</h1>
            </div>

            <div className="section">
                <div className="section-header">
                    <h2>Featured Albums</h2>
                    <span className="view-all">View All</span>
                </div>
                <div className="featured-albums">
                    {featuredAlbums.map((src, index) => (
                        <img src={src} alt={`album-${index}`} key={index} className="featured-img" />
                    ))}
                </div>
            </div>

            <div className="section">
                <div className="section-header">
                    <h2>New Releases</h2>
                    <span className="view-all">View All</span>
                </div>
                <div className="new-releases">
                    {newReleases.map((item, index) => (
                        <div className="release" key={index}>
                            <img src={item.cover} alt={item.title} className="release-img" />
                            <div className="release-info">
                                <div className="title">{item.title}</div>
                                <div className="artist">{item.artist}</div>
                            </div>
                            <div className="songs">{item.songs}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
