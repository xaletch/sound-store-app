import { Loader } from "@/shared/ui";

export const FolderCardLoader = () => {
  return (
    <div className="border border-black/5 rounded-md duration-300">
      <div className="pt-2.5 pb-1.5">
        <div className='mx-2.5 rounded-xl overflow-hidden aspect-square'>
          <Loader borderRadius={12} />
        </div>
        <div className="my-2 px-2.5">
          <Loader borderRadius={6} height={18} />
          <Loader borderRadius={6} height={14} width={10} cl="min-w-[80%] mt-1" />   
        </div>
        <Loader borderRadius={6} height={12} width={10} cl="min-w-[40%] ml-2.5 mr-1" />
      </div>
    </div>
  )
}
