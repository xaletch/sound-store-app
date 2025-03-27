import { AudioControl, playerSelector, useAudioPlayer } from "@/features/audio-player";
import { setCurrentTime, setIsPlayer, setIsPlaying, setPlayerTrack } from "@/features/audio-player/model/slice";
import { CloseIcon } from "@/shared/icons";
import { a } from "node_modules/framer-motion/dist/types.d-B50aGbjN";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AudioPlayer = () => {
  const dispatch = useDispatch();

  const { playerTrack, isPlaying, currentTime, tracks, isPlayer } = useSelector(playerSelector);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTimeRef = useRef(currentTime);

  const { play, pause, next, prev, like } = useAudioPlayer({ tracks: tracks || [] });

  useEffect(() => {
    if (audioRef.current && isPlayer) {
      if (isPlaying) {
        audioRef.current.currentTime = currentTimeRef.current;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, playerTrack, currentTime, isPlayer]);

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

  const close = () => {
    audioRef.current?.pause();
    
    dispatch(setIsPlaying(false));
    dispatch(setIsPlayer(false));
  }

  return (
    <div className="fixed bottom-20 1080:bottom-10 left-0 1080:left-[260px] w-full md:w-auto md:right-0 px-5 md:px-5">
      <div className="bg-[#e7e4dd] border border-black rounded-3xl relative">
        <button className="absolute cursor-pointer -top-2 -right-1 380:right-0 w-6 h-6 flex items-center justify-center bg-[#E7E4DD] rounded-full" onClick={close}>
          <CloseIcon />
        </button>
        <AudioControl
          isPlaying={isPlaying}
          onPlay={play}
          onPause={pause}
          onNext={next}
          onPrev={prev} 
          onLike={like}
          trackData={playerTrack}
        />
      </div>
      <audio ref={audioRef} src={playerTrack?.track || ''} />
    </div>
  )
}
