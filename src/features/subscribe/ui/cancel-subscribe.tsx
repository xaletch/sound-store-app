import { updateAutoPay } from "@/entities/subscribe/model/slice";
import { useCancelSubscribeMutation } from "@/features/payment/model";
import { PaymentButton } from "@/shared/ui"
import { useDispatch } from "react-redux";

interface CancelSubscribeProps {
  autoPay: boolean;
}

export const CancelSubscribe = ({ autoPay }: CancelSubscribeProps) => {
  const dispatch = useDispatch();
  const [cancelSub] = useCancelSubscribeMutation();

  const cancel = async () => {
    try {
      const res = await cancelSub();

      if (res.data === 'success') {
        dispatch(updateAutoPay(!autoPay));
      }
    }
    catch (err) {
      console.error("Не удалось отменить подписку", err);
    }
  };

  return <PaymentButton onClick={cancel} cl={"hover:opacity-80 bg-[#7cc0ab]"}>Отменить</PaymentButton>
}
