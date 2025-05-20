import { updateAutoPay } from "@/entities/subscribe/model/slice";
import { useRenewSubscribeMutation } from "@/features/payment/model";
import { PaymentButton } from "@/shared/ui"
import { useDispatch } from "react-redux";

interface RenewSubscribeProps {
  autoPay: boolean | undefined;
}

export const RenewSubscribe = ({ autoPay }: RenewSubscribeProps) => {
  const dispatch = useDispatch();

  const [renew] = useRenewSubscribeMutation();

  // 
  const extend = async () => {
    try {
      const res = await renew();
    
      if (res.data === 'success') {
        dispatch(updateAutoPay(!autoPay));
      }
    }
    catch (err) {
      console.error("Не удалось возобновить подписку", err);
    }
  };

  return <PaymentButton onClick={extend} cl={"hover:opacity-80 bg-[#7cc0ab]"}>Продлить</PaymentButton>
}
