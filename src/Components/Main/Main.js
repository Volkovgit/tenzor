import ArtistCard from "./Card/ArtistCard/ArtistCard";
import MusicCard from "./Card/MusicCard/MusicCard";
import "./Main.css";
import { lasFmInterface as requestInterface } from "../../lasFmInterface";
import { useEffect, useState } from "react";



function Main() {
  const lasFmInterface = requestInterface();
  const [topAutorsList, setTopAutorsList] = useState([]);
  const [topTrackList, setTopTrackList] = useState([]);
  async function getArtistList() {
    const res = await lasFmInterface.getTopArtist();
    return await res.artists.artist;
  }
  async function getTagsByArtistName(name) {
    return await lasFmInterface.getTopAuthorsTags(name);
  }
  async function setArtistTagsInArtistCard(artists, tagCount) {
    const artistWithTags = await Promise.all(
      artists.map(async (artist) => {
        await getTagsByArtistName(artist.name).then((tags) => {
          artist.toptags = tags.toptags.tag
            .slice(0, tagCount)
            .map((tag) => tag.name);
        });
        return artist;
      })
    );
    return artistWithTags;
  }

  async function getTrackList(){
    const res = await lasFmInterface.getTopTracks();
    return await res.tracks.track;
  }

  async function setArtistTagInTrackCard(tracks, tagCount) {
    const tracksWithArtistTag = await Promise.all(
      tracks.map(async (track) => {
        await getTagsByArtistName(track.artist.name).then((tags) => {
          track.toptags = tags.toptags.tag
            .slice(0, tagCount)
            .map((tag) => tag.name);
        });
        return track;
      })
    );
    return tracksWithArtistTag;
  }

  useEffect(() => {
    getArtistList().then((data) => {
      setArtistTagsInArtistCard(data,2).then((artistList) => {
        setTopAutorsList(artistList);
      })
    });
    getTrackList().then(trackList=>{
      setArtistTagInTrackCard(trackList,2).then(tracks=>{
        setTopTrackList(tracks);
      })
    })
  }, []);

  return (
    <div className="main">
      <div className="main-text-centered">
        <span className="main-text-centered__text h1 text_centred">Music</span>
      </div>
      <div className="main-card-list">
        <div className="cardList-header hotRightNow">
          <p className="cardList-header__text">Hot right now</p>
          <div className="cardList-header__underline"></div>
          <div className="card-list grid-6col">
            {topAutorsList.map((card) => {
              return <ArtistCard key={card.mbid+card.name} name={card.name} type={card.toptags}></ArtistCard>;
            })}
          </div>
        </div>
        <div className="cardList-header popularTracks">
          <p className="cardList-header__text">Popular track</p>
          <div className="cardList-header__underline"></div>
          <div className="card-list grid-3col">
            {
              topTrackList.map(track=>{
                return <MusicCard key={track.artist.mbid + track.name} name={track.name} type={track.toptags}artist={track.artist}></MusicCard>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
