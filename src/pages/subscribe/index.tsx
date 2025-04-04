import { useGetSubscribersQuery } from "@/entities/subscribe/model/services";
import { setSubscribers } from "@/entities/subscribe/model/slice";
import { playerSelector } from "@/features/audio-player";
import { Shadow } from "@/shared/ui";
import { SubscribeContent } from "@/widgets"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Subscribe = () => {
  const dispatch = useDispatch();
  
  const { data, isSuccess } = useGetSubscribersQuery();
  const { isPlayer } = useSelector(playerSelector);
  

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setSubscribers(data.Genres));
    }
  }, [data]);
  
  return (
    <>
      <Shadow cl="w-62 -translate-x-2/4 h-62 1080:w-104 1080:h-104  blur-[120px] 1080:blur-[200px] left-20 -top-16 1080:-top-10 1080:left-134" />
      <div className={`px-4 pb-4 relative z-[2] ${!isPlayer ? 'pb-25' : ''}`}>
        <h1 className="text-center text-xl font-medium">Тарифы</h1>
        <SubscribeContent />
      </div>  
    </>
  )
}
