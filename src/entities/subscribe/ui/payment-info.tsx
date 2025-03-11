import { TariffData } from "@/features/subscribe/model/types"
import { SubscribeCredits } from "./subscribe-credits"
import { SubscribeName } from "./subscribe-name"
import { SubscribePrice } from "./subscribe-price"
import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"

export const PaymentInfo = ({ tariff }: { tariff: TariffData | undefined }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!tariff) {
      navigate({ to: '/subscribe' });
    }
  })

  return (
    <div className="font-medium flex items-center flex-col">
      <SubscribeName name={tariff?.name || ''} />
      <SubscribeCredits credit={tariff?.credit || ''} credit_text={tariff?.credit_text || ''} m={'my-3'} />
      <SubscribePrice price={tariff?.price || 0} price_text={tariff?.price_text || ''} discount={tariff?.discount || undefined} />
    </div>
  )
}
