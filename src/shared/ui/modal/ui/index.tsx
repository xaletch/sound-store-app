interface ModalProps {
  close: () => void;
  children?: React.ReactNode
}

export const Modal = ({ close, children }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center" onClick={close}>
      <div className="max-w-90 rounded-xl border border-black bg-[#7CC0AB] w-full" onClick={(e) => e.stopPropagation()}>
        <div className="pt-4.5 px-7 pb-3.5 flex flex-col gap-4">
          {children}
        </div>
      </div>
    </div>
  )
}
 