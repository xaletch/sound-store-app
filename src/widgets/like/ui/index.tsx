import { SoundContent } from "@/widgets"
import { LikeSort } from "./like-sort"

export const LikeContent = () => {
  const data = Array(6).fill({
    image: "/image/executor.png",
    name: "Название",
    genre: "Жанр",
    time: "0:17",
    bpm: 115,
    isLike: true,
    isPurchased: true,
  });

  return (
    <div>
      <LikeSort />
      <SoundContent data={data} />
    </div>
  )
}
