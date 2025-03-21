import { SoundWrapperButton } from "@/entities/sound"
import { Loader } from "@/shared/ui"

export const SoundInformationLoader = () => {

  return (
    <div className="border border-black/20 rounded-xl">
      <div className="px-3 py-4">
        <div className="flex justify-between">
          <div className="min-w-[140] max-w-[155px] min-h-[140px]  md:min-w-[220px] md:min-h-[220px] rounded-xl overflow-hidden">
            <Loader cl="min-w-[140] w-full h-full md:min-w-[220px]" width={140} />
          </div>
          <div className="md:w-[320px] w-[150px] ml-6 md:flex md:flex-col md:justify-between">
            <div>
              <div>
                <Loader height={22} width={10} borderRadius={8} cl="min-w-[80%]" />
                <Loader height={18} borderRadius={8} cl="mt-1.5" />
              </div>
            </div>
            <SoundWrapperButton>
              <Loader borderRadius={50} height={26} />
              <Loader borderRadius={50} height={26} />
            </SoundWrapperButton>
          </div>
        </div>
        <Loader borderRadius={8} width={0} height={34} cl="mt-4 w-[60%]" />
      </div>
    </div>
  )
}
