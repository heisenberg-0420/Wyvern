import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {Object.keys(data).length > 0 ? data.tracks.map((song, i) => (
        <SongBar
          i={i}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          key={song.key}
          handlePlayClick={handlePlayClick}
          handlePauseClick={handlePauseClick}
        />
      )) : <p className="text-gray-400 text-base my-1">No related songs found</p>}
    </div>
  </div>
);

export default RelatedSongs;
