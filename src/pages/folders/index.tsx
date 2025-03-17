import { FolderCard } from "@/features/folders"
import { FoldersCardWrapper, FoldersSort } from "@/widgets/folders"

export const Folders = () => {
  return (
    <div className="px-4 pb-4">
      <FoldersSort />
      <FoldersCardWrapper>
        <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} id={"1"} />
        <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} id={"2"} />
        <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} id={"3"} />
        <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} id={"4"} />
        <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} id={"5"} />
        <FolderCard href={"/sound/$name"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} id={"6"} />
      </FoldersCardWrapper>
    </div>
  )
}
