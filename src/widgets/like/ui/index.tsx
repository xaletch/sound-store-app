import { SoundContent } from "@/widgets"
import { LikeSort } from "./like-sort"
import { useSelector } from "react-redux";
import { lovedSelector } from "@/entities/loved/model/selector";
import { LoveNot } from "./not";

export const LikeContent = () => {
  const { lovedTracks } = useSelector(lovedSelector);

  return (
    <>
      {lovedTracks.length > 0 ?
        (
          <div>
            <LikeSort />
            <SoundContent data={lovedTracks} />
          </div>
        )
      : <LoveNot />
      }
    </>
  )
}
