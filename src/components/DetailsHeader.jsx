import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  let artist;
  if (artistData?.artists) {
    artist = artistData.artists[artistId].attributes;
  }

  if (artistData?.data) {
    artist = artistData.data[0].attributes;
  }

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-[#1b0b01] sm:h-40 h-20 rounded-sm" />
      <div className="absolute inset-0 flex items-center left-[1px]">
        <img
          alt="art"
          src={artistId ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart}
          className="sm:w-36 w-16 sm:h-36 h-16 rounded-full object-cover border-2 shadow-xl shadow-[#000]"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artist?.name : songData?.title}</p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">{artistId ? artist?.genreNames[0] : songData?.genres?.primary}</p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
