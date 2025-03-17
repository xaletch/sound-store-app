import { ArrowIcon } from "@/shared/icons";

interface FilterButtonProps {
  cl?: string;
  children?: React.ReactNode;
  onClick: () => void;
}
export const FilterButton = ({ cl = '', children, onClick }: FilterButtonProps) => {
  return (
    <button className={`${cl} bg-[#436c5f] rounded-3xl cursor-pointer`} onClick={onClick}>
      <div className="flex py-2 items-center justify-center gap-2 text-white">
        <span className="text-xs md:text-base">{children}</span>
        <span><ArrowIcon /></span>
      </div>
    </button>
  )
}
