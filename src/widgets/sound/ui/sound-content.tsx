import { TrackCard } from "@/entities/track"
import { SoundListHead } from "./sound-list/sound-list-head"
import { TracksData } from "@/entities/sound/model/types"

interface SoundContentProps {
  data: TracksData[];
  creator?: string;
}

export const SoundContent = ({ data, creator }: SoundContentProps) => {
  return (
    <div>
      <SoundListHead />
      <div>
        <div className="flex flex-col gap-5">
          {data.map((item: TracksData, index) => (
            <TrackCard 
              key={index}
              image={'/image/executor.png'} 
              name={item.Name} 
              genre={item.Genre} 
              time={'1:30'} 
              bpm={item.Listenings} 
              isLike={item.Loved} 
              isPurchased={item.Downloaded}
              id={item.Id}
              creator={creator || ''}
              packId={item.PackId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
