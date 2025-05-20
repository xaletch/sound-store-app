import { ActiveSubscribeResponse } from "@/features/payment/model/types/active-subscribe.type";
import { SubscribeCard } from "@/features/subscribe"

interface SubscribeSelectProps {
  data: ActiveSubscribeResponse | undefined;
}

export const SubscribeSelect = ({ data }: SubscribeSelectProps) => {

  if (!data) {
    return <></>
  }

  return (
    <div className="mt-8.5 flex flex-col">
      <SubscribeCard
        name={'start'}
        credit={data?.Credits.toString()}
        credit_text={''}
        price={data?.Price}
        price_text={data.Duration === 1 ? 'мес' : data.Duration === 12 ? 'год' : ''}
        onClick={(n) => console.log(n)}
        select={false}
        activity={false}
      />
      <div className="mt-6">
        {data.AutoPay ? (
          <>
            <p className="text-center text-xl">Ваша подписка активна,</p>
            <p className="text-center text-xl">слудующее списание будет</p>
          </>
        ) : (
          <p className="text-center text-xl">Ваша подписка закончится</p>
        )}
        <p className="text-center text-xl">12.12.2025</p>
      </div>
    </div>
  )
}
