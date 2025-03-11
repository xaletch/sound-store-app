export const Shadow = ({ cl }: { cl?: string }) => {
  return (
    <div className={`absolute left-20 -top-16 -translate-x-2/4 w-62 h-62 rounded-full blur-[50px] bg-[#7cc0ab] ${cl}`}></div>
  )
}