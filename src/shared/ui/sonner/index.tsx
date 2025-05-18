import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;


export const SonnerComp = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      richColors
      duration={5000}
      visibleToasts={1}
      expand
      position="top-center"
      toastOptions={{
        classNames: {
          content: "p-1 text-sm",
        }
      }}
      {...props}
    />
  )
}
