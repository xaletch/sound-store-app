import { PauseBoldIcon } from "@/shared/icons";

interface PauseButtonProps {
  onClick: () => void;
}

export const PauseButton: React.FC<PauseButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <PauseBoldIcon />
    </button>
  );
};