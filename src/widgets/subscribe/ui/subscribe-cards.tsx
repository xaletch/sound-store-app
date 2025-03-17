import { subscribersSelector } from "@/entities/subscribe/model/selector";
import { SubscribeSortType } from "@/entities/subscribe/types"
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
 
  const handleSelect = (name: string, data: TariffData) => {
    dispatch(setSelectTariff(name));
    dispatch(setSelectTariffData(data));
  }

  const calculateDiscount = (monthPrice: number, yearPrice: number) => {
    const totalMonthlyPrice = monthPrice * 12;
    return Math.round(((totalMonthlyPrice - yearPrice) / totalMonthlyPrice) * 100);
  };

  const tariffs = subscribers.map((subscriber) => ({
    name: subscriber.Type,
    credit: subscriber.Credits.toString(),
    credit_text: "",
    price: select === 'Месяц' ? subscriber.MonthPrice : subscriber.YearPrice,
    price_text: select === 'Месяц' ? "месяц" : "год",
    discount: select === 'Месяц' ? 0 : calculateDiscount(subscriber.MonthPrice, subscriber.YearPrice),
    select: selectTariff === subscriber.Type,
  })) as TariffData[];

  return (
    <div className="mt-7.5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-20">
        {tariffs.map((tariff: TariffData, index) => (
          <SubscribeCard
            key={index}
            name={tariff.name}
            credit={tariff.credit}
            credit_text={tariff.credit_text}
            price={tariff.price}
            price_text={tariff.price_text}
            discount={tariff.discount}
            onClick={(name) => handleSelect(name, {...tariff})}
            select={tariff.select}
          />
        ))}
      </div>
    </div>
  )
}
