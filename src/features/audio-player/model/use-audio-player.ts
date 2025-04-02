import { useDispatch, useSelector } from "react-redux";
import { setIsPlayer, setIsPlaying, setLovedPlayerTracks, updatePlayerTrackLoved } from "./slice";
import { ILovedTracks, IPlayerTrack, ITrackData } from "./types";
import { playerSelector } from "./selector";
import { useTrackPlay } from "./track-play";
import { useTrackLike } from "./track-like";
import { useEffect } from "react";

interface useAudioPlayerProps {
  tracks?: ITrackData[];
  playerTrack?: IPlayerTrack | undefined;
}

export const useAudioPlayer = ({ tracks, playerTrack }: useAudioPlayerProps) => {
  const dispatch = useDispatch();

  const { currentPlayingId, isPlayer } = useSelector(playerSelector);

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
    if (!isPlayer) {
      dispatch(setIsPlayer(true));
    }
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
      await playTrack(nextTrackData.Id, nextTrackData.Name, nextTrackData.Author, nextTrackData.PackId);
      dispatch(updatePlayerTrackLoved(nextTrackData.Loved!));
    }
  }

  const prev = async () => {
    if (!tracks || tracks.length === 0) return;

    const currentTrackIndex = tracks.findIndex(track => track.Id === currentPlayingId);
    const prevTrack = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    const prevTrackData = tracks[prevTrack];

    if (prevTrackData) {
      await playTrack(prevTrackData.Id, prevTrackData.Name, prevTrackData.Author, prevTrackData.PackId);
      dispatch(updatePlayerTrackLoved(prevTrackData.Loved!));
    }
  }

  const like = async () => {
    if (!playerTrack) return;
    const updateLoved = playerTrack.loved;

    if (updateLoved !== undefined) {
      await likeTrack(playerTrack.id, updateLoved);
  
      dispatch(updatePlayerTrackLoved(!updateLoved));
    }

    // console.log('like');

    // console.log('tracks ====', tracks)
    // if (!tracks || tracks.length === 0) return;

    // const currentTrackIndex = tracks.findIndex(track => track.Id === currentPlayingId);
    // const currentTrack = currentTrackIndex % tracks.length;
    // const currentTrackData = tracks[currentTrack];

    // if (currentTrackData) {
    //   await likeTrack(currentTrackData.Id, currentTrackData.Loved || false);
    // }
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