import { LikeSelectIcon, LikeThinIcon } from "@/shared/icons"

export const TrackLike = ({ isLike }: { isLike: boolean }) => {
  return (
    <button>
      {isLike ? <LikeSelectIcon /> : <LikeThinIcon/>}
    </button>
  )
}
