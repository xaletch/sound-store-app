interface BigButtonProps {
  children?: React.ReactNode;
  cl?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit"
}

export const PaymentButton = ({ children, cl, disabled, onClick, type="button" }: BigButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type} className={`w-full px-10 py-5 rounded-3xl border border-black text-xl font-medium flex items-center justify-center ${cl} duration-300`}>
      {children}
    </button>
  )
}