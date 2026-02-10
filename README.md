# codeChallengeSPotify Frontend - React + Typescript
This project is a frontend React application developed as part of a Full Stack Developer code challenge.
It integrates with the codeChallengeSpotify Rest API (https://github.com/rafaelcirq/codeChallengeSpotifyBackend) using music tracks ISRC codes to display their information retreived from the backend or store it, using a Spotify API Token.

## Spotify API Token
A standard Spotify Access Token could not be obtained since Spotify has blocked creation of new Apps.
A temporary token can be obtained at the get-an-album documentation page (https://developer.spotify.com/documentation/web-api/reference/get-an-album) and used as an input in this project to create new tracks.
The token is stored locally in the browser and is used only for authenticated requests to the backend endpoint responsible for creating new track records.

This approach is strictly a temporary solution and is not suitable for production environments.
Since the token is handled on the client side, it is exposde to typical frontend risks such as XSS attacks and should not be used for sensitive or long-lived credentials.

In a real-world application, authentication should be handled by the backend using a proper OAuth flow and secure HTTP-only cookies, ensuring that tokens are never exposed to client-side JavaScript.

The assumption in this challenge is that the backend environment is controlled and that the token provided is short-lived and used only for demonstration purposes.

## Features
- Search track metadata by ISRC code
- Create and store new tracks
- Display:
  - Track name
  - Artist name
  - Album name
  - Album cover image
  - Explicit content indicator
  - Playback duration in seconds  
- Error handling
- Responsive UI with Material UI (MUI)
- Routing with React Router
- Global state management with Zustand

## Stacks
- React + Typescript
- React router
- Zustand for state management
- Axios for HTTP requests
- Material UI for UI

## Live Demo

The frontend has been deployed to GitHub Pages and can be accessed here:

[https://rafaelcirq.github.io/codeChallengeSpotifyFrontend/#/]

The app interacts with my backend API (it's repository can be accessed below). To make it fully functional, you need to have the backend installed and running locally on the correct port. Without the backend, most features will not work.

Backend repository: https://github.com/rafaelcirq/codeChallengeSpotifyBackend

## Setup and Installtion
### Prerequisites
- Node.js (v18+ recommended)
- Backend running at http://localhost:8080/codechallenge

### Installation
```bash
git clone https://github.com/rafaelcirq/codeChallengeSpotifyFrontend
cd .\codeChallengeSpotifyFrontend\
npm install
npm run dev