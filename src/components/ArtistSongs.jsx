import SongBar from './SongBar';

const ArtistSongs = ({ data, isPlaying, activeSong, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Top Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {data.map((song, i) => (
        <SongBar
          i={i}
          song={song}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          key={`${song.key}-${artistId}`}
        />
      ))}
    </div>
  </div>
);

export default ArtistSongs;
