export function generateSvg(track) {
    const { title, artist, isPlaying } = track;
    return `
    <svg width="450" height="120" viewBox="0 0 450 120" xmlns="http://www.w3.org/2000/svg">

    <rect width="450" height="120" rx="12" fill="#1e1e1e"/>

    <text
    x="20"
    y="28"
    fill="#4ade80"
    font-family="Arial, sans-serif"
    font-size="14"
    font-weight="bold">
    ${isPlaying ? "● Now Playing" : "● Last Played"}
    </text>

    <text
    x="20"
    y="58"
    fill="white"
    font-family="Arial, sans-serif"
    font-size="22"
    font-weight="bold">
    ${title}
    </text>

    <text
    x="20"
    y="85"
    fill="#b3b3b3"
    font-family="Arial, sans-serif"
    font-size="16">
    ${artist}
    </text>

    <line
    x1="20"
    y1="96"
    x2="430"
    y2="96"
    stroke="#333"
    stroke-width="1"/>

    <text
    x="20"
    y="112"
    fill="#777"
    font-family="Arial, sans-serif"
    font-size="12">
    Powered by Last.fm
    </text>

    </svg>
    `;
}
