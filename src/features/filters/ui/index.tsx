interface FilterItemProps {
  name: string;
  select: boolean;
  onClick: () => void;
}

export const FilterItem = ({ name, select, onClick }: FilterItemProps) => {
  return (
    <button onClick={onClick} className={`${select ? 'bg-[#1d1f22] text-white' : ''} border border-[#1d1f22] rounded-3xl px-3.5 py-2 text-xs h-7 flex items-center justify-center whitespace-nowrap cursor-pointer uppercase`}>
      <div>{name}</div>
    </button>
  )
}
