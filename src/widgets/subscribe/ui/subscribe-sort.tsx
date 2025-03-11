import { SubscribeSortType } from "@/entities/subscribe/types"
import { SubscribeSortButton } from "@/features/subscribe"

interface SubscribeSortProps {
  select: SubscribeSortType;
}

export const SubscribeSort = ({ select }: SubscribeSortProps) => {
  return (
    <div className="max-w-62.5 mt-6 mx-auto flex items-center rounded-full border border-black h-7.5">
      <SubscribeSortButton name={"Месяц"} select={select} />
      <SubscribeSortButton name={"Год"} select={select} />
    </div>
  )
}
