import { Shadow } from "@/shared/ui"
import { PaymentTariff } from "@/widgets"

export const Payment = () => {
  return (
    <>
      <Shadow cl="w-62 -translate-x-2/4 h-62 1080:w-104 1080:h-104  blur-[120px] 1080:blur-[200px] left-20 -top-16 1080:-top-10 1080:left-134" />
      <div className="px-4 pb-4 relative z-[2]">
        <h1 className="text-center font-medium text-xl">Оплата</h1>
        <PaymentTariff />
      </div>
    </>
  )
}
