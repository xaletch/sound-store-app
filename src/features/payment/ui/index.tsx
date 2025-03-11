import { BigButton } from "@/shared/ui"

export const PaymentButtons = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <BigButton href={"#"} cl={"bg-[#7cc0ab]"} >Оплата TON</BigButton>
        <BigButton href={"#"} cl={"bg-[#7cc0ab]"} >Оплата картой</BigButton>
      </div>
    </>
  )
}
