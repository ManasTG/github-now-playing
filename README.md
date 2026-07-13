# Github Now-Playing Widget with Last.fm
> [!CAUTION]
> This project was tested on LINUX only. Local hosting should work on Windows or Mac but not tested till now.

>✅ Supports YouTube Music, Spotify, and Apple Music (via Last.fm scrobbling).

This side project was built to showcase my currently listening music on Github README files are static so we cannot just implement it as it is, we need a workaround.

So, This project scrobbles music data form the musical platform of your liking using Last.fm (more on that later on). And then after deploying the project on vercel and adding it to your profile it would display the Now-Playing Music.

<img width="400" height="109" alt="Screencast_20260714_041830" src="https://github.com/user-attachments/assets/557a848c-6ff2-41b8-87ee-ad9d5f35e099" /> 
<br>
<img width="400" height="109" alt="Screenshot_20260714_042238" src="https://github.com/user-attachments/assets/b23a8d05-935c-4cad-bbf4-b36791803d7c" />

---

## Features

- Shows your currently playing song
- SVG-based widget
- Serverless deployment with Vercel
- Works with any service supported by Last.fm
- GitHub README integration
- Active and Inactive phase 
- Active pulsating animation

---

## How it works In-Depth

I used Last.fm to get the API of the music I am currently listening to.
>Last.fm is a music analytics and social platform that acts like a fitness tracker for your music taste. It automatically tracks ("scrobbles") every song you listen to across streaming services like Spotify and Apple Music to build a personalized profile of your listening history, top artists, and musical trends.

We just need to link our music account to the Last.fm and it would start scroblling the music from which we can use the API (https://www.last.fm/api/account/create) to work around the issue.

Then deploy the project to a server. I chose Vercel because it's lightweight, free for small projects, and makes deploying serverless functions effortless.

Currently the project has duplicated logic for server(api/index.js) and for local testing(dev.js) for simplicity but future plans are to combine them.

---

### Why Last.fm?
We use Last.fm because it provides a simple way to access your currently playing music from a variety of streaming platforms. Once you've linked your music service to Last.fm, this project can use the Last.fm API to generate the widget.

Last.fm officially supports services like Spotify and Apple Music. YouTube Music isn't officially supported, but it can still be used through well-documented community workarounds.

---

### Architecture
Music Player → Last.fm → Vercel API → SVG Widget → GitHub README

---

## Requirements
- Node.js
- Last.fm
- Last.fm API Key
- Vercel account (for deployment)

---

## File structure
```file structure
├── api
│   └── index.js
├── dev.js
├── lastfm
│   └── lastfm.js
├── package.json
├── package-lock.json
├── README.md
├── theme
│   ├── svg_album.js
│   └── svg.js
└── vercel.json
```

>`api/index.js` is the main file for the deployement (server side)
>`dev.js` is the local file for testing with local host
>`lastfm/lastfm.js` is the Last.fm API call file
>`theme/svg.js` is the theme file of how it should look like.

---

## Local Development (LINUX)
1. Fork the repo.
2. Clone the repo.
3. Change directory to the project.
```
cd github-now-playing
```
3. Install dependencies
```
npm install
```
4. Create Last.fm account and link your musical platform with it.
5. Copy .env.example -> .env file and enter the info.
```
LASTFM_API_KEY=YourAPIKeyHere
LASTFM_USER=YourUsernameHere
```
6. To run
```
node dev.js
```

---

## Deployment
1. After doing the steps to test locally. Create a vercel account 
2. Upload your fork to the vercel via github.
3. Put two enviornmental variable 
```
LASTFM_API_KEY=YourAPIKeyHere
AND
LASTFM_USER=YourUsernameHere
```
4. Deploy the project
5. copy the domain
6. In Github put 
```md
![Now Playing](https://your-domain.vercel.app/api/index)
```
>with your domain link instead of this.

---


### Roadmap
- ~~Set up http request~~
- ~~Return a string~~
- ~~Link last.fm api ~~
- ~~simple svg~~
- Custom default album artwork
- Cross-platform support (Windows)
- Unify local and server logic
- Dynamic album picture
- Background Gradient taking accent color from album picture
- Song truncation for longer songs
- More Theming option 
- Reducing setup friction

---
