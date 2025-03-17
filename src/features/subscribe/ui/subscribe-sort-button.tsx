import { useDispatch } from "react-redux";
import { setSelectSubscribe } from "../model/slice";

type subscribeType = 'Месяц' | 'Год';

interface SubscribeSortButtonProps {
  name: subscribeType;
  select: subscribeType;
}

export const SubscribeSortButton = ({ name, select }: SubscribeSortButtonProps) => {
  const dispatch = useDispatch();
  
  const handleSelect = (name: subscribeType) => {
    dispatch(setSelectSubscribe(name))
  };

  return (
    <button className={`flex-1 px-6 h-full rounded-full text-xs md:text-base duration-300 cursor-pointer ${select === name ? 'bg-[#1d1f22] text-white' : 'text-[#1d1f22]'}`} onClick={()=>handleSelect(name)}>{name}</button>
  )
}
