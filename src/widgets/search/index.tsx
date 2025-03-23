import { Search } from "@/features/search"
import { SoundContent } from "../sound"
import { useGetAllTracksQuery } from "@/entities/folders/model/services";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, setCurrentPage, setTracks } from "@/entities/search/model/slice";
import { useSearchSelector } from "@/entities/search/model/selector";
import { setPlayerTracks } from "@/features/audio-player/model/slice";
import { Sort } from "../sort";
import { filterSelector } from "@/features/filters/model/selector";
import { searchSelector } from "@/features/search/model/selector";
import { useInView } from "react-intersection-observer";

export const SearchSort = () => {
  const dispatch = useDispatch();
  
  const { tracks, currentPage } = useSelector(useSearchSelector);
  const { selectedFilters } = useSelector(filterSelector);

  const { search } = useSelector(searchSelector);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { data: popularTracks, isLoading } = useGetAllTracksQuery({ 
    page: currentPage.toString(),
    Name: search || '',
    Genre: selectedFilters.Genre || [],
    Type: selectedFilters.Type || [],
    Instruments: selectedFilters.Instruments || [],
  });
  
  useEffect(() => {
    if (popularTracks && popularTracks.Tracks) {
      dispatch(setTracks({ tracks: popularTracks.Tracks, replace: currentPage === 1 }));
      dispatch(setPlayerTracks(popularTracks.Tracks));
    }
  }, [popularTracks, dispatch]);

  useEffect(() => {
    dispatch(setTracks({ tracks: [], replace: true }));
    dispatch(setCurrentPage(1));
  }, [search, selectedFilters, dispatch]);

  useEffect(() => {
    if (popularTracks?.Tracks.length &&inView) {
      dispatch(nextPage());
    }
  }, [inView]);

  return (
    <div className="mt-6">
      <Search />
      <Sort />
      <SoundContent data={tracks || []} isLoading={isLoading} />
      {!isLoading && <div ref={ref}></div>}
      {/* {popularTracks && popularTracks?.Tracks.length >= 10 && (
        <div className="mt-8 md:mt-16">
          <button onClick={showMore} className="max-w-[280px] mx-auto px-10 py-2 bg-[#7cc0ab] rounded-3xl border border-black text-sm md:text-base font-medium flex items-center justify-center hover:opacity-80 duration-300 cursor-pointer">Загрузить еще</button>
        </div>
      )
      } */}
    </div>
  )
}
