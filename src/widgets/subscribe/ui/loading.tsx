import { Loader } from "@/shared/ui"

export const SubscribeLoading = () => {
  return (
    <div className="mt-8.5">
      <div className="flex flex-col gap-4">
          <div 
            className={`w-full h-[206px] border border-black/5 relative rounded-4xl`}
          >
            <div className="flex flex-col items-center px-4 py-2.5 md:py-4 justify-between h-full">
              <Loader height={52} borderRadius={16} />
              <Loader height={38} borderRadius={12} />
              <Loader height={34} borderRadius={12} />
            </div>
          </div>
          <div 
            className={`w-full h-[206px] border border-black/5 relative rounded-4xl`}
          >
            <div className="flex flex-col items-center px-4 py-2.5 md:py-4 justify-between h-full">
              <Loader height={52} borderRadius={16} />
              <Loader height={38} borderRadius={12} />
              <Loader height={34} borderRadius={12} />
            </div>
          </div>
      </div>
    </div>
  )
}
