import { FilterItem } from "@/features/filters"
import { FilterButton } from "@/shared/ui"
import { useState } from "react";

type SelectedItems = {
  [key: string]: string[];
};

type FilterItems = {
  [key: string]: string[];
};

export const Sort = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const [selectedItems, setSelectedItems] = useState<SelectedItems>({
    Жанр: [],
    Инструменты: [],
    Ваншоты: [],
  });
  
  const handleFilterClick = (filterName: string) => {
    if (activeFilter === filterName) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filterName);
    }
  };
  
  const handleItemClick = (itemName: string) => {
    if (activeFilter) {
      setSelectedItems((prev) => {
        if (itemName === "explore all") {
          const allItems = filterItems[activeFilter];
          const isExploreAllSelected = prev[activeFilter].includes("explore all");
  
          if (isExploreAllSelected) {
            return { ...prev, [activeFilter]: [] };
          } else {
            return { ...prev, [activeFilter]: allItems };
          }
        } else {
          const updatedItems = prev[activeFilter].includes(itemName)
            ? prev[activeFilter].filter((item) => item !== itemName)
            : [...prev[activeFilter], itemName];
  
          const isExploreAllSelected = updatedItems.includes("explore all");
          if (isExploreAllSelected) {
            return { ...prev, [activeFilter]: updatedItems.filter((item) => item !== "explore all") };
          }
  
          return { ...prev, [activeFilter]: updatedItems };
        }
      });
    }
  };
  
  const filterItems: FilterItems = {
    Жанр: ["hip-hop", "drum&bass", "trap", "r&b", "pop", "tech house", "edm", "disco", "soul", "techno", "cinematic", "reggaeton", "explore all"],
    Инструменты: ["Инструменты", "drum&bass", "trap", "r&b", "pop", "tech house", "edm", "disco", "soul", "techno", "cinematic", "reggaeton", "explore all"],
    Ваншоты: ["Ваншоты", "drum&bass", "trap", "r&b", "pop", "tech house", "edm", "disco", "soul", "techno", "cinematic", "reggaeton", "explore all"],
  };

  return (
    <div className="mt-4">
      <div className="flex items-center gap-1">
        <FilterButton cl={`px-5 min-w-20 400:min-w-[107px] max-w-[107px] w-full md:min-w-[220px] ${activeFilter === 'Жанр' ? 'bg-red-500' : ''}`} onClick={() => handleFilterClick("Жанр")}>Жанр</FilterButton>
        <FilterButton cl={`px-2.5 flex-1 min-w-[110px] 380:min-w-[130px ${activeFilter === 'Инструменты' ? 'bg-red-500' : ''}]`} onClick={() => handleFilterClick("Инструменты")}>Инструменты</FilterButton>
        <FilterButton cl={`px-3 min-w-20 400:min-w-[107px] max-w-[107px] w-full md:min-w-[220px] ${activeFilter === 'Ваншоты' ? 'bg-red-500' : ''}`} onClick={() => handleFilterClick("Ваншоты")}>Ваншоты</FilterButton>
      </div>
      {activeFilter && (
        <div className="overflow-x-auto mt-4 screen">
          <div className="max-w-5xl flex items-center gap-1">
            {filterItems[activeFilter].map((item) => (
              <FilterItem
                key={item}
                name={item}
                select={selectedItems[activeFilter].includes(item)}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
