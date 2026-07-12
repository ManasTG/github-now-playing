import http from "node:http";
import "dotenv/config";
import { generateSvg } from "./svg.js";

const API_KEY = process.env.LASTFM_API_KEY;
const USER = process.env.LASTFM_USER;

http.createServer(async (req, res) => {

    const url =
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`;

    const response = await fetch(url);
    const data = await response.json();

    //console.log(JSON.stringify(data, null, 2));

    const track = data.recenttracks.track[0];

    const title = track.name;
    const artist = track.artist["#text"];
    const album = track.album["#text"];
    const trackUrl = track.url;
    const playedAt = track.date?.["#text"] ?? "Now Playing";

    const isPlaying = track["@attr"]?.nowplaying === "true";

    console.log(title);
    console.log(artist);
    console.log(album);
    console.log(playedAt);

    const svg = generateSvg({
        title,
        artist,
        isPlaying,
    });

    res.writeHead(200, {
        "Content-Type": "image/svg+xml",
    });

    res.end(svg);
}).listen(3001 , () => {
    console.log("🚀 Server running at http://localhost:3001");
});
