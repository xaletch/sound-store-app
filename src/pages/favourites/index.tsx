import { useGetLovedQuery } from "@/entities/loved/model/services"
import { setLovedTracks } from "@/entities/loved/model/slice";
import { filterSelector } from "@/features/filters/model/selector";
import { LikeContent } from "@/widgets"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Favourites = () => {
  const dispatch = useDispatch();

  const { selectedFilters } = useSelector(filterSelector);

  const { data, isSuccess } = useGetLovedQuery({ 
    id: '1', 
    Genre: selectedFilters.Genre || [],
    Type: selectedFilters.Type || [],
    Instruments: selectedFilters.Instruments ||[]
  });

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setLovedTracks(data.Tracks));
    }
  }, [data]);

  return (
    <div className="px-4 pb-4 flex flex-col h-full">
      <h1 className="text-center font-medium text-xl">Любимые сэмплы</h1>
      <div className="flex-1">
        <LikeContent />
      </div>
    </div>
  )
}
