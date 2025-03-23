import { setLinkModal } from "@/entities/modals/model/slice";
import { useDispatch } from "react-redux";

export const Referral = () => {
  const dispatch = useDispatch();
  
  const copy = (link: string) => {
    navigator.clipboard.writeText(link);

    dispatch(setLinkModal(true));
  }

  return (
    <div className="w-full bg-[#7cc0ab] border border-black rounded-3xl" onClick={() => copy('Здесь могла быть ваша ссылка')}>
      <div className="px-3.5 py-1.5 font-medium text-xs md:text-base">поделись ссылкой с другом и получи <span className="">10</span> кредитов</div>
    </div>
  )
}
