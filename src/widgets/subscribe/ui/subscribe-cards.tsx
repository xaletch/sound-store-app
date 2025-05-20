import { subscribersSelector } from "@/entities/subscribe/model/selector";
import { SubscribeSortType } from "@/entities/subscribe/types"
import { setPaymentSelect } from "@/features/payment/model/slice/payment.slice";
import { SubscribeRequest } from "@/features/payment/model/types/subscribe.type";
import { SubscribeCard } from "@/features/subscribe"
import { setSelectTariff, setSelectTariffData } from "@/features/subscribe/model/slice";
import { TariffData } from "@/features/subscribe/model/types";
import { useDispatch, useSelector } from "react-redux";

interface SubscribeCardsProps {
  select: SubscribeSortType;
  selectTariff: string;
}

export const SubscribeCards = ({ select, selectTariff }: SubscribeCardsProps ) => {
  const dispatch = useDispatch();

  const { subscribers } = useSelector(subscribersSelector);

  const handleSelect = (name: string, data: TariffData, Id: number) => {
    // const subData = {
    //   Id: Id,
    //   name: data.name,
    //   credit: data.credit,
    //   credit_text: data.credit_text,
    //   price: data.price,
    //   price_text: data.price_text,
    //   discount: data.discount,
    //   select: data.select,
    //   duration: data.price_text === "месяц" ? 1 : data.price_text === "год" ? 12 : undefined,
    // }
    // console.log('subscribe', subData);
    const paymentData: SubscribeRequest = {
      SubId: Id,
      Duration: data.price_text === "месяц" ? 1 : data.price_text === "год" ? 12 : 1,
    }
    
    dispatch(setPaymentSelect(paymentData));
    dispatch(setSelectTariff(name));
    dispatch(setSelectTariffData(data));
  }

  const calculateDiscount = (monthPrice: number, yearPrice: number) => {
    const totalMonthlyPrice = monthPrice * 12;
    return Math.round(((totalMonthlyPrice - yearPrice) / totalMonthlyPrice) * 100);
  };

  const tariffs = subscribers.map((subscriber) => ({
    Id: subscriber.Id,
    name: subscriber.Type,
    credit: select === 'Месяц' ? `${subscriber.MonthCredits}` : `${subscriber.YearCredits}`,
    credit_text: "",
    price: select === 'Месяц' ? subscriber.MonthPrice : subscriber.YearPrice,
    price_text: select === 'Месяц' ? "месяц" : "год",
    discount: select === 'Месяц' ? 0 : calculateDiscount(subscriber.MonthPrice, subscriber.YearPrice),
    select: selectTariff === subscriber.Type,
  })) as TariffData[];

  return (
    <div className="mt-7.5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-20">
        {tariffs.map((tariff: TariffData, index) => (
          <SubscribeCard
            key={index}
            name={tariff.name}
            credit={tariff.credit}
            credit_text={tariff.credit_text}
            price={tariff.price}
            price_text={tariff.price_text}
            discount={tariff.discount}
            onClick={(name) => handleSelect(name, {...tariff}, tariff.Id)}
            select={tariff.select}
            activity={false}
          />
        ))}
      </div>
    </div>
  )
}
