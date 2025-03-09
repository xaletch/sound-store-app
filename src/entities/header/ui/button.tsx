import { Link } from "@tanstack/react-router";

interface HeaderButtonProps {
  cl?: string;
  href: string;
  icon: React.ReactNode;
  text: string;
}

export const HeaderButton = ({ cl, href, icon, text }: HeaderButtonProps) => {
  return (
    <Link to={href} className={`text-xs font-medium bg-green-800 py-1 h-6.5 flex items-center rounded-2xl text-yellow-100 gap-1 ${cl}`}>
      <span>{icon}</span>
      <span>{text}</span>
    </Link>
  )
}
