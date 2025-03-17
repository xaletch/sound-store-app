import { useCurrentPath } from '@/app/providers/path-provider'
import { Sound } from '@/pages/sound'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react';

export const Route = createFileRoute('/_app/_layout/sound/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  const { setCurrentPath } = useCurrentPath();
  useEffect(() => {
    setCurrentPath('/sound');
  }, [setCurrentPath]);
  return <Sound></Sound>
}
