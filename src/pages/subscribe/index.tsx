import { useGetSubscribersQuery } from "@/entities/subscribe/model/services";
import { setSubscribers } from "@/entities/subscribe/model/slice";
import { SubscribeContent } from "@/widgets"
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Subscribe = () => {
  const dispatch = useDispatch();
  
  const { data, isSuccess } = useGetSubscribersQuery();

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setSubscribers(data.Genres));
    }
  }, [data]);
  
  return (
    <div className="px-4 pb-4">
      <h1 className="text-center text-xl font-medium">Тарифы</h1>
      <SubscribeContent />
    </div>
  )
}
