import { useNavigate } from "@tanstack/react-router";
import { usePaymentStatusMutation } from "../services/payment.services"
import { PaymentStatusRequest, PaymentStatusResponse } from "../types/payment-status.type";

export const usePaymentVerify = () => {
  const [status] = usePaymentStatusMutation();

  const navigate = useNavigate();

  const verify = async (data: PaymentStatusRequest) => {
    try {      
      const res = await status(data).unwrap() as PaymentStatusResponse;
  
      // console.log('===== payment verify ===== ', res);

      if (res.status === 'success') {
        navigate({ to: '/' });
        sessionStorage.setItem('wasPaid', 'true');
      } else {
        navigate({ to: '/subscribe' });
      }
    }
    catch (err: unknown) {
      console.error('status error', err);
      
      navigate({ to: '/subscribe' });
    }
    finally {
      sessionStorage.removeItem('payment');
    }
  }

  return { verify }
}