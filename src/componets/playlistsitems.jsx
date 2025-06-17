import React from 'react';
import Header from '../componets/header';
import { CiPlay1 } from "react-icons/ci";

const songs = [
    { title: "Old Town Road", artist: "Billy Ray Cyrus", time: "3 : 58" },
    { title: "Don't Call Me Up", artist: "Mabel", time: "2 : 46" },
    { title: "Let Me Down Slowly", artist: "Alec Benjamin", time: "4 : 12" },
    { title: "Here With Me", artist: "Marshmello", time: "3 : 37" },
    { title: "Paradise", artist: "Bazzi", time: "3 : 12" },
    { title: "Let Me Down Slowly", artist: "Alec Benjamin", time: "4 : 12" },
    { title: "Here With Me", artist: "Marshmello", time: "3 : 37" },
    { title: "Paradise", artist: "Bazzi", time: "3 : 12" },
];

export default function PlayListsItems() {
    return (
        <div className="playlists-wrapper">
            <div className="header-bg">
                <img src="/sound-wave.png" alt="Background" />
            </div>

            <div className="content">
                <Header />
                <h1 className="main-title">Playlists</h1>
                <img src="/photo-1545224144-b38cd309ef69.png" alt="cover" className="cover-img" />
                <h2 className="subtitle">Top 50</h2>
                <h3 className="subtitle-small">Rock Ballads</h3>

                <div className="songs">
                    {songs.map((song, index) => (
                        <div className="song" key={index}>
                            <div className="left">
                                <div className="play-btn">
                                    <CiPlay1 />
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

                <button className="listen-all">LISTEN ALL</button>
            </div>
        </div>
    );
}
