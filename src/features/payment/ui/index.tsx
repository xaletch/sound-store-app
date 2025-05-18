import { PaymentButton } from "@/shared/ui"
import { paymentSelector, useSubscribeMutation } from "../model";
import { SubscribeDuration, SubscribeResponse } from "../model/types/subscribe.type";
import { useEffect, useState } from "react";
import { PaymentWidget } from "./payment-widget";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "../model/slice/payment.slice";
import { toast } from "sonner";
import { SendEmail } from "./send-email";

export const PaymentButtons = () => {
  const dispatch = useDispatch();
  const [confirmationToken, setConfirmationToken] = useState<string | null>(null);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isEmailForm, setIsEmailForm] = useState<boolean>(false);
  const [isSubscribeError, setIsSubscribeError] = useState<boolean>(false);
  
  const [subscribe, { isLoading }] = useSubscribeMutation();

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
    
    try {
      const res = await subscribe({SubId, Duration}).unwrap()  as SubscribeResponse;
      
      if (res.token) {
        setConfirmationToken(res.token);
        // setPaymentId(res.paymentId);
        dispatch(setPayment(res));

        setIsSubscribeError(false);
      }
      //  else {
      //   toast.error('Не удалось создать платёж. Пожалуйста, попробуйте ещё раз.');
      //   console.error('Ответ API не содержит token:', res);

      //   setIsSubscribeError(true);
      // }
    }
    catch (err: unknown) {
      toast.error('Не удалось создать платёж. Пожалуйста, попробуйте ещё раз.');
      console.error('Ошибка при оплате', err);

      setIsSubscribeError(true);
    }
  }

  useEffect(() => {
    if (isEmail) {
      setIsEmailForm(false);
      cardPayment(select?.SubId, select?.Duration);
    }
  }, [isEmail]);

  const handlePaymentError = (err: unknown, message: string) => {
    toast.error(message);
    console.error('Ошибка виджета оплаты:', err);
    setConfirmationToken(null);
  }

  const handlePaymentSuccess = () => {
    console.log('Обрабатываем платеж');
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
      {/* {isEmail ? } */}
      {isEmailForm && <SendEmail setIsEmail={setIsEmail} />}
      {!isEmailForm && !isEmail && 
        <PaymentButton 
          cl={"bg-[#7cc0ab]"} 
          onClick={() => setIsEmailForm(true)}
          disabled={isLoading}
        >
          {isLoading ? 'Загрузка...' : 'Оплата картой'}
        </PaymentButton>
      }
      {isSubscribeError && isEmail && 
        <PaymentButton 
            cl={"bg-[#7cc0ab]"} 
            onClick={() => cardPayment(select?.SubId, select?.Duration)}
          >
            {isLoading ? 'Загрузка...' : 'Попробовать снова'}
        </PaymentButton>
      }
    </div>
  )
}
