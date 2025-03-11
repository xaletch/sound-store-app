import { PaymentInfo } from "@/entities/subscribe/ui/payment-info"
import { PaymentButtons } from "@/features/payment"
import { useSubscribe } from "@/features/subscribe/model/selectors"
import { useSelector } from "react-redux"

export const PaymentTariff = () => {
  const { selectTariffData } = useSelector(useSubscribe)

  return (
    <>
      <div className="mt-3 mb-11">
        <PaymentInfo tariff={selectTariffData} />
      </div>
      <div className="mt-11">
        <PaymentButtons />
      </div>
    </>
  )
}
