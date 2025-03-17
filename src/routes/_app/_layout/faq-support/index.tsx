import { useCurrentPath } from '@/app/providers/path-provider';
import { FaqSupport } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react';

export const Route = createFileRoute('/_app/_layout/faq-support/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { setCurrentPath } = useCurrentPath();

  useEffect(() => {
    setCurrentPath('faq-support');
  }, []);
  
  return <FaqSupport />
}
