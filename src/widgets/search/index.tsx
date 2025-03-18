import { Search } from "@/features/search"
import { Sort } from "./sort"
import { SoundContent } from "../sound"
import { useGetAllTracksQuery } from "@/entities/folders/model/services";

export const SearchSort = () => {
  const { data: popularTracks } = useGetAllTracksQuery({ 
    page: "1",
    Genre: "",
    Type: "",
    Instruments: [], 
  });
  
  

  return (
    <div className="mt-6">
      <Search />
      <Sort />
      <SoundContent data={popularTracks?.Tracks || []}  />
    </div>
  )
}
