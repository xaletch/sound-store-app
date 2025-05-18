import { Loading } from "@/shared/ui"
import { useEffect } from "react"
import { usePaymentVerify } from "../model/hook/payment-verify.hook";
import { useSelector } from "react-redux";
import { paymentSelector } from "../model";
import { PaymentStatusRequest } from "../model/types/payment-status.type";
import { Route } from "@/routes/_app/_layout/subscribe/payment/status/$paymentId";

export const PaymentVerify = () => {
  const { paymentId } = Route.useParams();
  const { payment } = useSelector(paymentSelector);
  const {verify} = usePaymentVerify();

  useEffect(() => {
    if (paymentId || payment?.token) {

      const payload: PaymentStatusRequest = {
        token: paymentId,
      };

      verify(payload);
    }
  }, [paymentId]);


  return <Loading w={"w-12"} h={"h-12"} />
}
