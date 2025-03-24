import { Home } from '@/pages'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react';

export const Route = createFileRoute('/_app/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  const firstVisit = localStorage.getItem("first-visit");
  const navigate = useNavigate();
  useEffect(() => {
    if (!firstVisit) {
      navigate({ to: '/welcome' });
    }
  }, []);

  return <Home />
}
