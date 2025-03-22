import { useGetPopularTracksQuery } from "@/entities/folders/model/services"
import { setPlayerTracks } from "@/features/audio-player/model/slice"
import { SamplesCard } from "@/features/samples"
import { SamplesCardLoading } from "@/features/samples/ui/card-loading"
import { LinkButton } from "@/shared/ui"
import { SectionTitle } from "@/widgets/section-title"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const PopularSamples = () => {
  const dispatch = useDispatch();
  const { data: popularTracks, isLoading } = useGetPopularTracksQuery({ page: 1 });

  useEffect(() => {
    if (popularTracks && popularTracks.Tracks) {
      dispatch(setPlayerTracks(popularTracks.Tracks));
    }
  }, [popularTracks, dispatch]);

  return (
    <div className="px-4">
      <SectionTitle title={"Популярные сэмплы"}>
        <LinkButton href="/search">Смотреть все</LinkButton>
      </SectionTitle>
      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        {isLoading || !popularTracks?.Tracks ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SamplesCardLoading key={index}/>
          ))
        ) : (
          popularTracks?.Tracks.slice(0, 6).map((item, index) => (
            <SamplesCard key={index} image={"/image/executor.png"} name={item.Name} id={item.Id} packId={item.PackId} author={item.Author} />
          ))
        )}
      </div>
    </div>
  )
}
