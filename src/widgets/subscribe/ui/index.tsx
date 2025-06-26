import { useSelector } from "react-redux"
import { SubscribeCards } from "./subscribe-cards"
import { SubscribeSort } from "./subscribe-sort"
import { BigButton, OfferLink } from "@/shared/ui"
import { subscribersSelector } from "@/entities/subscribe/model/selector"
import { RenewSubscribe, CancelSubscribe, useSubscribe } from "@/features/subscribe"
import { SubscribeSelect } from "./subscribe-select"

export const SubscribeContent = () => {
  const { select, selectTariff } = useSelector(useSubscribe);
  const { activity } = useSelector(subscribersSelector);

  return (
    <div className="flex flex-col justify-between h-full">
      {activity && activity.Used !== 1 && <SubscribeSort select={select}/>}
      {activity && activity.Used === 0 ?
        <SubscribeCards select={select} selectTariff={selectTariff} />
      :
        <SubscribeSelect data={activity} />
      }
      <div className="mt-8 md:mt-16 md:max-w-xl md:mx-auto">
          <div className="flex flex-col gap-4">
            {activity && !activity.AutoPay && (
              <BigButton cl={selectTariff ? 'bg-[#7cc0ab]' : ''} href={"payment/"} disabled={!selectTariff}>
                {selectTariff ? 'Перейти к оплате'  : 'Выбери тариф'}
              </BigButton>
            )}
            {activity && activity.Used !== 0 && activity.Duration !== 0 && (
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
