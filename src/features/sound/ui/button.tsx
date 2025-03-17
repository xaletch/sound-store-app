interface SoundButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  cl?: string;
}

export const SoundButton = ({ onClick, children, cl }: SoundButtonProps) => {
  return (
    <button onClick={onClick} className={`w-full border border-[#1d1f22] rounded-3xl py-1 flex items-center justify-center gap-1 text-xs md:text-base ${cl} duration-300 cursor-pointer`}>{children}</button>
  )
}
