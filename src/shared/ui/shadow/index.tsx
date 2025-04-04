export const Shadow = ({ cl }: { cl?: string }) => {
  return (
    <div className={`absolute -z-10 rounded-full bg-[#7cc0ab] ${cl}`}></div>
  )
}