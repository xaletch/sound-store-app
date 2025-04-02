import { useLovedTrackMutation, useUnLovedTrackMutation } from "@/entities/loved/model/services";
import { useDispatch } from "react-redux";
import { setLovedPlayerTracks } from "./slice";

export const useTrackLike = () => {
  const dispatch = useDispatch();

  const [loved] = useLovedTrackMutation();
  const [unLoved] = useUnLovedTrackMutation();
  
  const likeTrack = async (id: number, isLike: boolean) => {
    try {
      if (isLike) {
        await unLoved({ id: id.toString() });

        dispatch(setLovedPlayerTracks([{ trackId: id, loved: false }]));
      } else {
        await loved({ id: id.toString() });

        dispatch(setLovedPlayerTracks([{ trackId: id, loved: true }]));
      }
    }
    catch (err) {
      console.error('Не удалось добавить трек в избранное', err);
    }
  }
  return { likeTrack }
}
