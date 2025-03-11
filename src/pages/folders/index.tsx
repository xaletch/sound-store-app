import { FolderCard } from "@/features/folders"
import { FoldersCardWrapper, FoldersSort } from "@/widgets/folders"

export const Folders = () => {
  return (
    <div className="px-4 pb-4">
      <FoldersSort />
      <FoldersCardWrapper>
        <FolderCard href={"#"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
        <FolderCard href={"#"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
        <FolderCard href={"#"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
        <FolderCard href={"#"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
        <FolderCard href={"#"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
        <FolderCard href={"#"} image={"/image/executor.png"} name={"Название"} genre={"Жанр"} naming={"Audentuty Records"} />
      </FoldersCardWrapper>
    </div>
  )
}
