import { SubscribeSortType } from "@/entities/subscribe/types"
import { SubscribeCard } from "@/features/subscribe"
import { setSelectTariff, setSelectTariffData } from "@/features/subscribe/model/slice";
import { TariffData } from "@/features/subscribe/model/types";
import { useDispatch } from "react-redux";

interface SubscribeCardsProps {
  select: SubscribeSortType;
  selectTariff: string;
}

export const SubscribeCards = ({ select, selectTariff }: SubscribeCardsProps ) => {
  const dispatch = useDispatch();

  const handleSelect = (name: string, data: TariffData) => {
    dispatch(setSelectTariff(name));
    dispatch(setSelectTariffData(data));
  }

  const tariffs = [
    {
      name: "start",
      credit: "100",
      credit_text: "",
      price: select === 'Месяц' ? 499 : 5000,
      price_text: select === 'Месяц' ? "месяц" : "год",
      discount: select === 'Месяц' ? 0 : 10,
      select: selectTariff === "start",
    },
    {
      name: "ultra",
      credit: "500",
      credit_text: "Доступ в канал Layer Pro",
      price: select === 'Месяц' ? 1499 : 17000,
      price_text: select === 'Месяц' ? "месяц" : "год",
      discount: select === 'Месяц' ? 0 : 30,
      select: selectTariff === "ultra",
    },
  ] as TariffData[];

  return (
    <div className="mt-7.5">
      <div className="grid grid-cols-1 gap-4">
        {tariffs.map((tariff: TariffData) => (
          <SubscribeCard
            key={tariff.name}
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
