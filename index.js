import http from "node:http";
import { getCurrentTrack } from "./lastfm.js";
import { generateSvg } from "./svg.js";

http.createServer(async (req, res) => {

    const track = await getCurrentTrack();

    const svg = generateSvg(track);

    res.writeHead(200, {
        "Content-Type": "image/svg+xml",
    });

    res.end(svg);

}).listen(3001, () => {
    console.log("🚀 Server running at http://localhost:3001");
});
