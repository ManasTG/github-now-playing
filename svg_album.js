const coverArt = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=300&auto=format&fit=crop";
export function generateSvg(track) {
    const { title, artist, isPlaying } = track;

    const cleanTitle = title
    ? title.replace(/&/g, "&amp;")
    : "Unknown Title";

    const cleanArtist = artist
    ? artist.replace(/&/g, "&amp;")
    : "Unknown Artist";

    const statusColor = isPlaying ? "#4ade80" : "#9ca3af";

    return `
    <svg width="450" height="120" viewBox="0 0 450 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
    <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#0b1220"/>
    <stop offset="100%" stop-color="#111827"/>
    </linearGradient>

    <clipPath id="rect-clip">
    <rect x="20" y="20" width="80" height="80" rx="6" />
    </clipPath>

    <style>
    .pulse-dot {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: .4; }
    }
    </style>
    </defs>

    <rect width="450" height="120" rx="8" fill="url(#bg-gradient)" stroke="#374151" stroke-width="1"/>

    <image
    href="${coverArt.replace(/&/g, '&amp;')}"
    x="20"
    y="20"
    width="80"
    height="80"
    preserveAspectRatio="xMidYMid slice"
    clip-path="url(#rect-clip)"
    />

    <g transform="translate(116, 35)">
    <circle cx="0" cy="-4" r="4" fill="${statusColor}" class="${isPlaying ? 'pulse-dot' : ''}"/>

    ${isPlaying ? `
        <text
        x="12"
        y="0"
        fill="${statusColor}"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="11"
        font-weight="800"
        letter-spacing="1.5">
        NOW PLAYING
        </text>
        ` : `
        <text
        x="12"
        y="0"
        fill="#e5e7eb"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="12"
        font-weight="700">
        Last Played <tspan fill="${statusColor}" font-size="9" font-weight="600" letter-spacing="1"> (OFFLINE)</tspan>
        </text>
        `}
        </g>

        <text
        x="116"
        y="65"
        fill="#ffffff"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="18"
        font-weight="bold">
        ${cleanTitle}
        </text>

        <text
        x="116"
        y="88"
        fill="#9ca3af"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="14">
        ${cleanArtist}
        </text>

        <text
        x="430"
        y="104"
        text-anchor="end"
        fill="#4b5563"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="10"
        font-weight="500">
        Powered by Last.fm
        </text>
        </svg>
        `;
}
