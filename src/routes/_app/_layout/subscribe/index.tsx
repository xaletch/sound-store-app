import { useCurrentPath } from '@/app/providers/path-provider';
import { Subscribe } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react';

export const Route = createFileRoute('/_app/_layout/subscribe/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { setCurrentPath } = useCurrentPath();
  useEffect(() => {
    setCurrentPath('/subscribe');
  }, []);
  return <Subscribe />
}
