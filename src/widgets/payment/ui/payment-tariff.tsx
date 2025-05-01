import { PaymentInfo } from "@/entities/subscribe/ui/payment-info"
import { PaymentButtons } from "@/features/payment"
import { useSubscribe } from "@/features/subscribe/model/selectors"
import { OfferLink } from "@/shared/ui"
import { useSelector } from "react-redux"

export const PaymentTariff = () => {
  const { selectTariffData } = useSelector(useSubscribe)

  return (
    <div className="md:max-w-xl mx-auto">
      <div className="mt-3 mb-11">
        <PaymentInfo tariff={selectTariffData} />
      </div>
      <div className="mt-11">
        <PaymentButtons />
        <OfferLink />
      </div>
    </div>
  )
}
