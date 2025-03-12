import { TrackDownload, TrackLike, TrackLose, TrackPay } from "@/features/track";

interface TrackCardProps {
  image: string;
  name: string;
  genre: string;
  time: string;
  bpm: number;
  isLike: boolean;
  isPurchased: boolean;
}
export const TrackCard = ({ image, name, genre, time, bpm, isLike, isPurchased }: TrackCardProps) => {
  return (
    <div className="grid grid-cols-[40px_10px_65px_38px_25px_12px_16px] responsive-grid justify-between items-center px-1">
      <div className="w-full">
        <img className="w-full h-auto rounded-md" src={image} alt={name} />
      </div>
      <div>
        <TrackLose />
      </div>
      <div className="flex flex-col font-medium text-xs">
        <div>{name}</div>
        <span className="text-[#1D1F22]/20">{genre}</span>
      </div>
      <div className="font-medium text-[#1D1F22]/20 text-xs">{time}</div>
      <div className="font-medium text-[#1D1F22]/20 text-xs">{bpm}</div>
      {isPurchased ? <TrackDownload /> : <TrackPay />}
      <TrackLike isLike={isLike}/>
    </div>
  )
}
