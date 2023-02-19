import { apiConnect } from "./apiConnect.js";
const api = apiConnect();

const searchInput = document.querySelector(".search_input");
const searchHeader = document.querySelector(".searchTextfromInput");

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const artistName = searchInput.value;
    searchHeader.textContent = searchInput.value;
    searchArtistAlbums(artistName).then((data) => {
      setAtristTopAlbums(data.topalbums.album);
    });
    searchArtistTracks(artistName).then((data) => {
      setTreckDurationToTrackList(data.toptracks.track).then((tracks) => setArtistTopTracks(tracks));
    });
    searchAuthorsByName(artistName).then((data) => setArtistCardByName(data.results.artistmatches.artist));
  }
});

async function searchArtistAlbums(artist) {
  const requstParams = { method: "artist.getTopAlbums", format: "json", artist };
  return await api.request(requstParams);
}

async function searchArtistTracks(artist) {
  const requstParams = { method: "artist.getTopTracks", format: "json", artist };
  return await api.request(requstParams);
}

async function searchTrackInfo(mbid) {
  const requstParams = { method: "track.getInfo", format: "json", mbid };
  return await api.request(requstParams);
}

async function searchAuthorsByName(artist) {
  const requstParams = { method: "artist.search", format: "json", artist };
  return await api.request(requstParams);
}

async function setTreckDurationToTrackList(tracks) {
  tracks = tracks.filter((track) => track.mbid);
  const tracksWithTimer = await Promise.all(
    tracks.map(async (track) => {
      await searchTrackInfo(track.mbid).then((data) => {
        track.duration = data.track.duration;
      });
      return track;
    })
  );
  return tracksWithTimer;
}

function setAtristTopAlbums(albumsList) {
  const container = document.querySelector(".topAlbumsContainer").querySelector(".topAlbums");
  albumsList.forEach((album) => {
    container.innerHTML += `<div class="art_card_music"> 
    <img class="art_card_music_img" src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" alt="">
    <div class="art_card_music_text_container">
      <p class="artist_name artist_card_text">${album.name}</p>
      <p class="listener_counter artist_card_text">${album.playcount} listeners</p>
    </div>
  </div>`;
  });
}

function setArtistTopTracks(trackList) {
  const container = document.querySelector(".trackListContainer");
  trackList.forEach((track) => {
    container.innerHTML += `<div class="track_card">
    <div class="play-button-outer">
      <svg fill="#000000" class="svgPlayButton"  viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
        <path d="M175 .024V1920l1570.845-959.927z" fill-rule="evenodd"/>
    </svg>
    </div>
    <div class="img_track_container">
      <img class="img_track" src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" alt="" />
    </div>
    <div class="play-button-outer">
      <svg viewBox="0 0 24 24" class="svgPlayButton"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z"
            fill="#000000" />
    </svg>
    </div>
    <div class="song_name_container">
      <p class="song_name">${track.name}</p>
    </div>
    <div class="song__artis_container">
      <p class="artist_name_text">${track.artist.name}</p>
    </div>
    <div class="song__time_container">
      <p class="time_name">${Math.floor(track.duration / 60000)}:${Math.floor(track.duration - Math.floor(track.duration / 60000) * 60000) / 1000}</p>
    </div>
    
  </div>
  <div class="underline_long_song mr-t-1"></div>`;
  });
}

function setArtistCardByName(artistList) {
  const container = document.querySelector(".artistListContainer");
  artistList.forEach(artist=>{
    container.innerHTML += `<div class="art_card_music">
    <img class="art_card_music_img" src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" alt="" />
    <div class="art_card_music_text_container">
      <p class="artist_name artist_card_text">${artist.name}</p>
      <p class="listener_counter artist_card_text">${artist.listeners} listeners</p>
    </div>
  </div>`
  })
}
