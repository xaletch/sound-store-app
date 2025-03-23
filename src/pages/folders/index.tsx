import { foldersSelector } from "@/entities/folders/model/selector"
import { useGetAllFoldersQuery } from "@/entities/folders/model/services"
import { setFolders } from "@/entities/folders/model/slice"
import { filterSelector } from "@/features/filters/model/selector"
import { FolderCard } from "@/features/folders"
import { FolderCardLoader } from "@/features/folders/ui/folder-card-loader"
import { FoldersCardWrapper } from "@/widgets/folders"
import { NotFound } from "@/widgets/not-found"
import { Sort } from "@/widgets/sort"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useDispatch, useSelector } from "react-redux"

export const Folders = () => {
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector(filterSelector);

  const [page, setPage] = useState<number>(1);

  const { folders } = useSelector(foldersSelector);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { data, isLoading } = useGetAllFoldersQuery({ 
    page: page.toString(),
    Name: '',
    Genre: selectedFilters.Genre || [],
    Type: selectedFilters.Type || [],
    Instruments: selectedFilters.Instruments || [] 
  });
  
  useEffect(() => {
    if (data && data.Packs) {
      dispatch(setFolders({ folders: data.Packs, replace: page === 1 }));
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(setFolders({ folders: [], replace: true }));
    setPage(1);
  }, [selectedFilters, dispatch]);


  useEffect(() => {
    if (data?.Packs.length && inView) {
      setPage((prev) => prev += 1);
    }
  }, [inView]);
  
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
        <div>
          {folders && folders?.length > 0 ? (
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
          )}
          <div ref={ref}></div>
        </div>
      )}
    </div>
  )
}
