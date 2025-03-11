import { SamplesCard } from "@/features/samples"
import { LinkButton } from "@/shared/ui"
import { SectionTitle } from "@/widgets/section-title"

export const PopularSamples = () => {
  return (
    <div className="px-4">
      <SectionTitle title={"Популярные паки"}>
        <LinkButton href="/folders">Смотреть все</LinkButton>
      </SectionTitle>
      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        <SamplesCard image={"/image/executor.png"} name={"Название"} genre={"Жанр"} />
        <SamplesCard image={"/image/executor.png"} name={"Название"} genre={"Жанр"} />
        <SamplesCard image={"/image/executor.png"} name={"Название"} genre={"Жанр"} />
        <SamplesCard image={"/image/executor.png"} name={"Название"} genre={"Жанр"} />
        <SamplesCard image={"/image/executor.png"} name={"Название"} genre={"Жанр"} />
        <SamplesCard image={"/image/executor.png"} name={"Название"} genre={"Жанр"} />
      </div>
    </div>
  )
}
