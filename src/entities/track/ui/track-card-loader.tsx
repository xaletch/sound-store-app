import { Loader } from "@/shared/ui"

export const TrackLoader = () => {
  return (
    <div className="grid grid-cols-[40px_10px_65px_38px_25px_12px_16px] md:grid-cols-[50px_25px_300px_38px_25px_20px_20px] responsive-grid justify-between items-center px-1">
      <div className="w-full">
        <Loader width={56} height={56} />
      </div>
      <div>
        <Loader width={24} height={24} borderRadius={8} />
      </div>
      <div className="flex flex-col font-medium text-xs md:text-base">
        <Loader width={10} cl="min-w-[70%]" height={18} borderRadius={12} />
        <Loader height={18} borderRadius={12} cl="mt-1"/>
      </div>
      <div className="font-medium text-[#1D1F22]/20 text-xs md:text-base">
        <Loader height={18} borderRadius={12} />
      </div>
      <div className="font-medium text-[#1D1F22]/20 text-xs md:text-base">
        <Loader height={18} borderRadius={12} />
      </div>
      <Loader width={24} height={24} borderRadius={8} />
      <Loader width={24} height={24} borderRadius={8} />
    </div>
  )
}