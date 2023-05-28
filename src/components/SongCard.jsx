import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({song, isPlaying, activeSong, i, data}) => {
  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
  }

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-54 group">
        <div className={`absolute inset-0 justify-center items-center rounded-lg bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} className='rounded-lg'/>
      </div>
      <div className='mt-4 flex flex-col justify-center'>
        <Link to={`/songs/${song?.key}`}>
          <p className='font-semibold text-lg text-white text-center truncate'>{song.title}</p>
        </Link>
        <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
          <p className='text-sm text-gray-300 truncate text-center mt-1'>{song.subtitle}</p>
        </Link>
      </div>
    </div>
)};

export default SongCard;
