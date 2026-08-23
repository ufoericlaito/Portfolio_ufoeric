/**
 * Music Player Component
 * Provides background music with playlist functionality
 * Automatically fades out when other page media is playing
 */
import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

import song1 from '../assets/music/2 Friendly Pressure Into The Sunshine Mix - Jhelisa.mp3';
import song2 from '../assets/music/3 Heaven Smoove Step Mix - Sunship Feat Anita Kelsey Anita Kelsey.mp3';
import song3 from '../assets/music/11 City Life Soul Mix - Sunship Feat Anita Kelsey Anita Kelsey.mp3';

interface Song {
  title: string;
  artist: string;
  src: string;
}

const DEFAULT_VOLUME = 0.1;
const FADE_DURATION_MS = 500;

const playlist: Song[] = [
  { title: 'City Life', artist: 'Sunship Feat Anita Kelsey', src: song3 },
  { title: 'Friendly Pressure', artist: 'Jhelisa', src: song1 },
  { title: 'Heaven', artist: 'Sunship Feat Anita Kelsey', src: song2 },
];

function isYouTubeEmbed(iframe: HTMLIFrameElement) {
  return /youtube\.com\/embed|youtube-nocookie\.com\/embed/.test(iframe.src);
}

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null);
  const volumeRef = useRef(DEFAULT_VOLUME);
  const isDuckedRef = useRef(false);
  const wasPlayingBeforeDuckRef = useRef(false);
  const fadeFrameRef = useRef<number | null>(null);
  const youtubeStatesRef = useRef(new Map<MessageEventSource, number>());
  const customMediaActiveRef = useRef(false);
  const youtubeInteractionUntilRef = useRef(0);
  const syncDuckStateRef = useRef<() => void>(() => {});

  const currentSong = playlist[currentSongIndex];

  const setAudioVolumeImmediate = (value: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = Math.max(0, Math.min(1, value));
    }
  };

  const cancelFade = () => {
    if (fadeFrameRef.current !== null) {
      cancelAnimationFrame(fadeFrameRef.current);
      fadeFrameRef.current = null;
    }
  };

  const fadeAudioTo = (target: number, onComplete?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;

    cancelFade();

    const start = audio.volume;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / FADE_DURATION_MS);
      setAudioVolumeImmediate(start + (target - start) * progress);

      if (progress < 1) {
        fadeFrameRef.current = requestAnimationFrame(tick);
        return;
      }

      fadeFrameRef.current = null;
      onComplete?.();
    };

    fadeFrameRef.current = requestAnimationFrame(tick);
  };

  const isBackgroundAudio = (element: EventTarget | null) => {
    const audio = audioRef.current;
    return element === audio || (element instanceof HTMLElement && element.dataset.backgroundMusic === 'true');
  };

  const getMediaElement = (target: EventTarget | null): HTMLMediaElement | null => {
    if (target instanceof HTMLMediaElement) return target;
    if (target instanceof Element) {
      const media = target.closest('video, audio');
      if (media instanceof HTMLMediaElement) return media;
    }
    return null;
  };

  const isExternalMediaActive = () => {
    if (customMediaActiveRef.current) return true;
    if (Date.now() < youtubeInteractionUntilRef.current) return true;

    const backgroundAudio = audioRef.current;
    const mediaElements = document.querySelectorAll('video, audio');

    for (const node of mediaElements) {
      const media = node as HTMLMediaElement;
      if (media === backgroundAudio) continue;
      if (media.dataset.backgroundMusic === 'true') continue;
      if (!media.paused && !media.ended) return true;
    }

    return Array.from(youtubeStatesRef.current.values()).some((state) => state === 1);
  };

  const syncDuckState = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const shouldDuck = isExternalMediaActive();

    if (shouldDuck && !isDuckedRef.current) {
      isDuckedRef.current = true;
      wasPlayingBeforeDuckRef.current = !audio.paused;
      fadeAudioTo(0, () => {
        if (isDuckedRef.current && wasPlayingBeforeDuckRef.current) {
          audio.pause();
          setIsPlaying(false);
        }
      });
      return;
    }

    if (!shouldDuck && isDuckedRef.current) {
      isDuckedRef.current = false;

      if (wasPlayingBeforeDuckRef.current) {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }

      fadeAudioTo(volumeRef.current);
    }
  };

  syncDuckStateRef.current = syncDuckState;

  const requestSync = () => {
    window.requestAnimationFrame(() => syncDuckStateRef.current());
  };

  const bindMediaElement = (media: HTMLMediaElement) => {
    if (media.dataset.backgroundMusic === 'true') return;
    if (media.dataset.mediaDuckBound === 'true') return;

    media.dataset.mediaDuckBound = 'true';

    const onPlay = () => requestSync();
    const onStop = () => window.setTimeout(() => requestSync(), 50);

    media.addEventListener('play', onPlay);
    media.addEventListener('playing', onPlay);
    media.addEventListener('pause', onStop);
    media.addEventListener('ended', onStop);
  };

  const subscribeYouTubeIframe = (iframe: HTMLIFrameElement) => {
    if (!isYouTubeEmbed(iframe)) return;
    if (iframe.dataset.youtubeDuckBound === 'true') return;

    iframe.dataset.youtubeDuckBound = 'true';

    const sendListening = () => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'listening', id: iframe.src, channel: 'widget' }),
        '*'
      );
    };

    iframe.addEventListener('load', sendListening);
    sendListening();
  };

  const scanPageMedia = () => {
    document.querySelectorAll('video, audio').forEach((node) => {
      bindMediaElement(node as HTMLMediaElement);
    });
    document.querySelectorAll('iframe').forEach((node) => {
      subscribeYouTubeIframe(node as HTMLIFrameElement);
    });
  };

  useEffect(() => {
    volumeRef.current = volume;
    if (!isDuckedRef.current) {
      setAudioVolumeImmediate(volume);
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = DEFAULT_VOLUME;
    audio.play().catch(() => setIsPlaying(false));
  }, []);

  useEffect(() => {
    const handleMediaPlay = (event: Event) => {
      const media = getMediaElement(event.target);
      if (!media || isBackgroundAudio(media)) return;
      requestSync();
    };

    const handleMediaStop = (event: Event) => {
      const media = getMediaElement(event.target);
      if (!media || isBackgroundAudio(media)) return;
      window.setTimeout(() => requestSync(), 50);
    };

    const handleCustomVideoPlaying = (event: Event) => {
      const customEvent = event as CustomEvent<{ playing?: boolean }>;
      if (typeof customEvent.detail?.playing === 'boolean') {
        customMediaActiveRef.current = customEvent.detail.playing;
      } else {
        customMediaActiveRef.current = true;
      }
      requestSync();
    };

    const handleCustomVideoPaused = () => {
      customMediaActiveRef.current = false;
      requestSync();
    };

    const handleYouTubeMessage = (event: MessageEvent) => {
      if (!event.origin.includes('youtube.com')) return;

      let payload: Record<string, unknown>;
      try {
        payload = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }

      if (!payload || typeof payload !== 'object' || !event.source) return;

      if (payload.event === 'infoDelivery') {
        const info = payload.info as { playerState?: number } | undefined;
        if (typeof info?.playerState === 'number') {
          youtubeStatesRef.current.set(event.source, info.playerState);
          if (info.playerState === 0 || info.playerState === 2) {
            youtubeInteractionUntilRef.current = 0;
          }
          requestSync();
        }
      }

      if (payload.event === 'onStateChange' && typeof payload.info === 'number') {
        youtubeStatesRef.current.set(event.source, payload.info);
        if (payload.info === 0 || payload.info === 2) {
          youtubeInteractionUntilRef.current = 0;
        }
        requestSync();
      }
    };

    const handleYouTubeInteraction = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest('.youtube-video-wrapper')) return;

      youtubeInteractionUntilRef.current = Date.now() + 10 * 60 * 1000;
      requestSync();
    };

    scanPageMedia();

    const observer = new MutationObserver(() => {
      scanPageMedia();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('play', handleMediaPlay, true);
    document.addEventListener('playing', handleMediaPlay, true);
    document.addEventListener('pause', handleMediaStop, true);
    document.addEventListener('ended', handleMediaStop, true);
    document.addEventListener('click', handleYouTubeInteraction, true);
    window.addEventListener('message', handleYouTubeMessage);
    window.addEventListener('videoPlaying', handleCustomVideoPlaying);
    window.addEventListener('videoPaused', handleCustomVideoPaused);

    return () => {
      observer.disconnect();
      document.removeEventListener('play', handleMediaPlay, true);
      document.removeEventListener('playing', handleMediaPlay, true);
      document.removeEventListener('pause', handleMediaStop, true);
      document.removeEventListener('ended', handleMediaStop, true);
      document.removeEventListener('click', handleYouTubeInteraction, true);
      window.removeEventListener('message', handleYouTubeMessage);
      window.removeEventListener('videoPlaying', handleCustomVideoPlaying);
      window.removeEventListener('videoPaused', handleCustomVideoPaused);
      cancelFade();
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const playPrevious = () => {
    setCurrentSongIndex((index) => (index === 0 ? playlist.length - 1 : index - 1));
    setIsPlaying(true);
  };

  const playNext = () => {
    setCurrentSongIndex((index) => (index === playlist.length - 1 ? 0 : index + 1));
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !isPlaying) return;

    audio.play().catch(() => setIsPlaying(false));
  }, [currentSongIndex, isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    playNext();
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

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
          <button className="collapsed-play-btn" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="collapsed-expand-btn" onClick={() => setIsExpanded(true)} title="Expand Player">
            ▶
          </button>
        </div>
      ) : (
        <>
          <button className="toggle-button" onClick={() => setIsExpanded(false)} title="Minimize">
            ◀
          </button>

          <div className="player-content">
            <div className="song-info">
              <div className="music-icon">🎵</div>
              <h3 className="song-title">{currentSong.title}</h3>
            </div>

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

            <div className="controls">
              <button className="control-btn" onClick={playPrevious} title="Previous">⏮</button>
              <button className="control-btn play-btn" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button className="control-btn" onClick={playNext} title="Next">⏭</button>
            </div>

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
        data-background-music="true"
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
    </div>
  );
}

export default MusicPlayer;
