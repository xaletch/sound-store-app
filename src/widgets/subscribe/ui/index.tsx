import { useSelector } from "react-redux"
import { SubscribeCards } from "./subscribe-cards"
import { SubscribeSort } from "./subscribe-sort"
import { useSubscribe } from "@/features/subscribe/model/selectors"
import { BigButton } from "@/shared/ui"

export const SubscribeContent = () => {
  const { select, selectTariff } = useSelector(useSubscribe);
  return (
    <div>
      <SubscribeSort select={select}/>
      <SubscribeCards select={select} selectTariff={selectTariff} />
      <div className="mt-8 md:mt-16 md:max-w-xl md:mx-auto">
        <BigButton cl={selectTariff ? 'bg-[#7cc0ab]' : ''} href={"payment/"} disabled={!selectTariff}>
          {selectTariff ? 'Перейти к оплате'  : 'Выбери тариф'}
        </BigButton>
      </div>
    </div>
  )
}
