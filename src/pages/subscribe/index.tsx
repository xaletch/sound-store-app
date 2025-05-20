import { useGetSubscribersQuery } from "@/entities/subscribe/model/services";
import { setSubActivity, setSubscribers } from "@/entities/subscribe/model/slice";
import { playerSelector } from "@/features/audio-player";
import { useActiveSubscribeQuery } from "@/features/payment/model";
import { Shadow } from "@/shared/ui";
import { SubscribeContent } from "@/widgets"
import { SubscribeLoading } from "@/widgets/subscribe/ui/loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Subscribe = () => {
  const dispatch = useDispatch();
  
  const { data, isSuccess, isLoading: subscribeLoad } = useGetSubscribersQuery();
  const { isPlayer } = useSelector(playerSelector);
  
  const { data: activity, isSuccess: activitySuccess, isLoading: activeSubLoad } = useActiveSubscribeQuery();

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setSubscribers(data.Genres));
    }
  }, [data]);

  useEffect(() => {
    if (activity && activitySuccess) {
      dispatch(setSubActivity(activity));
    }
  }, [activity])
  
  return (
    <>
      <Shadow cl="w-62 -translate-x-2/4 h-62 1080:w-104 1080:h-104  blur-[120px] 1080:blur-[200px] left-20 -top-16 1080:-top-10 1080:left-134" />
      <div className={`px-4 pb-4 relative z-[2] h-full ${!isPlayer ? 'pb-25' : ''}`}>
        <h1 className="text-center text-xl font-medium">{activity?.Credits === 0 ? 'Тарифы' : 'Ваш тариф'}</h1>
        {subscribeLoad || activeSubLoad ? <SubscribeLoading /> : <SubscribeContent />}
      </div>  
    </>
  )
}
