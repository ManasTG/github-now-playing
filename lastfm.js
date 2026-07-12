// lastfm.js
import "dotenv/config";

const API_KEY = process.env.LASTFM_API_KEY;
const USER = process.env.LASTFM_USER;

export async function getCurrentTrack() {
    const apiUrl =
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const track = data.recenttracks.track[0];

    return {
        title: track.name,
        artist: track.artist["#text"],
        isPlaying: track["@attr"]?.nowplaying === "true",
    };
}
