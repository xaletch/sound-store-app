import { TrackCard } from "@/entities/track"
import { SoundListHead } from "./sound-list/sound-list-head"
import { useSelector } from "react-redux"
import { soundSelector } from "@/entities/sound/model/selector"
import { TracksData } from "@/entities/sound/model/types"

export const SoundContent = () => {
  const { tracks } = useSelector(soundSelector);

  return (
    <div>
      <SoundListHead />
      <div>
        <div className="flex flex-col gap-5">
          {tracks.map((item: TracksData, index) => (
            <TrackCard 
              key={index}
              image={'/image/executor.png'} 
              name={item.Name} 
              genre={item.Genre} 
              time={'1:30'} 
              bpm={item.Downloads} 
              isLike={item.Loved} 
              isPurchased={item.Downloaded} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
