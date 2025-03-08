import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { useEffect } from "react";
import { useTelegram } from "./providers/telegram";

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const { webApp } = useTelegram();

  useEffect(() => {
    webApp?.expand();
  }, [webApp]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App
