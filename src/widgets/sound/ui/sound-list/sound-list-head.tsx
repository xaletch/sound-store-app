export const SoundListHead = () => {
  return (
    <div className="border-t border-b border-black/20 my-5">
      <div className="p-1 grid grid-cols-[40px_10px_65px_38px_25px_12px_16px] md:grid-cols-[50px_25px_300px_38px_25px_20px_20px] justify-between gap-3 400:gap-6 items-center">
        <div className="text-xs md:text-base font-medium text-[#1D1F22]/40">Набор</div>
        <div className="text-xs md:text-base font-medium text-[#1D1F22]/40"></div>
        <div className="text-xs md:text-base font-medium text-[#1D1F22]/40">Название</div>
        <div className="text-xs md:text-base font-medium text-[#1D1F22]/40">Время</div>
        <div className="text-xs md:text-base font-medium text-[#1D1F22]/40">Bpm</div>
      </div>
    </div>
  )
}
