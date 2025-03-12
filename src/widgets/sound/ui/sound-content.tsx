import { TrackCard } from "@/entities/track"
import { SoundListHead } from "./sound-list/sound-list-head"

interface SoundData {
  image: string
  name: string
  genre: string
  time: string
  bpm: number
  isLike: boolean
  isPurchased: boolean
}

interface SoundContentProps {
  data: SoundData[]
}

export const SoundContent = ({ data }: SoundContentProps) => {
  return (
    <div>
      <SoundListHead />
      <div>
        <div className="flex flex-col gap-5">
          {data.map((item, index) => (
            <TrackCard 
              key={index}
              image={item.image} 
              name={item.name} 
              genre={item.genre} 
              time={item.time} 
              bpm={item.bpm} 
              isLike={item.isLike} 
              isPurchased={item.isPurchased} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
