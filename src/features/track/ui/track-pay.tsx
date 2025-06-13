import { setDownloadTrackData, setDownloadTrackModal } from "@/entities/modals/model/slice";
import { PayIcon } from "@/shared/icons"
import { useDispatch } from "react-redux";

export interface ITrackPay {
  id: number;
  genre: string;
  creator: string;
  track: string;
}

export const TrackPay = ({ id, genre, creator, track }: ITrackPay) => {
  const dispatch = useDispatch();
  
  const handleDownload = async () => {
    dispatch(setDownloadTrackModal(true));
    dispatch(setDownloadTrackData({
      id: id, track: track,
      genre: genre,
      creator: creator
    }));
  }

  return (
    <button onClick={handleDownload} className="cursor-pointer flex items-center justify-center">
      <PayIcon />
    </button>
  )
}
