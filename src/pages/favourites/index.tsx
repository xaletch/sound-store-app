import { useGetLovedQuery } from "@/entities/loved/model/services"
import { setLovedTracks } from "@/entities/loved/model/slice";
import { LikeContent } from "@/widgets"
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Favourites = () => {
  const dispatch = useDispatch();
  const { data, isSuccess } = useGetLovedQuery({ id: '1' });

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
