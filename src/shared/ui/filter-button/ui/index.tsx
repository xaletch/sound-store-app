import { ArrowIcon } from "@/shared/icons";
import { useMediaQuery } from "react-responsive";

interface FilterButtonProps {
  cl?: string;
  children?: React.ReactNode;
  onClick: () => void;
}
export const FilterButton = ({ cl = '', children, onClick }: FilterButtonProps) => {
  const is380 = useMediaQuery({ minWidth: 380 });

  return (
    <button className={`${cl} rounded-3xl cursor-pointer`} onClick={onClick}>
      <div className="flex py-2 items-center justify-center gap-2 text-white">
        <span className="text-xs md:text-base">{children}</span>
        {is380 && <span><ArrowIcon /></span>}
      </div>
    </button>
  )
}
