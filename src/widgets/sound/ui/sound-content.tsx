import { TrackCard } from "@/entities/track"
import { SoundListHead } from "./sound-list/sound-list-head"
import { TracksData } from "@/entities/sound/model/types"

interface SoundContentProps {
  data: TracksData[];
}

export const SoundContent = ({ data }: SoundContentProps) => {
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
              bpm={item.Downloads} 
              isLike={item.Loved} 
              isPurchased={item.Downloaded}
              id={item.Id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
