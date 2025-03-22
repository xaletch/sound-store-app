import { foldersSelector } from "@/entities/folders/model/selector"
import { useGetAllFoldersQuery } from "@/entities/folders/model/services"
import { setFolders } from "@/entities/folders/model/slice"
import { filterSelector } from "@/features/filters/model/selector"
import { FolderCard } from "@/features/folders"
import { FolderCardLoader } from "@/features/folders/ui/folder-card-loader"
import { FoldersCardWrapper } from "@/widgets/folders"
import { NotFound } from "@/widgets/not-found"
import { Sort } from "@/widgets/sort"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const Folders = () => {
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector(filterSelector)

  const { folders } = useSelector(foldersSelector);

  const { data, isLoading } = useGetAllFoldersQuery({ 
    page: '1',
    Name: '',
    Genre: selectedFilters.Genre || [],
    Type: selectedFilters.Type || [],
    Instruments: selectedFilters.Instruments || [] 
  });

  useEffect(() => {
    if (data && data.Packs) {
      dispatch(setFolders(data.Packs));
    }
  }, [data, dispatch])
  
  return (
    <div className="px-4 pb-4">
      <h1 className="text-center font-medium text-xl">Фильтры</h1>
      <div className="my-6">
        <Sort />
      </div>
      {isLoading ? (
        <FoldersCardWrapper>
          {Array.from({ length: 6 }).map((_, index) => (
            <FolderCardLoader key={index} />
          ))}
        </FoldersCardWrapper>
      ) : (
        folders && folders?.length > 0 ? (
          <FoldersCardWrapper>
            {folders.map((item, index) => (
              <FolderCard 
                key={index}
                href={`/sound/${item.Id}`} 
                image={item.PhotoPath || "/image/executor.png"} 
                name={item.Name} 
                genre={item.Genre} 
                naming={item.Autor} 
                id={item.Id.toString()} 
              />
            ))}
          </FoldersCardWrapper>
        ) : (
          <NotFound text="Ничего не найдено"/>
        )
      )}
    </div>
  )
}
