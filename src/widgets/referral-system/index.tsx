import { Referral } from "@/features/referral-system"
import { SectionTitle } from "../section-title"

export const ReferralSystem = () => {

  return (
    <div className="px-4">
      <SectionTitle title={"Реферальная система"}></SectionTitle>
      <div>
        <Referral />
      </div>
    </div>
  )
}
