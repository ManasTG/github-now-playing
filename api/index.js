import { getCurrentTrack } from "../lastfm.js";
import { generateSvg } from "../svg.js";

export default async function handler(req, res) {
    const track = await getCurrentTrack();
    const svg = generateSvg(track);

    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(svg);
}
