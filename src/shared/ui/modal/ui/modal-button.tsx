interface ModalButtonProps {
  icon?: React.ReactNode;
  name: string;
  onClick: () => void;
}

export const ModalButton = ({ icon, name, onClick }: ModalButtonProps) => {
  return (
    <button className="rounded-full bg-[#1D1F22] text-[#E7E4DD] h-10 cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-3.5 justify-center py-2.5 h-full">
        {icon && <span>{icon}</span>}
        <p className="text-sx md:text-base font-medium">{name}</p>
      </div>
    </button>
  )
}
