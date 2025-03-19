import { PlayBoldIcon } from "@/shared/icons";

interface PlayButtonProps {
  onClick: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="cursor-pointer w-6 h-[25px] flex items-center justify-center">
      <PlayBoldIcon />
    </button>
  );
};