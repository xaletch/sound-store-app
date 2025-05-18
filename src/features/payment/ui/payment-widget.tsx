import { useEffect, useState } from "react"

interface PaymentWidgetProps {
  confirmationToken: string;
  returnUrl?: string;
  onSuccess?: () => void;
  onError?: (error: unknown, message: string) => void;
}

export const PaymentWidget = ({ confirmationToken, returnUrl = 'https://layer-app.ru/subscribe/payment/status', onSuccess, onError }: PaymentWidgetProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!window.YooMoneyCheckoutWidget) {
      const errorMessage = 'YooMoney виджет не найден';
      setError(errorMessage);
      onError?.(new Error(errorMessage), errorMessage);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const checkout = new window.YooMoneyCheckoutWidget({
        confirmation_token: confirmationToken,
        return_url: `${returnUrl}/${confirmationToken}`,
        error_callback: (err: unknown) => {
          const errorMessage = 'Ошибка инициализации виджета';
          console.error(errorMessage, err);
          setError(errorMessage);
          onError?.(err, errorMessage);
          setIsLoading(false);
        },
        success_callback: onSuccess,
      });

      checkout.render('payment-form')
        .then(() => {
          console.log('Виджет');
          setIsLoading(false);
        })
        .catch((err: unknown) => {
          const errorMessage = 'Ошибка рендеринга виджета';
          console.error(errorMessage, err);
          setError(errorMessage);
          onError?.(err, errorMessage);
          setIsLoading(false);
        });
    } catch (err) {
      const errorMessage = 'Ошибка создания виджета';
      console.error(errorMessage, err);
      setError(errorMessage);
      onError?.(err, errorMessage);
      setIsLoading(false);
    }

    return () => {
      const container = document.getElementById('payment-form');
      if (container) {
        container.innerHTML = '';
      }
    }
  }, [confirmationToken, returnUrl, onSuccess, onError]);

  return (
    <div className="payment-widget w-full">
      {isLoading && (
        <div className="payment-widget__loader py-4 text-center text-gray-600">
          Загрузка платежной формы...
        </div>
      )}
      {error && (
        <div className="payment-widget__error p-4 my-2 bg-red-50 text-red-600 rounded-md border border-red-200">
          {error}
        </div>
      )}
      <div id="payment-form" className="w-full"></div>
    </div>
  )
}
