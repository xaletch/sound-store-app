import { TrackDownload, TrackLike, TrackLose, TrackPay } from "@/features/track";
import { trackDuration } from "@/features/track/model";

interface TrackCardProps {
  image: string;
  name: string;
  genre: string;
  duration: number;
  bpm: number;
  isLike: boolean;
  isPurchased: boolean;
  id: number;
  packId: number;
  creator?: string;
}
export const TrackCard = ({ image, name, genre, duration, bpm, isLike, isPurchased, id, creator, packId }: TrackCardProps) => {
  
  const DURATION = trackDuration(duration);
  return (
    <div className="grid grid-cols-[40px_10px_65px_38px_25px_12px_16px] md:grid-cols-[50px_25px_300px_38px_25px_20px_20px] responsive-grid justify-between items-center px-1">
      <div className="w-full">
        <img className="w-full h-auto rounded-md" src={image} alt={name} />
      </div>
      <div>
        <TrackLose id={id} name={name} author={creator || ''} loved={isLike} packId={packId} />
      </div>
      <div className="flex flex-col font-medium text-xs md:text-base">
        <div>{name}</div>
        <span className="text-[#1D1F22]/20">{genre}</span>
      </div>
      <div className="font-medium text-[#1D1F22]/20 text-xs md:text-base">{DURATION}</div>
      <div className="font-medium text-[#1D1F22]/20 text-xs md:text-base">{bpm}</div>
      {isPurchased ? <TrackDownload /> : <TrackPay id={id} track={name} genre={genre} creator={creator || ''} />}
      <TrackLike isLike={isLike} id={id} />
    </div>
  )
}
