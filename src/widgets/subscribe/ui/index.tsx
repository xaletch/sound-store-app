import { useSelector } from "react-redux"
import { SubscribeCards } from "./subscribe-cards"
import { SubscribeSort } from "./subscribe-sort"
import { BigButton, OfferLink } from "@/shared/ui"
import { subscribersSelector } from "@/entities/subscribe/model/selector"
import { RenewSubscribe, CancelSubscribe, useSubscribe } from "@/features/subscribe"

export const SubscribeContent = () => {
  const { select, selectTariff } = useSelector(useSubscribe);
  const { activity } = useSelector(subscribersSelector);

  return (
    <div>
      <SubscribeSort select={select}/>
      <SubscribeCards select={select} selectNum={select === 'Месяц' ? 1 : select === 'Год' ? 12 : undefined} selectTariff={selectTariff} />
      <div className="mt-8 md:mt-16 md:max-w-xl md:mx-auto">
          <div className="flex flex-col gap-4">
            <BigButton cl={selectTariff ? 'bg-[#7cc0ab]' : ''} href={"payment/"} disabled={!selectTariff}>
              {selectTariff ? 'Перейти к оплате'  : 'Выбери тариф'}
            </BigButton>
            {activity && activity.Used === 0 && activity.Duration === 0 && (
              activity.AutoPay ? (
                <CancelSubscribe autoPay={activity.AutoPay} />
              ) : (
                <RenewSubscribe autoPay={activity.AutoPay} />
              )
            )}
          </div>
        <OfferLink />
      </div>
    </div>
  )
}
