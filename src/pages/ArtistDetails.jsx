import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery, useGetArtistTopSongsQuery } from '../redux/services/shazam';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetail, error } = useGetArtistDetailsQuery(artistId);
  const { data: songData, isFetching: isFetchingArtistTopSongs, error: topSongsError } = useGetArtistTopSongsQuery(artistId);

  if (isFetchingArtistDetail || isFetchingArtistTopSongs) return <Loader title="Loading artist details" />;
  if (error || topSongsError) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedSongs data={songData} isPlaying={isPlaying} activeSong={activeSong} artistId={artistId} />
    </div>
  );
};

export default ArtistDetails;
