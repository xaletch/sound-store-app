import { PrevIcon } from "@/shared/icons";

interface PrevButtonProps {
  onClick: () => void;
}

export const PrevButton: React.FC<PrevButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <PrevIcon/>
    </button>
  );
};