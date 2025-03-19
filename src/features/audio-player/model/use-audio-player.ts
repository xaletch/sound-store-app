import { useDispatch } from "react-redux";
import { setIsPlaying } from "./slice";

export const useAudioPlayer = () => {
  const dispatch = useDispatch();

  const play = () => {
    dispatch(setIsPlaying(true));
  };

  const pause = () => {
    dispatch(setIsPlaying(false));
  };

  const stop = () => {
    dispatch(setIsPlaying(false));
  };

  return {
    play,
    pause,
    stop,
  };
};