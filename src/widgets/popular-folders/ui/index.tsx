import { useGetPopularFoldersQuery } from "@/entities/folders/model/services"
import { setPopularPack } from "@/entities/folders/model/slice"
import { FolderCard } from "@/features/folders"
import { FolderCardLoader } from "@/features/folders/ui/folder-card-loader"
import { LinkButton } from "@/shared/ui"
import { FoldersCardWrapper } from "@/widgets/folders"
import { SectionTitle } from "@/widgets/section-title"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const PopularFolders = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetPopularFoldersQuery({ id: '1' });
  
  useEffect(() => {
    if (data && data.Packs) {
      dispatch(setPopularPack(data.Packs));
    }
  }, [data, dispatch]);

  return (
    <div className="px-4">
      <SectionTitle title={"Популярные паки"}>
        <LinkButton href="/folders">Смотреть все</LinkButton>
      </SectionTitle>
      <div>
        <FoldersCardWrapper>
          {isLoading || !data?.Packs ? (
            Array.from({ length: 6 }).map((_, index) => (
              <FolderCardLoader key={index} />
            ))
          ) : (
            data?.Packs.slice(0, 6).map((item, index) => (
              <FolderCard 
                key={index} 
                href={`/sound/${item.Id}`} 
                image={item.PhotoPath || "/image/executor.png"} 
                name={item.Name} 
                genre={item.Genre} 
                naming={item.Describe.slice(0, 20)}
                id={item.Id.toString()} 
              />
            ))
          )}
        </FoldersCardWrapper>
      </div>
    </div>
  )
}
