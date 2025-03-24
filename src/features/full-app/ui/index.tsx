import { FullOpenIcon } from "@/shared/icons"

export const FullAppButton = ({fullScreen}: { fullScreen: () => void }) => {

  return (
    <button onClick={fullScreen} className="border border-black rounded-lg cursor-pointer hover:opacity-70 duration-300">
      <FullOpenIcon />
    </button>
  )
}
