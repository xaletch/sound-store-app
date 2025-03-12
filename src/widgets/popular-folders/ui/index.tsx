import { FolderCard } from "@/features/folders"
import { LinkButton } from "@/shared/ui"
import { FoldersCardWrapper } from "@/widgets/folders"
import { SectionTitle } from "@/widgets/section-title"

export const PopularFolders = () => {
  return (
    <div className="px-4">
      <SectionTitle title={"Популярные паки"}>
        <LinkButton href="/folders">Смотреть все</LinkButton>
      </SectionTitle>
      <div>
        <FoldersCardWrapper>
          <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
          <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
          <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
          <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
          <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
          <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
        </FoldersCardWrapper>
      </div>
    </div>
  )
}
