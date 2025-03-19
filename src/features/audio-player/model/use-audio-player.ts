import { useRef, useState } from "react";

export const useAudioPlayer = (initialTrack: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(initialTrack);
  const audioRef = useRef<HTMLAudioElement>(null);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const nextTrack = (nextTrackSrc: string) => {
    setCurrentTrack(nextTrackSrc);
    if (audioRef.current) {
      audioRef.current.src = nextTrackSrc;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  const prevTrack = (prevTrackSrc: string) => {
    setCurrentTrack(prevTrackSrc);
    if (audioRef.current) {
      audioRef.current.src = prevTrackSrc;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  return {
    isPlaying,
    currentTrack,
    audioRef,
    play,
    pause,
    stop,
    nextTrack,
    prevTrack,
  };
};