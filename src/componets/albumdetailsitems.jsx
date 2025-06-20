import React from 'react';
import { IoIosPlay } from "react-icons/io";
import '../style/albumdetails.scss';
import Header from '../componets/header';

const songs = [
    { title: "Old Town Road", artist: "Billy Ray Cyrus", time: "3 : 58" },
    { title: "Don't Call Me Up", artist: "Mabel", time: "2 : 46" },
    { title: "Let Me Down Slowly", artist: "Alec Benjamin", time: "4 : 12" },
    { title: "Paradise", artist: "Bazzi", time: "3 : 12" },
    { title: "Sucker", artist: "Jonas Brothers", time: "3 : 56" },
    { title: "Kill This Love", artist: "BLACKPINK", time: "2 : 47" }
];

export default function AlbumDetailsItem() {
    return (
        <div className="album-wrapper">
            <div className="album-header">
                <img className="album-image" src="/pexels-photo-1771305 (1).png" alt="Album Cover" />

                <div className="header-overlay">
                    <Header theme="light" />
                </div>


                <div className="album-info-top">
                    <h1 className="album-title">Old Town Road</h1>
                    <p className="album-count">12 Songs</p>
                </div>

                <div className="album-info-bottom">
                    <h2 className="genre-title">Genres hastags</h2>
                    <div className="genre-tags">
                        <span className="tag">#country</span>
                        <span className="tag">#country road</span>
                    </div>
                </div>
            </div>

            <div className="song-list">
                <h3 className="song-list-title">All Songs</h3>
                {songs.map((song, index) => (
                    <div className="song" key={index}>
                        <div className="left">
                            <div className="play-btn">
                                <IoIosPlay />
                            </div>
                            <div className="info">
                                <div className="title">{song.title}</div>
                                <div className="artist">{song.artist}</div>
                            </div>
                        </div>
                        <div className="time">{song.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
