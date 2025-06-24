import { useGetPackPhotoQuery } from "@/entities/sound/model/services";
import { TrackDownload, TrackLike, TrackLose, TrackPay } from "@/features/track";
import { trackDuration } from "@/features/track/model";

interface TrackCardProps {
  image?: string;
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
export const TrackCard = ({ name, genre, duration, bpm, isLike, isPurchased, id, creator, packId }: TrackCardProps) => {
  
  const { data: photo } = useGetPackPhotoQuery({ id: packId.toString() });

  const DURATION = trackDuration(duration);
  return (
    <div className="grid grid-cols-[40px_10px_65px_38px_25px_12px_16px] 400:grid-cols-[48px_10px_65px_38px_25px_12px_16px] md:grid-cols-[64px_25px_300px_38px_25px_20px_20px] responsive-grid justify-between items-center px-1">
      <div className="w-full h-[40px] 400:h-[48px] md:h-[64px]">
        <img className="w-full h-auto rounded-md" src={`data:image/png;base64, ${photo?.Photo}`} alt={name} />
        {/* <img src="/public/life-wonderful.jpg" alt={name} className="w-full h-full object-cover rounded-md" /> */}
      </div>
      <div className="flex items-center justify-center">
        <TrackLose id={id} name={name} author={creator || ''} loved={isLike} packId={packId} />
      </div>
      <div className="flex flex-col font-medium text-xs md:text-base flex-1">
        <div className="text-[#1D1F22] font-medium text-xs md:text-base line-clamp-2 break-words">{name}</div>
        <span className="text-[#1D1F22]/20">{creator}</span>
      </div>
      <div className="font-medium text-[#1D1F22]/20 text-xs md:text-base">{DURATION}</div>
      <div className="font-medium text-[#1D1F22]/20 text-xs md:text-base">{bpm === 0 ? '' : bpm}</div>
      {isPurchased ? <TrackDownload /> : <TrackPay id={id} track={name} genre={genre} creator={creator || ''} />}
      <TrackLike isLike={isLike} id={id} />
    </div>
  )
}
