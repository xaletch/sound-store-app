import { useGetPopularTracksQuery } from "@/entities/folders/model/services"
import { SamplesCard } from "@/features/samples"
import { LinkButton } from "@/shared/ui"
import { SectionTitle } from "@/widgets/section-title"

export const PopularSamples = () => {
  const { data: popularTracks } = useGetPopularTracksQuery({ page: 1 });

  return (
    <div className="px-4">
      <SectionTitle title={"Популярные сэмплы"}>
        <LinkButton href="/search">Смотреть все</LinkButton>
      </SectionTitle>
      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        {popularTracks?.Tracks.slice(0, 6).map((item, index) => (
          <SamplesCard key={index} image={"/image/executor.png"} name={item.Name} genre={item.Genre} />
        ))}
      </div>
    </div>
  )
}
