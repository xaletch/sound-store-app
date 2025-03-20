import { TrackDownload, TrackLike, TrackLose, TrackPay } from "@/features/track";

interface TrackCardProps {
  image: string;
  name: string;
  genre: string;
  time: string;
  bpm: number;
  isLike: boolean;
  isPurchased: boolean;
  id: number;
  creator?: string;
}
export const TrackCard = ({ image, name, genre, time, bpm, isLike, isPurchased, id, creator }: TrackCardProps) => {
  return (
    <div className="grid grid-cols-[40px_10px_65px_38px_25px_12px_16px] md:grid-cols-[50px_25px_300px_38px_25px_20px_20px] responsive-grid justify-between items-center px-1">
      <div className="w-full">
        <img className="w-full h-auto rounded-md" src={image} alt={name} />
      </div>
      <div>
        <TrackLose id={id} name={name} creator={creator} loved={isLike} />
      </div>
      <div className="flex flex-col font-medium text-xs md:text-base">
        <div>{name}</div>
        <span className="text-[#1D1F22]/20">{genre}</span>
      </div>
      <div className="font-medium text-[#1D1F22]/20 text-xs md:text-base">{time}</div>
      <div className="font-medium text-[#1D1F22]/20 text-xs md:text-base">{bpm}</div>
      {isPurchased ? <TrackDownload id={id} /> : <TrackPay id={id} />}
      <TrackLike isLike={isLike} id={id} />
    </div>
  )
}
