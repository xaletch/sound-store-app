import { Link } from "@tanstack/react-router";

interface BigButtonProps {
  href: string;
  children?: React.ReactNode;
  cl?: string;
  disabled?: boolean;
}

export const BigButton = ({ href, children, cl, disabled }: BigButtonProps) => {
  return (
    <Link to={href} disabled={disabled} className={`w-full px-10 py-5 rounded-3xl border border-black text-xl font-medium flex items-center justify-center ${cl} duration-300`}>
      {children}
    </Link>
  )
}
