import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetGenreSongsQuery } from '../redux/services/shazam';
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetGenreSongsQuery(genreListId || '1');

  if (isFetching) return <Loader title="loading songs..." />;
  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Discover <span className="font-bold text-[#e09c42]">{genreTitle}</span></h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || '1'}
          className="bg-[#441111] bg-gradient-to-br from-[#8b1604] to-[#220602] text-white p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.tracks?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} isPlaying={isPlaying} activeSong={activeSong} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
