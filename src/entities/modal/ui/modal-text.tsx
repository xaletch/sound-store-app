export const ModalText = ({ children, cl = '' }: { children?: React.ReactNode, cl?: string }) => {
  return (
    <div className={`text-base md:text-lg font-medium text-black ${cl}`}>
      {children}
    </div>
  )
}
