import { AudioControl, playerSelector, useAudioPlayer } from "@/features/audio-player";
import { setCurrentTime } from "@/features/audio-player/model/slice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AudioPlayer = () => {
  const dispatch = useDispatch();

  const { playerTrack, isPlaying, currentTime } = useSelector(playerSelector);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTimeRef = useRef(currentTime);

  const { play, pause } = useAudioPlayer();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.currentTime = currentTimeRef.current;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }

      if (playerTrack) {
        audioRef.current.currentTime = 0;
        currentTimeRef.current = 0;
      }
    }
  }, [isPlaying, playerTrack, currentTime]);

  const handleTimeUpdate = () => {
    currentTimeRef.current = audioRef?.current?.currentTime || 0;
  }

  useEffect(() => {
    const track = audioRef.current;
    if (track) {
      track.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        track.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  useEffect(() => {
    const track = audioRef.current;
    if (track && !isPlaying) {
      dispatch(setCurrentTime(currentTimeRef.current));
    }
  }, [isPlaying, dispatch]);

  const next = () => {
    console.log('next');
  };

  const prev = () => {
    console.log('prev');
  };

  return (
    <div className="fixed bottom-20 left-0 md:left-[260px] w-full md:w-auto md:right-0 px-5 md:px-5">
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
