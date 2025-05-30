import { TrackCard, TrackLoader } from "@/entities/track"
import { SoundListHead } from "./sound-list/sound-list-head"
import { TracksData } from "@/entities/sound/model/types"
import { NotFound } from "@/widgets/not-found";
import { forwardRef } from "react";

interface SoundContentProps {
  data: TracksData[];
  creator?: string;
  isLoading: boolean;
}

export const SoundContent = forwardRef<HTMLDivElement, SoundContentProps>(({ data, isLoading }, ref) => {
  return (
    <div>
      <SoundListHead />
      <div>
        <div className="flex flex-col gap-5" ref={ref}>
          {isLoading ? 
            Array.from({ length: 5 }).map((_, index) => (
              <TrackLoader key={index} />
            ))
          :
          (
            data.length > 0 ? (
              data.map((item: TracksData, index) => (
                <TrackCard 
                  key={index}
                  image={'/image/executor.png'} 
                  name={item.Name} 
                  genre={item.Genre} 
                  duration={item.Duration} 
                  bpm={item.Bpm} 
                  isLike={item.Loved} 
                  isPurchased={item.Downloaded}
                  id={item.Id}
                  creator={item.Author || ''}
                  packId={item.PackId}
                />
              ))
            ) : (
              <NotFound text="Ничего не найдено" />
            )
          )}
        </div>
      </div>
    </div>
  )
})
