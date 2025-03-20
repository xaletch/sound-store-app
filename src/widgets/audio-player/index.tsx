import { AudioControl, playerSelector, useAudioPlayer } from "@/features/audio-player";
import { setCurrentTime } from "@/features/audio-player/model/slice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AudioPlayer = () => {
  const dispatch = useDispatch();

  const { playerTrack, isPlaying, currentTime, tracks } = useSelector(playerSelector);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTimeRef = useRef(currentTime);

  const { play, pause, next, prev } = useAudioPlayer({ tracks: tracks || [] });

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.currentTime = currentTimeRef.current;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, playerTrack, currentTime]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      currentTimeRef.current = 0;
    }
  }, [playerTrack]);

  const handleTimeUpdate = () => {
    currentTimeRef.current = audioRef?.current?.currentTime || 0;
  };

  const trackEnded = () => {
    next();
  };

  useEffect(() => {
    const track = audioRef.current;
    if (track) {
      track.addEventListener('timeupdate', handleTimeUpdate);
      track.addEventListener('ended', trackEnded)

      return () => {
        track.removeEventListener('timeupdate', handleTimeUpdate);
        track.removeEventListener('ended', trackEnded);
      };
    }
  }, []);

  useEffect(() => {
    const track = audioRef.current;
    if (track && !isPlaying) {
      dispatch(setCurrentTime(currentTimeRef.current));
    }
  }, [isPlaying, dispatch]);

  return (
    <div className="fixed bottom-20 md:bottom-10 left-0 md:left-[260px] w-full md:w-auto md:right-0 px-5 md:px-5">
      <div className="bg-[#e7e4dd] border border-black rounded-3xl">
        <AudioControl
          isPlaying={isPlaying}
          onPlay={play}
          onPause={pause}
          onNext={next}
          onPrev={prev} 
          trackData={playerTrack}
        />
      </div>
      <audio ref={audioRef} src={playerTrack?.track || ''} />
    </div>
  )
}
