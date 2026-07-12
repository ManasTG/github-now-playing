import "dotenv/config";

const API_KEY = process.env.LASTFM_API_KEY;
const USER = process.env.LASTFM_USER;

// Cache
let cachedTrack = null;
let cacheTime = 0;

const CACHE_DURATION = 30 * 1000;

export async function getCurrentTrack() {

    // Cache hit
    if (
        cachedTrack &&
        Date.now() - cacheTime < CACHE_DURATION
    ) {
        console.log("Using cache");
        return cachedTrack;
    }

    console.log("Fetching from Last.fm");

    try {

        const apiUrl =
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Last.fm responded with ${response.status}`);
        }

        const data = await response.json();
        const track = data.recenttracks.track[0];

        const currentTrack = {
            title: track.name,
            artist: track.artist["#text"],
            album: track.album["#text"],
            isPlaying: track["@attr"]?.nowplaying === "true",
        };

        cachedTrack = currentTrack;
        cacheTime = Date.now();

        return currentTrack;

    } catch (err) {

        console.error(err);

        if (cachedTrack) {
            console.log("Returning cached track");
            return cachedTrack;
        }

        throw err;
    }
}
