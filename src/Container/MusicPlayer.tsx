/**
 * Music Player Component
 * Provides background music with playlist functionality
 * Automatically reduces volume when videos are playing
 */
import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

// Import music files
import song1 from '../assets/music/2 Friendly Pressure Into The Sunshine Mix - Jhelisa.mp3';
import song2 from '../assets/music/3 Heaven Smoove Step Mix - Sunship Feat Anita Kelsey Anita Kelsey.mp3';
import song3 from '../assets/music/11 City Life Soul Mix - Sunship Feat Anita Kelsey Anita Kelsey.mp3';

interface Song {
  title: string;
  artist: string;
  src: string;
}

// Playlist configuration
const playlist: Song[] = [
  {
    title: 'City Life',
    artist: 'Sunship Feat Anita Kelsey',
    src: song3
  },
  {
    title: 'Friendly Pressure',
    artist: 'Jhelisa',
    src: song1
  },
  {
    title: 'Heaven',
    artist: 'Sunship Feat Anita Kelsey',
    src: song2
  }
];

function MusicPlayer() {
  // State management
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [originalVolume, setOriginalVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = playlist[currentSongIndex];

  // Auto-play on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log('Auto-play prevented:', err);
        setIsPlaying(false);
      });
    }
  }, []);

  // Listen for video playback events and adjust music volume
  useEffect(() => {
    const handleVideoPlaying = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail.playing) {
        // Save current volume and reduce to 20% when video plays
        setOriginalVolume(volume);
        setVolume(volume * 0.2);
      } else {
        // Restore original volume when video pauses
        setVolume(originalVolume);
      }
    };

    window.addEventListener('videoPlaying', handleVideoPlaying);
    return () => {
      window.removeEventListener('videoPlaying', handleVideoPlaying);
    };
  }, [volume, originalVolume]);

  // Update audio volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Toggle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Play previous track
  const playPrevious = () => {
    const newIndex = currentSongIndex === 0 ? playlist.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };

  // Play next track
  const playNext = () => {
    const newIndex = currentSongIndex === playlist.length - 1 ? 0 : currentSongIndex + 1;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };

  // Auto-play when song changes
  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentSongIndex, isPlaying]);

  // Update playback time
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Load metadata
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Auto-play next track when current ends
  const handleEnded = () => {
    playNext();
  };

  // Handle progress bar change
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // Format time display (mm:ss)
  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`music-player ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {!isExpanded ? (
        <div className="collapsed-container">
          <button
            className="collapsed-play-btn"
            onClick={togglePlay}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button
            className="collapsed-expand-btn"
            onClick={() => setIsExpanded(true)}
            title="Expand Player"
          >
            ▶
          </button>
        </div>
      ) : (
        <>
          <button
            className="toggle-button"
            onClick={() => setIsExpanded(false)}
            title="Minimize"
          >
            ◀
          </button>

          <div className="player-content">
            <div className="song-info">
              <div className="music-icon">🎵</div>
              <h3 className="song-title">{currentSong.title}</h3>
            </div>

            {/* Vertical Progress Bar */}
            <div className="progress-container">
              <span className="time">{formatTime(currentTime)}</span>
              <input
                type="range"
                className="progress-bar"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleProgressChange}
              />
              <span className="time">{formatTime(duration)}</span>
            </div>

            {/* Playback Controls */}
            <div className="controls">
              <button className="control-btn" onClick={playPrevious} title="Previous">
                ⏮
              </button>
              <button className="control-btn play-btn" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button className="control-btn" onClick={playNext} title="Next">
                ⏭
              </button>
            </div>

            {/* Volume Control */}
            <div className="volume-container">
              <span className="volume-icon">🔊</span>
              <input
                type="range"
                className="volume-slider"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
              />
              <span className="volume-value">{Math.round(volume * 100)}%</span>
            </div>
          </div>
        </>
      )}

      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
    </div>
  );
}

export default MusicPlayer;

