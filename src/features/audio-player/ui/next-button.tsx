import { NextIcon } from "@/shared/icons";

interface NextButtonProps {
  onClick: () => void;
}

export const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <NextIcon />
    </button>
  );
};