import { Search } from "@/features/search"
import { Sort } from "./sort"
import { SoundContent } from "../sound"
import { useGetAllTracksQuery } from "@/entities/folders/model/services";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, setTracks } from "@/entities/search/model/slice";
import { useSearchSelector } from "@/entities/search/model/selector";

export const SearchSort = () => {
  const dispatch = useDispatch();
  
  const { tracks, currentPage } = useSelector(useSearchSelector);

  const { data: popularTracks } = useGetAllTracksQuery({ 
    page: currentPage.toString(),
    Genre: "",
    Type: "",
    Instruments: [], 
  });
  
  useEffect(() => {
    if (popularTracks && popularTracks.Tracks) {
      dispatch(setTracks(popularTracks.Tracks));
    }
  }, [popularTracks, dispatch]);

  const showMore = () => {
    dispatch(nextPage());
  }

  return (
    <div className="mt-6">
      <Search />
      <Sort />
      <SoundContent data={tracks || []}  />
      {popularTracks && popularTracks?.Tracks.length < 9 && (
        <div className="mt-8 md:mt-16">
          <button onClick={showMore} className="max-w-[280px] mx-auto px-10 py-2 bg-[#7cc0ab] rounded-3xl border border-black text-sm md:text-base font-medium flex items-center justify-center hover:opacity-80 duration-300 cursor-pointer">Загрузить еще</button>
        </div>
      )
      }
    </div>
  )
}
