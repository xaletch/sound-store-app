import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "./slice";
import { ITrackData } from "./types";
import { playerSelector } from "./selector";
import { useTrackPlay } from "./track-play";

interface useAudioPlayerProps {
  tracks?: ITrackData[];
}

export const useAudioPlayer = ({ tracks }: useAudioPlayerProps) => {
  const dispatch = useDispatch();

  const { currentPlayingId } = useSelector(playerSelector);

  const { playTrack } = useTrackPlay();

  const play = () => {
    dispatch(setIsPlaying(true));
  };

  const pause = () => {
    dispatch(setIsPlaying(false));
  };

  const stop = () => {
    dispatch(setIsPlaying(false));
  };

  const next = async () => {
    if (!tracks || tracks.length === 0) return;

    const currentTrack = tracks.findIndex(track => track.Id === currentPlayingId);
    const nextTrack = (currentTrack + 1) % tracks.length;
    const nextTrackData = tracks[nextTrack];

    if (nextTrackData) {
      await playTrack(nextTrackData.Id, nextTrackData.Name, nextTrackData.PackId.toString());
    }
  }

  const prev = async () => {
    if (!tracks || tracks.length === 0) return;

    const currentTrack = tracks.findIndex(track => track.Id === currentPlayingId);
    const prevTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    const prevTrackData = tracks[prevTrack];

    if (prevTrackData) {
      await playTrack(prevTrackData.Id, prevTrackData.Name, prevTrackData.PackId.toString());
    }
  }

  return {
    play,
    pause,
    stop,
    next,
    prev
  };
};