import { BigButton, PaymentButton } from "@/shared/ui"
import { paymentSelector, useSubscribeMutation } from "../model";
import { SubscribeDuration, SubscribeResponse } from "../model/types/subscribe.type";
import { useEffect, useState } from "react";
import { PaymentWidget } from "./payment-widget";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "../model/slice/payment.slice";

export const PaymentButtons = () => {
  const dispatch = useDispatch();
  const [subscribe] = useSubscribeMutation();
  const [confirmationToken, setConfirmationToken] = useState<string | null>(null);
  const [paymentId, setPaymentId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    if (!SubId || !Duration) {
      setError('Тариф не выбран');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const res = await subscribe({SubId, Duration}).unwrap()  as SubscribeResponse;

      if (res.token) {
        setConfirmationToken(res.token);
        setPaymentId(res.paymentId);
        dispatch(setPayment(res));
      } else {
        setError('Не удалось создать платёж. Пожалуйста, попробуйте ещё раз.');
        console.error('Ответ API не содержит token:', res);
      }
    }
    catch (err: unknown) {
      setError('Не удалось создать платёж. Пожалуйста, попробуйте ещё раз.');
      console.error('Ошибка при оплате', err);
    }
    finally {
      setIsLoading(false);
    }
  }

  const handlePaymentError = (err: unknown, message: string) => {
    setError(message);
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
        paymentId={paymentId}
        onError={handlePaymentError}
        onSuccess={handlePaymentSuccess}
      />
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <BigButton 
        href={"#"} 
        cl={"bg-[#7cc0ab]"} 
        disabled={isLoading}
      >
        Оплата TON
      </BigButton>
      <PaymentButton 
        cl={"bg-[#7cc0ab]"} 
        onClick={() => cardPayment(select?.SubId, select?.Duration)}
        disabled={isLoading}
      >
        {isLoading ? 'Загрузка...' : 'Оплата картой'}
      </PaymentButton>
      {error && (
        <div className="px-2 py-3 my-2 bg-red-50 text-red-500 rounded-xl border border-red-200 text-center">
          {error}
        </div>
      )}
    </div>
  )
}
