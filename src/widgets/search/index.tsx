import { Search } from "@/features/search"
import { SoundContent } from "../sound"
import { useGetAllTracksQuery } from "@/entities/folders/model/services";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTracks } from "@/entities/search/model/slice";
import { useSearchSelector } from "@/entities/search/model/selector";
import { setPlayerTracks } from "@/features/audio-player/model/slice";
import { Sort } from "../sort";
import { filterSelector } from "@/features/filters/model/selector";
import { NotFound } from "../not-found";

export const SearchSort = () => {
  const dispatch = useDispatch();
  
  const { tracks, currentPage } = useSelector(useSearchSelector);
  const { selectedFilters } = useSelector(filterSelector)

  const { data: popularTracks } = useGetAllTracksQuery({ 
    page: currentPage.toString(),
    Genre: selectedFilters.Genre || [],
    Type: selectedFilters.Type || [],
    Instruments: selectedFilters.Instruments || [],
  });
  
  useEffect(() => {
    if (popularTracks && popularTracks.Tracks) {
      dispatch(setTracks(popularTracks.Tracks));
      dispatch(setPlayerTracks(popularTracks.Tracks));
    }
  }, [popularTracks, dispatch]);

  // const showMore = () => {
  //   dispatch(nextPage());
  // }

  return (
    <div className="mt-6">
      <Search />
      <Sort />
      {tracks.length > 0 ? (
        <SoundContent data={tracks || []}  />
      ) : <NotFound text="Ничего не найдено" />}
      {/* {popularTracks && popularTracks?.Tracks.length >= 10 && (
        <div className="mt-8 md:mt-16">
          <button onClick={showMore} className="max-w-[280px] mx-auto px-10 py-2 bg-[#7cc0ab] rounded-3xl border border-black text-sm md:text-base font-medium flex items-center justify-center hover:opacity-80 duration-300 cursor-pointer">Загрузить еще</button>
        </div>
      )
      } */}
    </div>
  )
}
