import { LikeContent } from "@/widgets"

export const Favourites = () => {
  return (
    <div className="px-4 pb-4">
      <h1 className="text-center font-medium text-xl">Любимые сэмплы</h1>
      <div>
        <LikeContent />
      </div>
    </div>
  )
}
