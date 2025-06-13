import { useLovedTrackMutation, useUnLovedTrackMutation } from "@/entities/loved/model/services"
import { LikeSelectIcon, LikeThinIcon } from "@/shared/icons"
import { useState } from "react";

export const TrackLike = ({ isLike, id }: { isLike: boolean, id: number }) => {

  const [loved] = useLovedTrackMutation();
  const [unLoved] = useUnLovedTrackMutation();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLike = async () => {
    setIsLoading(true);
    try {
      if (isLike) {
        await unLoved({ id: id.toString() });

      } else {
        await loved({ id: id.toString() });
      }
    }
    catch (err) {
      console.error('Не удалось добавить трек в избранное', err);
    }
    finally {
      setIsLoading(false);
    }
  }
  return (
    <button onClick={handleLike} disabled={isLoading} className="cursor-pointer flex items-center justify-center">
      {isLike ? <LikeSelectIcon /> : <LikeThinIcon/>}
    </button>
  )
}
