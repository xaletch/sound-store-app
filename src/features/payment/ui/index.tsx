import { PaymentButton } from "@/shared/ui"
import { paymentSelector, useSubscribeMutation } from "../model";
import { SubscribeDuration, SubscribeResponse } from "../model/types/subscribe.type";
import { useEffect, useState } from "react";
import { PaymentWidget } from "./payment-widget";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "../model/slice/payment.slice";
import { toast } from "sonner";

export const PaymentButtons = () => {
  const dispatch = useDispatch();
  const [subscribe] = useSubscribeMutation();
  const [confirmationToken, setConfirmationToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { select } = useSelector(paymentSelector);

  // delete payment session
  useEffect(() => {
    return () => {
      const wasPaid = sessionStorage.getItem('wasPaid');

      if (!wasPaid) {
        sessionStorage.removeItem('payment');
      }
    }
  }, []);

  const cardPayment = async (SubId: number | undefined, Duration: SubscribeDuration | undefined) => {
    if (!SubId || !Duration) return;

    setIsLoading(true);
    
    try {
      const res = await subscribe({SubId, Duration}).unwrap()  as SubscribeResponse;
      console.log(res);
      if (res.token) {
        setConfirmationToken(res.token);
        // setPaymentId(res.paymentId);
        dispatch(setPayment(res));
      } else {
        toast.error('Не удалось создать платёж. Пожалуйста, попробуйте ещё раз.');
        console.error('Ответ API не содержит token:', res);
      }
    }
    catch (err: unknown) {
      toast.error('Не удалось создать платёж. Пожалуйста, попробуйте ещё раз.');

      console.error('Ошибка при оплате', err);
    }
    finally {
      setIsLoading(false);
    }
  }

  const handlePaymentError = (err: unknown, message: string) => {
    toast.error(message);
    console.error('Ошибка виджета оплаты:', err);
    setConfirmationToken(null);
  }

  const handlePaymentSuccess = () => {
    console.log('Платеж успешно завершен');
  }

  if (confirmationToken) {
    return (
      <PaymentWidget 
        confirmationToken={confirmationToken}
        onError={handlePaymentError}
        onSuccess={handlePaymentSuccess}
      />
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* <BigButton 
        href={"#"} 
        cl={"bg-[#7cc0ab]"} 
        disabled={isLoading}
      >
        Оплата TON
      </BigButton> */}
      <PaymentButton 
        cl={"bg-[#7cc0ab]"} 
        onClick={() => cardPayment(select?.SubId, select?.Duration)}
        disabled={isLoading}
      >
        {isLoading ? 'Загрузка...' : 'Оплата картой'}
      </PaymentButton>
    </div>
  )
}
