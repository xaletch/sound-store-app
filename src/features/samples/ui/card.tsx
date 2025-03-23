import { SamplesImage } from "@/entities/samples"
import { useGetPackPhotoQuery } from "@/entities/sound/model/services";
import { TrackLose } from "@/features/track";

interface SamplesCardProps {
  image?: string;
  name: string;
  id: number;
  packId: number;
  author: string;
}

export const SamplesCard = ({ name, id, packId, author }: SamplesCardProps) => {
  const { data: photo } = useGetPackPhotoQuery({ id: packId.toString() });

  return (
    <div className="rounded-3xl border border-black">
      <div className="px-2 py-2.5 flex items-center gap-3.5">
        <SamplesImage image={photo?.Photo || ''} name={name} />
        <div>
          <TrackLose id={id} name={name} packId={packId} author={author} />
        </div>
        <div className="flex flex-col flex-1">
          <h4 className={'text-[#1D1F22] font-medium text-xs md:text-base'}>{name}</h4>
          <p className={'text-[#1D1F22]/20 font-medium text-xs md:text-base'}>{author}</p>
        </div>
      </div>
    </div>
  )
}
