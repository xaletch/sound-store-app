import { Loader } from "@/shared/ui";

export const SamplesCardLoading = () => {

  return (
    <div className="rounded-3xl border border-black/5">
      <div className="px-2 py-2.5 flex items-center gap-3.5">
        <div className="rounded-xs overflow-hidden w-6.5 h-6.5 md:w-14 md:h-14 md:rounded-lg">
          <Loader borderRadius={12 }/>
        </div>
        <div>
          <Loader width={24} height={24} borderRadius={6}/>
        </div>
        <div className="flex flex-col flex-1">
          <Loader borderRadius={8} width={10} height={16} cl={'min-w-[60%]'} />
          <Loader borderRadius={8} width={10} height={14} cl={'mt-1 min-w-[40%]'} />
        </div>
      </div>
    </div>
  )
}
