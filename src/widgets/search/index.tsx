import { Search } from "@/features/search"
import { Sort } from "./sort"
import { SoundContent } from "../sound"

export const SearchSort = () => {
  const data = Array(6).fill({
    image: "/image/executor.png",
    name: "Название",
    genre: "Жанр",
    time: "0:17",
    bpm: 115,
    isLike: false,
    isPurchased: false,
  });

  return (
    <div className="mt-6">
      <Search />
      <Sort />
      <SoundContent data={data}  />
    </div>
  )
}
