import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => {
  const tracks = data?.tracks ? data.tracks.slice(0, 10) : data.data;

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      <div className="mt-6 w-full flex flex-col">
        {Object.keys(data).length > 0 ? tracks.map((song, i) => (
          <SongBar
            i={i}
            song={song}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            key={`${song.key}-${artistId}`}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick}
          />
        )) : <p className="text-gray-400 text-base my-1">No related songs found</p>}
      </div>
    </div>
  );
};

export default RelatedSongs;
