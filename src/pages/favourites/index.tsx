import { useGetLovedQuery } from "@/entities/loved/model/services"
import { setLovedLoading, setLovedTracks } from "@/entities/loved/model/slice";
import { setPlayerTracks } from "@/features/audio-player/model/slice";
import { filterSelector } from "@/features/filters/model/selector";
import { LikeContent } from "@/widgets"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

export const Favourites = () => {
  const dispatch = useDispatch();

  const { selectedFilters } = useSelector(filterSelector);

  const [page, setPage] = useState<number>(1);
  

  const { data, isSuccess, isLoading } = useGetLovedQuery({ 
    id: page.toString(), 
    Genre: selectedFilters.Genre || [],
    Type: selectedFilters.Type || [],
    Instruments: selectedFilters.Instruments ||[]
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setLovedTracks({ tracks: data.Tracks, replace: page === 1 }));
      dispatch(setLovedLoading(isLoading))
      dispatch(setPlayerTracks(data.Tracks));
    }
  }, [data]);

  useEffect(() => {
    if (data?.Tracks.length && inView) {
      setPage((prev) => prev += 1);
    }
  }, [inView]);

  return (
    <div className="px-4 pb-4 flex flex-col h-full">
      <h1 className="text-center font-medium text-xl">Любимые сэмплы</h1>
      <div className="flex-1">
        <LikeContent />
        <div ref={ref}></div>
      </div>
    </div>
  )
}
