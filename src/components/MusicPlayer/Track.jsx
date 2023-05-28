import React from 'react';
import loader2 from '../../assets/loader2.svg'
import loader3 from '../../assets/loader3.svg'

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    {isPlaying && <img src={loader2} alt="loader" className="w-32 h-12 object-contain m-0" />}
    <div className={`${isPlaying && isActive ? '' : ''} hidden sm:block h-16 w-16 mr-4 ml-0`}>
      {/* animate-[spin_3s_linear_infinite] */}
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
