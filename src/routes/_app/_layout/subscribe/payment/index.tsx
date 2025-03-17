import { useCurrentPath } from '@/app/providers/path-provider';
import { Payment } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react';

export const Route = createFileRoute('/_app/_layout/subscribe/payment/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { setCurrentPath } = useCurrentPath();
  useEffect(() => {
    setCurrentPath('/subscribe/payment/');
  }, [setCurrentPath]);
  return <Payment />
}
