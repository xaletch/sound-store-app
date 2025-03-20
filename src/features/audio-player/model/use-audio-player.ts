import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setLovedPlayerTracks } from "./slice";
import { ILovedTracks, ITrackData } from "./types";
import { playerSelector } from "./selector";
import { useTrackPlay } from "./track-play";
import { useTrackLike } from "./track-like";
import { useEffect } from "react";

interface useAudioPlayerProps {
  tracks?: ITrackData[];
}

export const useAudioPlayer = ({ tracks }: useAudioPlayerProps) => {
  const dispatch = useDispatch();

  const { currentPlayingId } = useSelector(playerSelector);

  const { playTrack } = useTrackPlay();
  const { likeTrack } = useTrackLike();

  useEffect(() => {
    if (!tracks?.length) return;
    
    const updates = tracks.reduce<ILovedTracks[]>((acc, track) => {
      if (track.Loved !== undefined) {
        acc.push({ trackId: track.Id, loved: track.Loved });
      }
      return acc;
    }, []);
  
    if (updates.length > 0) {
      dispatch(setLovedPlayerTracks(updates));
    }
  }, [tracks, dispatch]);

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

    const currentTrackIndex = tracks.findIndex(track => track.Id === currentPlayingId);
    const nextTrack = (currentTrackIndex + 1) % tracks.length;
    const nextTrackData = tracks[nextTrack];

    if (nextTrackData) {
      await playTrack(nextTrackData.Id, nextTrackData.Name, nextTrackData.PackId.toString());
    }
  }

  const prev = async () => {
    if (!tracks || tracks.length === 0) return;

    const currentTrackIndex = tracks.findIndex(track => track.Id === currentPlayingId);
    const prevTrack = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    const prevTrackData = tracks[prevTrack];

    if (prevTrackData) {
      await playTrack(prevTrackData.Id, prevTrackData.Name, prevTrackData.PackId.toString());
    }
  }

  const like = async () => {
    if (!tracks || tracks.length === 0) return;

    const currentTrackIndex = tracks.findIndex(track => track.Id === currentPlayingId);
    const currentTrack = currentTrackIndex % tracks.length;
    const currentTrackData = tracks[currentTrack];

    if (currentTrackData) {
      await likeTrack(currentTrackData.Id, currentTrackData.Loved || false);
    }
  };

  return {
    play,
    pause,
    stop,
    next,
    prev,
    like
  };
};