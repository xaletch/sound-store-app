import { SamplesImage } from "@/entities/samples"
import { TrackLose } from "@/features/track";

interface SamplesCardProps {
  image: string;
  name: string;
  genre: string;
  id: number;
  packId: number;
}

export const SamplesCard = ({ image, name, genre, id, packId }: SamplesCardProps) => {

  return (
    <div className="rounded-3xl border border-black">
      <div className="px-2 py-2.5 flex items-center gap-3.5">
        <SamplesImage image={image} name={name} />
        <div>
          <TrackLose id={id} name={name} packId={packId} />
        </div>
        <div className="flex flex-col flex-1">
          <h4 className={'text-[#1D1F22] font-medium text-xs md:text-base'}>{name}</h4>
          <p className={'text-[#1D1F22]/20 font-medium text-xs md:text-base'}>{genre}</p>
        </div>
      </div>
    </div>
  )
}
