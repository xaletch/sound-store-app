import { Loading } from "@/shared/ui"
import { useEffect } from "react"
import { usePaymentVerify } from "../model/hook/payment-verify.hook";
import { useSelector } from "react-redux";
import { paymentSelector } from "../model";
import { PaymentStatusRequest } from "../model/types/payment-status.type";

export const PaymentVerify = () => {
  const { payment } = useSelector(paymentSelector);

  const {verify} = usePaymentVerify();

  useEffect(() => {
    if (payment?.paymentId) {
      const { ActiveSubscribe } = payment;

      const payload: PaymentStatusRequest = {
        data: {
          Id: ActiveSubscribe.Id,
          UserId: ActiveSubscribe.UserId,
          Price: ActiveSubscribe.Price,
          Duration: ActiveSubscribe.Duration,
        },
        paymentId: payment.paymentId,
      };

      verify(payload);
    }
  }, []);


  return <Loading w={"w-12"} h={"h-12"} />
}
