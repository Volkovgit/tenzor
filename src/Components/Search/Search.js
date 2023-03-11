import { apiConnect } from "../../apiConnect";
import "./Search.css";
import SquareCard from "./SquareCard/SquareCard";
import TrackCard from "./TrackCard/TrackCard";
import { useEffect, useState } from "react";

function Search() {
  const api = apiConnect();
  const [searchValue,setSearchValue] = useState("");
  const [trackListBySearch, setTrackListBySearch] = useState([]);
  const [artistListBySearch, setArtistListBySearch] = useState([]);
  const [albumsListBySearch, setAlbumsListBySearch] = useState([]);
  function searchByText(e) {
    if (e.key === "Enter") {
        
      const artistName = document.querySelector(".search-input__item").value;
      setSearchValue(artistName)
      searchArtistAlbums(artistName).then((data) => {
        setAlbumsListBySearch(data.topalbums.album);
      });
      searchArtistTracks(artistName).then((data) => {
        setTreckDurationToTrackList(data.toptracks.track).then((tracks) => setTrackListBySearch(tracks));
      });
      searchAuthorsByName(artistName).then((data) => setArtistListBySearch(data.results.artistmatches.artist));
    }
  }

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

  return (
    <div className="search">
      <div className="search-header">
        <h1 className="search-header__text">Search result for "{searchValue}"</h1>
        <fieldset id="search-radioGroup" className="radio_fieldlist">
          <div className="search-radio">
            <input className="search-radio__input" type="radio" id="Result" name="search-radioGroup" value="Result" />
            <label className="search-radio__label" htmlFor="Result">
              Top Result
            </label>
          </div>
          <div className="search-radio">
            <input className="search-radio__input" type="radio" id="Artist" name="search-radioGroup" value="Artist" />
            <label className="search-radio__label" htmlFor="Artist">
              Artist
            </label>
          </div>
          <div className="search-radio">
            <input className="search-radio__input" type="radio" id="Albums" name="search-radioGroup" value="Albums" />
            <label className="search-radio__label" htmlFor="Albums">
              Albums
            </label>
          </div>
          <div className="search-radio">
            <input className="search-radio__input" type="radio" id="Tracks" name="search-radioGroup" value="Tracks" />
            <label className="search-radio__label" htmlFor="Tracks">
              Tracks
            </label>
          </div>
        </fieldset>
      </div>
      <div className="underline_long gray"></div>
      <div className="search-input">
        <input className="search-input__item" onKeyPress={searchByText} type="text" name="" id="" />
      </div>
      <div className="search-result">
        <div className="search-result-block">
          <div className="result-header">
            <h2>Artist</h2>
          </div>
          <div className="result-list">
            {artistListBySearch.map(artist=><SquareCard key={Math.random()*100000}name={artist.name} listeners={artist.listeners} image={artist.image}></SquareCard>)}
          </div>
        </div>
        <div className="search-result-block">
          <div className="result-header">
            <h2>Albums</h2>
          </div>
          <div className="result-list">
            {albumsListBySearch.map(album=><SquareCard key={Math.random()*100000} name={album.name} author={album.artist.name} image={album.image}></SquareCard>)}
          </div>
        </div>
        <div className="search-result-block">
          <div className="result-header">
            <h2>Tracks</h2>
          </div>
          <div className="result-list-tracks">
            {trackListBySearch.map(track=><TrackCard key={Math.random()*100000} name={track.name} artist={track.artist.name} duration={track.duration} images={track.image}></TrackCard>)}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Search;
